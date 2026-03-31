import hackaturi2026 from './hackaturi2026.js';

export const ARCHIVE_EVENTS = [hackaturi2026];

export const ARCHIVE_EVENTS_BY_ID = ARCHIVE_EVENTS.reduce((acc, event) => {
  acc[event.id] = event;
  return acc;
}, {});

export const DEFAULT_ARCHIVE_EVENT_ID = '2026';

export const ARCHIVE_NAV_ITEMS = ARCHIVE_EVENTS.map((event) => ({
  id: `#archive-${event.id}`,
  label: event.navLabel,
}));

