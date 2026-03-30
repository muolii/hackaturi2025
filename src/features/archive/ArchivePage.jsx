import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaCamera } from 'react-icons/fa';
import Winners from './components/Winners.jsx';
import { ARCHIVE_EVENTS_BY_ID, DEFAULT_ARCHIVE_EVENT_ID } from './data/events/index.js';
import '../../shared/styles/shared.css';
import './ArchivePage.css';

const REPO_IMAGE_FILES = import.meta.glob('/{src,public}/**/*.{png,jpg,jpeg,webp,avif,gif}', {
  eager: true,
  import: 'default',
  query: '?url',
});

const normalizeDirectoryPath = (path = '') => {
  const trimmed = path.trim();
  if (!trimmed) return '';
  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
};

const getImagesFromPhotoDirectory = (photoDirectory) => {
  const normalizedDir = normalizeDirectoryPath(photoDirectory);
  if (!normalizedDir) return [];

  return Object.entries(REPO_IMAGE_FILES)
    .filter(([filePath]) => filePath.startsWith(normalizedDir))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map(([, imageUrl]) => imageUrl)
    .filter(Boolean);
};

const ArchivePage = ({ eventId = DEFAULT_ARCHIVE_EVENT_ID, onClose }) => {
  const event = ARCHIVE_EVENTS_BY_ID[eventId] || ARCHIVE_EVENTS_BY_ID[DEFAULT_ARCHIVE_EVENT_ID];
  const photoLinks = event.links?.photos || [];
  const directoryImages = getImagesFromPhotoDirectory(event.photoDirectory);

  // Prefer loading hero images from a repo directory; fallback to explicit list.
  const heroImages = directoryImages.length > 0
    ? directoryImages
    : (event.heroImages || []).filter(Boolean);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  // Auto-cycle through the images every 10 seconds
  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="archive-page-overlay">
      <div className="archive-page-inner content">
        <button className="archive-back-btn" onClick={onClose}>
          <FaArrowLeft /> Back to Main Site
        </button>

        <div className="archive-intro">
          {/* LEFT — Image Carousel */}
          <div className="archive-intro__left">
            <div className="archive-carousel">
              {heroImages.length > 0 ? (
                <>
                  <img
                    key={currentImageIndex} /* Forces re-render for animation */
                    src={heroImages[currentImageIndex]}
                    alt={`${event.pageTitle} — photo ${currentImageIndex + 1}`}
                    className="archive-carousel-img fade-in"
                  />
                  {heroImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="archive-carousel-arrow archive-carousel-arrow--left"
                        onClick={goToPreviousImage}
                        aria-label="Previous photo"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        type="button"
                        className="archive-carousel-arrow archive-carousel-arrow--right"
                        onClick={goToNextImage}
                        aria-label="Next photo"
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                </>
              ) : (
                <div className="archive-event-image-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span>No Event Photos</span>
                </div>
              )}

              {/* Optional dot indicators */}
              {heroImages.length > 1 && (
                <div className="archive-carousel-dots">
                  {heroImages.map((_, idx) => (
                    <span
                      key={idx}
                      className={`archive-dot ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* PHOTO GALLERY LINKS */}
            {photoLinks.length > 0 && (
              <div className="archive-link-body">
                <div className="archive-photo-links">
                  {photoLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="archive-photo-pill"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                {event.photoCredit && (
                  <p className="archive-photo-credit">
                    Photo credit: <span>{event.photoCredit}</span>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* RIGHT — Description & Blended Links */}
          <div className="archive-intro__right">
            <div className="archive-intro__text">
            <h1 className="archive-intro__title">{event.pageTitle}</h1>
              {event.pageSubtitle && (
                <p className="archive-subtitle">{event.pageSubtitle}</p>
              )}
              {event.pageDescription && (
                <p className="archive-subtitle archive-description">{event.pageDescription}</p>
              )}
            </div>

            <div className="archive-intro__links">
              <a
                href={event.links?.devpostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="archive-link-card"
              >
                <div className="archive-link-icon">
                  <FaExternalLinkAlt />
                </div>
                <div className="archive-link-body">
                  <h2>View all projects on Devpost</h2>
                  <p>Browse every submission, category winner, and honorable mention.</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <section className="archive-winners-wrapper">
          <Winners
            title={event.winners?.title}
            subtitle={event.winners?.subtitle}
            winnersData={event.winners?.items}
            winnersAnnounced={event.winners?.announced}
          />
        </section>
      </div>
    </div>
  );
};

export default ArchivePage;