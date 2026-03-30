const hackaturi2026 = {
  id: '2026',
  navLabel: 'Hack@URI 2026',
  pageTitle: 'Hack@URI 2026',
  pageSubtitle: 'This weekend brought together developers, designers, and creators from all backgrounds to push the boundaries of what\'s possible. From the opening keynote to the final project demos, the energy was unmatched. Explore the photo galleries to see teams in action, and head over to Devpost to dive deep into every single submission, honorable mention, and category winner that made this event a massive success.',
  links: {
    devpostUrl: 'https://hack-uri-2026.devpost.com/project-gallery',
    photos: [
      { label: 'Saturday Photos', url: 'https://drive.google.com/drive/folders/18RKoIixElYTEjMGwyXsr3FruBcM_-WbH' },
      { label: 'Sunday Photos', url: 'https://drive.google.com/drive/folders/1-RmEGMDZ7bZY_hui9-8loiIrd_fL_JrR' },
      { label: 'Unedited Saturday Photos', url: 'https://drive.google.com/drive/folders/10k67Ef2Ez-GDxfAf6Yrt1AE_-x4cQcrW' },
    ],
  },
  photoCredit: 'Saturday & Sunday: Chris Batista and Andrew Baccari. Closing Ceremony: Leah Pisari.',
  photoDirectory: '/public/images/past-events/hackaturi2026',
  winners: {
    title: 'Event Winners',
    subtitle: 'Hack@URI 2026',
    announced: true,
    items: [
      // ── Main Track Winners ──────────────────────────────────────────────────
      {
        projectName: 'Respondr',
        teamMembers: ['Pranish Uprety', 'Rahul Mandal', 'Shovan Raut', 'Anshuraj Sedai'],
        description: 'An emergency response platform that connects patients to verified doctors and nearby volunteers in seconds, sharing live wearable data to guide care until professional help arrives.',
        tracks: ['🏆 Hack to Health Winner', '🏅 MLH: Best Use of Presage'],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/352/012/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/respondr-zqegfs',
      },
      {
        projectName: 'FishNet',
        teamMembers: ['Kacper Kurowski', 'Victor Paulino', 'Aidan Donnellan'],
        description: "An AI-native seafood price forecasting platform that maps daily historic weather conditions to species price movements across New England, helping distributors navigate climate-driven revenue volatility.",
        tracks: ["🌊 Ocean's Edge Ventures Winner"],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/004/349/258/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/fishnet-5gq8jt',
      },
      {
        projectName: 'Pockitt',
        teamMembers: ['Owen Cunnie', 'Thomas W'],
        description: 'A location-based anonymous chat app inspired by Pictochat, letting users connect with people physically nearby through text and drawing — no emojis, no images, just creativity.',
        tracks: ['🎨 Creative Currents Winner'],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/004/357/521/datas/medium.jpg',
        devpostUrl: 'https://devpost.com/software/pockitt',
      },
      {
        projectName: 'Polarity',
        teamMembers: ['Prince Thapa', 'alok0814 Shrestha', 'Leandhy Williams'],
        description: '5 AI agents, one bias score. Polarity analyzes any news article through far-left, left, center, right, and far-right perspectives then scores exactly where it stands on the political spectrum.',
        tracks: ['🌊 SplashZone Winner'],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/362/632/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/polarity-2ncyf7',
      },

      // ── Yconic Winners ──────────────────────────────────────────────────────
      {
        projectName: 'Phogent',
        teamMembers: ['Sonya Cheteyan', 'Lucas Webber', 'edward-tavarez', 'NathanFowler812 Fowler'],
        description: 'An AI communication bridge from phone to text — users type while an AI voice speaks their words to the caller in real time, making phone calls fully accessible for those with speech, hearing, or anxiety barriers.',
        tracks: ['🤖 Yconic: Neural Tide — AI Startup Winner'],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/004/357/043/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/phone-agent',
      },
      {
        projectName: 'Navi Grid',
        teamMembers: ['Aditya Gulati', 'Jacob Carani', 'OgoOluwa A'],
        description: 'Indoor navigation using only your smartphone camera and a building floor plan — no hardware, no setup, just a photo. Uses computer vision OCR to detect room numbers and update your position in real time.',
        tracks: ['🤖 Yconic: Neural Tide — AI Project Winner'],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/357/408/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/navi-grid',
      },
      {
        projectName: 'ZeroWall',
        teamMembers: ['Damien Johnson'],
        description: 'A generative AI firewall on NVIDIA DGX Spark that mutates code, replays exploits, verifies safe behavior, and redeploys hardened variants in real time — continuously shifting the attack surface so exploits stop working.',
        tracks: ['🤖 Yconic: Neural Tide — NVIDIA Winner'],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/366/241/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/zerowall',
      },

      // ── MLH Winners ─────────────────────────────────────────────────────────
      {
        projectName: 'Super Simple Stocks',
        teamMembers: ['Joshua Miller', 'Rocco'],
        description: 'A multi-agent AI stock research platform that delivers readable investment advice to beginners and advanced investors alike, pulling real-time data and periodically alerting users when news may affect their portfolio.',
        tracks: ['🏅 MLH: Best Use of Gemini API'],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/349/266/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/super-simple-stocks',
      },
      {
        projectName: 'KineticK9',
        teamMembers: ['Gordon Beckler', 'Devesh Kumar'],
        description: 'A multimodal control interface for a simulated quadruped robot — control it with voice commands, text, or a graphical dashboard, with ElevenLabs powering both speech-to-text input and the robot\'s audio feedback.',
        tracks: ['🏅 MLH: Best Use of ElevenLabs'],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/352/631/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/dgxdawgs',
      },
      {
        projectName: 'HiveMind',
        teamMembers: ['Hannah Ritchie', 'Paul Li', 'haibien085', 'Kalen Shamy'],
        description: 'A Gemini-powered project manager integrated with GitHub that reads a repo, turns it into features and tasks, feeds them back as GitHub issues, and keeps everything in sync via webhooks — so dev teams work as a cohesive hive.',
        tracks: ['🏅 MLH: Best Use of MongoDB Atlas'],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/004/355/484/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/hivemind-wbir1t',
      },
    ],
  },
};

export default hackaturi2026;