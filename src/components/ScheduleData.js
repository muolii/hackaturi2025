// src/components/scheduleData.js
// Single source of truth for schedule data, speaker info, and helpers.
// Shared between UpNext.jsx, Schedule.jsx, SchedulePage.jsx, and WorkshopModal.jsx.

// ─── Event Type Colors ────────────────────────────────────────────────────────
export const EVENT_TYPE_COLORS = {
  hacking:  '#27AE60',
  ceremony: '#C0392B',
  food:     '#5B2C6F',
  workshop: '#275e83',
  activity: '#B8860B',
  mentoring:'#145A32',
  cyber:    '#117A65',
  beginner: '#3b8ec5',
};

export const getEventTypeColor = (type) => EVENT_TYPE_COLORS[type] || '#0C3A40';

// ─── Speaker / Workshop Data ──────────────────────────────────────────────────
// Keyed by lowercase workshop title. getSpeakerByTitle() does fuzzy matching.
// Images live at: public/images/workshop-speakers/<first>_<last>.png
export const SPEAKERS = {
  'advanced software engineering with ai': {
    name: 'Arnell Millhouse',
    role: 'CEO/Founder',
    company: 'YConic',
    image: '/images/workshop-speakers/Arnell_Millhouse.png',
    bio: 'Arnell Milhouse is a serial entrepreneur, technologist, and humanitarian leader whose career has been defined by expanding access to opportunity through technology and entrepreneurship. Over the past decade, he has founded and scaled multiple high-impact ventures, raising more than $20 million in capital while mentoring hundreds of startup founders. He previously served as Entrepreneur in Residence at Brown University, and his work has helped more than 10,000 people gain careers in technology.',
    description: 'Yconic has created a novel way of leveraging AI for software engineering. This workshop reframes software engineering for the AI era — participants will learn how modern engineers compress months of development into days by working in partnership with AI systems as active collaborators. The session focuses on real startup-grade workflows used inside yconic and DevAccelerator, where engineers design, build, test, and iterate production-ready applications at extreme speed.',
    workshopTitle: 'Advanced Software Engineering with AI',
  },
  'cloud native digital transformation': {
    name: 'Rupesh Prasad',
    role: 'Senior Manager, Applications Programming',
    company: 'Analog Devices Inc',
    image: '/images/workshop-speakers/Rupesh_Prasad.jpeg',
    bio: 'Rupesh Prasad is a technology innovator and cloud-native strategist with 17+ years of experience designing and delivering high-performance, enterprise-scale systems. He has led global teams, driven digital transformation initiatives, and helps organizations leverage cloud architectures and automation to achieve real business impact. Rupesh is passionate about translating complex technology into actionable strategies that shape the future of enterprise applications.',
    description: 'This workshop focuses on what real cloud-native digital transformation looks like beyond buzzwords. We will break down how architecture, automation, and operating models must change to truly leverage the cloud, using practical examples from large-scale enterprise systems. Attendees will leave with a clear framework to distinguish cloud-hosted systems from genuinely cloud-native platforms.',
    workshopTitle: 'Cloud Native Digital Transformation',
  },
  'guardians of the model: defending against prompt injection and adversarial ai': {
    name: 'Manikandan Chandran',
    role: 'Senior Software Engineer & Author',
    company: 'Shipping & Maritime Industry',
    image: '/images/workshop-speakers/Manikandan_Chandran.jpeg',
    bio: 'Manikandan Chandran is a senior software engineer, researcher, and author focused on prompt injection, LLM security, and adversarial AI risks. He brings over 15 years of experience across cloud, distributed systems, and real-world AI deployments. He is the author of the AIronautical Engineering book series and an IEEE Senior Member who speaks on how AI systems fail in production and how to design guardrails that actually work.',
    description: 'As Large Language Models become central to modern infrastructure, understanding their unique vulnerabilities is no longer optional. This workshop provides a deep dive into the mechanics of prompt injection, demonstrating how attackers bypass safety rails to hijack model logic. We will also explore the subtle risks of data poisoning and cover robust defense-in-depth strategies to ensure your AI implementations remain secure and resilient against evolving threats.',
    workshopTitle: 'Guardians of the Model: Defending Against Prompt Injection and Adversarial AI',
  },
  'factset: flexible data solutions for investment decision making': {
    name: 'Gabrielle Picón',
    role: 'Consultant, Client Solutions',
    company: 'FactSet',
    image: '/images/workshop-speakers/Gabrielle_Picon.png',
    bio: 'Gabrielle Picón is a Consultant at FactSet, where she works with institutional asset management clients across the Northeast to interpret data and address operational workflow needs. She brings a strategic mindset and delivers solutions that help clients navigate complex trading, analysis, and reporting workflows. Gabrielle graduated from the University of New Haven with a degree in Business Management.',
    description: "Discover FactSet's approach to empowering investment decisions with real-time data, AI capabilities, and consistent analytics. This presentation focuses on practical strategies for integrating technology into investment workflows while prioritizing client partnership and understanding unique requirements in the evolving financial landscape.",
    workshopTitle: 'FactSet: Flexible Data Solutions for Investment Decision Making',
  },
  'generative art and pen plotting': {
    name: 'Travess Smalley',
    role: 'Assistant Professor of Print Media',
    company: 'University of Rhode Island',
    image: '/images/workshop-speakers/Travess_Smalley.webp',
    bio: 'Artist working with computation to make generative image systems — creating painting software, computer graphics, digital images, books, drawings, and Pixel Rugs. Teaching Print Media in the College of Arts and Sciences at the University of Rhode Island.',
    description: 'Combining creative code with drawing: using pen plotters to make physical drawings and paintings from code. This hands-on session explores the intersection of algorithmic art and physical media, showing how generative systems can produce one-of-a-kind visual work.',
    workshopTitle: 'Generative Art and Pen Plotting',
  },
  'a day in the life of a cyber threat intelligence analyst': {
    name: 'Jordan Carpenter',
    role: 'Senior Cyber Threat Intelligence Specialist',
    company: 'Citizens Financial Group',
    image: '/images/workshop-speakers/Jordan_Carpenter.jpeg',
    bio: 'Jordan Carpenter is a Senior Cyber Threat Intelligence Specialist with a strong focus on threat hunting and malware analysis. He leverages advanced search techniques, log analysis, and threat intelligence to proactively identify indicators of compromise across enterprise environments. Jordan holds a B.S. in Computer Science from URI with minors in Cybersecurity and Digital Forensics, and holds GREM and GCTI certifications.',
    description: 'Cyber Threat Intelligence (CTI) is one of the most dynamic and investigative corners of cybersecurity. This workshop will walk participants through the day of a CTI analyst, showing how we triage emerging threats, analyze malware behavior, and more. This session is ideal for students wanting to learn more about career paths in cybersecurity.',
    workshopTitle: 'A Day in the Life of a Cyber Threat Intelligence Analyst',
  },
  'contributing to open source with mergefund': {
    name: 'Damien Johnson & Isaac Gbaba',
    role: 'Co-CEOs',
    company: 'MergeFund',
    image: '/images/workshop-speakers/Damien_Johnson.JPG',
    bio: "Damien Johnson is a software engineer working at the intersection of AI, cloud, and security — having built and shipped developer platforms at AWS, John Deere, and Accenture. Isaac Gbaba is a builder and co-founder passionate about open source and developer tooling. Together they co-founded MergeFund to connect contributors with funded open-source issues.",
    description: "Open source is one of the best ways to gain real-world experience, but getting started can be confusing. In this workshop, we'll walk through how students and early-career developers can contribute to real open-source projects using MergeFund, a platform that connects contributors with funded issues from real repositories. No prior contributions required.",
    workshopTitle: 'Contributing to Open Source with MergeFund',
  },
  'thinking like a product manager': {
    name: 'Kanika Mohan',
    role: 'Associate Product Manager',
    company: 'IBM',
    image: '/images/workshop-speakers/Kanika_Mohan.jpeg',
    bio: 'Kanika Mohan is an Associate Product Manager at IBM, where she works on Cloud Databases focusing on building products that solve real customer problems at scale. She brings experience across product management, engineering collaboration, and go-to-market strategy. She has previously worked at Fortune 500 companies including GE Aerospace, Chrysler, and Dell Technologies.',
    description: 'This workshop focuses on how to turn a hackathon project into a strong internship opportunity by applying product thinking and clear storytelling. Attendees will learn how recruiters evaluate projects, how to frame their work around user problems and impact, and how to present their hackathon experience in resumes and interviews. This session is ideal for developers, designers, and students who want their hackathon work to translate into real career outcomes.',
    workshopTitle: 'Thinking Like a Product Manager',
  },
  'from idea to impact: solving real world problems with digital companions': {
    name: 'Rajnish Singh',
    role: 'Technical Product Manager',
    company: 'Product & Technology Leader',
    image: '/images/workshop-speakers/Rajnish_Singh.jfif',
    bio: 'Rajnish is a product and technology leader who works at the intersection of AI, user experience, and cloud platforms. He has led large-scale digital initiatives, including AI-powered conversational systems in healthcare environments. His focus is on turning innovative ideas into scalable, secure, and practical solutions that solve real-world problems.',
    description: 'This session explores how a Digital Human platform can be designed to solve real-world challenges in a complex healthcare environment. Rajnish will walk through how AI and LLM-driven conversational systems, combined with thoughtful UX design and scalable cloud architecture, can address real user pain points. Attendees will gain insight into translating an idea into a deployable solution while considering governance requirements and long-term sustainability.',
    workshopTitle: 'From Idea to Impact: Solving Real World Problems with Digital Companions',
  },
  'c2pa - embrace authenticity of digital content': {
    name: 'Umesh Motwani',
    role: 'Senior Consultant',
    company: 'Solutions Architect (Individual Capacity)',
    image: '/images/workshop-speakers/Umesh_Motwani.png',
    bio: 'Umesh Motwani is a Senior Technical Solutions Architect with over 14 years of experience designing and leading large-scale cloud, data, and AI-enabled systems. He specializes in building scalable platforms, modernizing architectures, and driving complex technical initiatives across global teams. Umesh is passionate about mentoring, innovation, and using technology to solve real-world problems.',
    description: 'C2PA is an open technical standard providing publishers, creators, and consumers the ability to trace the origin of different types of media. This session explores how content authenticity and provenance can be embedded into the creation workflow, helping combat misinformation and establish trust in digital content.',
    workshopTitle: 'C2PA - Embrace Authenticity of Digital Content',
  },
  'git: the hard way': {
    name: 'Bharat Middha',
    role: 'Software Engineer',
    company: 'Microsoft',
    image: '/images/workshop-speakers/Bharat_Middha.jpg',
    bio: 'Dev by day; hacker at heart. Bharat Middha is a software engineer at Microsoft who loves diving into the internals of developer tools and building things from first principles.',
    description: '`git commit` without `git`. Learn about the internal data structures of git by setting up a repo and authoring commits without ever running the git command. A deep-dive for developers who want to truly understand what happens under the hood every time they commit.',
    workshopTitle: 'Git: The Hard Way',
  },
  'intro to vibe coding for non-developer': {
    name: 'Clifton Choiniere',
    role: 'Senior Engineer',
    company: 'yconic',
    image: '/images/workshop-speakers/Cliff_Choiniere.jpeg',
    bio: 'Clifton "Cliff" Choiniere is a software engineer and founder focused on building AI-native systems that turn ideas into production-ready software. He co-founded yconic, a governance and funding platform combining AI and on-chain voting, and Swoopt, an AI-driven marketplace for last-minute service bookings. His team won first place at a Silicon Valley hackathon using AI-first development.',
    description: "This workshop is designed for builders, founders, creatives, and operators who want to create real software without becoming traditional programmers. Participants will learn how to use AI as a thinking and building partner to turn ideas, workflows, and business logic into working applications through natural language and rapid iteration. By the end, you'll understand how non-developers are already shipping functional products — and why building with AI is becoming a core skill for every industry.",
    workshopTitle: 'Intro to Vibe Coding for Non-Developers',
  },
  'hacking with github copilot': {
    name: 'Paul Horton',
    role: 'Coach',
    company: 'Major League Hacking',
    image: '/images/workshop-speakers/Paul_Horton.png',
    bio: "Paul Horton is a Coach at Major League Hacking where he goes to hackathons all across the globe to make sure hackers have a fantastic weekend. He's been part of the hackathon community since 2016 and helped found ASU's hackathon sunhacks. Paul has a PhD in Exploration Systems Design from ASU and is currently a postdoctoral researcher at UMass Lowell where he designs readout systems for balloon-borne telescopes.",
    description: 'Learning to use AI throughout your development flow is now an essential skill. GitHub Copilot is a fully-agentic AI pair programmer that can help you write, debug, & understand code. Today we’re learning by doing. We\'ll fork a README for your personal GitHub profile. We\'ll then use the GitHub and MLH MCP servers to pull live, personalized data. GitHub Copilot will use the template and data to create a customized profile just for you.',
    workshopTitle: 'Hacking with GitHub Copilot',
  },
    'experiment with google ai studio': {
    name: 'Paul Horton',
    role: 'Coach',
    company: 'Major League Hacking',
    image: '/images/workshop-speakers/Paul_Horton.png',
    bio: "Paul Horton is a Coach at Major League Hacking where he goes to hackathons all across the globe to make sure hackers have a fantastic weekend. He's been part of the hackathon community since 2016 and helped found ASU's hackathon sunhacks. Paul has a PhD in Exploration Systems Design from ASU and is currently a postdoctoral researcher at UMass Lowell where he designs readout systems for balloon-borne telescopes.",
    description: 'Google AI Studio is the fastest way to start building with the Gemini family of multimodal generative AI models. Google AI Studio allows you to try out Gemini\'s massive token context window, grab an API key in seconds, and so much more.',
    workshopTitle: 'Experiment with Google AI Studio',
  },
    'techtogether meetup': {
    name: 'Paul Horton',
    role: 'Coach',
    company: 'Major League Hacking',
    image: '/images/workshop-speakers/Paul_Horton.png',
    bio: "Paul Horton is a Coach at Major League Hacking where he goes to hackathons all across the globe to make sure hackers have a fantastic weekend. He's been part of the hackathon community since 2016 and helped found ASU's hackathon sunhacks. Paul has a PhD in Exploration Systems Design from ASU and is currently a postdoctoral researcher at UMass Lowell where he designs readout systems for balloon-borne telescopes.",
    description: 'TechTogether meetups are relaxed, drop-in spaces for underrepresented gender participants and their allies to connect during the hackathon. Come hang out, meet new people, share experiences, and talk about life in tech in a supportive, inclusive environment.',
    workshopTitle: 'TechTogether Meetup',
  },
  'from classroom to industry: exploring model-based design with simulink': {
    name: 'Siddharth Jawahar',
    role: 'Education Application Engineer',
    company: 'MathWorks Inc.',
    image: '/images/workshop-speakers/Siddharth_Jawahar.jpg',
    bio: "Siddharth Jawahar is a Customer Success Engineer at MathWorks. He partners with educators and researchers to explore computational tools in academia and help integrate them effectively into teaching and scientific workflows. Siddharth has an M.S. in Electrical and Computer Engineering from Georgia Institute of Technology, specializing in control systems.",
    description: "This session explores the essential, industry-ready skills that help students transition from the classroom to solving real-world engineering challenges. Through live demonstrations, you'll see how Model-Based Design (MBD) enables faster iteration and smarter decision-making using Simulink — the industry-standard platform for system-level design across EVs, UAVs, renewable energy, and wireless networks.",
    workshopTitle: 'From Classroom to Industry: Exploring Model-Based Design with Simulink',
  },
  'hacking interfaces and human perception': {
    name: 'Shaun Wallace',
    role: 'Assistant Professor of Computer Science',
    company: 'University of Rhode Island',
    image: '/images/workshop-speakers/Shaun_Wallace.png',
    bio: 'Shaun leads the Human-Centered Experiential Technologies lab (HAX). His research combines Human-Computer Interaction with Systems, Data Science, Human-Centered AI, and Social Computing. His lab builds public research systems as products to personalize and augment human information interactions. His research has been supported by Adobe, Google, NASA, and the Readability Consortium.',
    description: 'Have you ever wondered if a system could be better designed to specifically help you? There is an ongoing debate about interfaces being universally beneficial for all versus personalized and tailored for individuals. We will explore methods to rapidly assess these ideas to help you create better prototypes faster — directly applicable to your hackathon project.',
    workshopTitle: 'Hacking Interfaces and Human Perception',
  },
  'breaking into tech consulting: what no one tells you': {
    name: 'Lauren Wong',
    role: 'Senior Business Architect',
    company: 'Accenture',
    image: '/images/workshop-speakers/Lauren_Wong.jpg',
    bio: 'Lauren Wong is a Senior Business Architect at Accenture, where she works on digital and cloud initiatives across industries including healthcare, finance, and media. Through tech consulting, she has gained experience across software development, data analytics, UX/UI design, and strategy. Lauren is passionate about helping students and early-career professionals build the skills and confidence to break into tech.',
    description: "In the tech industry, there's an entire field that allows you to serve in engineering, product, or design roles while working across healthcare, finance, or media — tech consulting. In this talk, Lauren breaks down what the early-career experience in tech consulting really looks like: from landing your first role, to navigating onboarding, to what the actual job looks like once you're staffed on a client project.",
    workshopTitle: 'Breaking Into Tech Consulting: What No One Tells You',
  },
  'nvidia supercomputers in ai software engineering': {
    name: 'Michael Spremulli',
    role: 'co-founder / CTO',
    company: 'yconic / HumanixOS',
    image: '/images/workshop-speakers/Michael_Spremulli.jfif',
    bio: 'Michael Spremulli is a software engineer, CTO, and founder focused on architecting AI-native systems that merge deep infrastructure with seamless human experience. He is co-founder of yconic and the creator of HumanixOS. Michael specializes in building AI systems from the hardware layer up, with extensive experience leveraging NVIDIA DGX Blackwell technologies for large-scale training, inference, and distributed agent environments.',
    description: "Tokens Per Watt is the new Miles Per Gallon! This yconic workshop introduces participants to the new reality of compute as a competitive advantage. Students will explore how NVIDIA-powered supercomputing systems are used to train, fine-tune, and deploy advanced AI models and agentic systems. Topics include model experimentation at scale, parallelized workflows, on-premise AI infrastructure, and why control over compute is becoming as important as control over data.",
    workshopTitle: 'Using Nvidia Supercomputers in AI Software Engineering',
  },
  'pitching workshop: how to tell your story & demo effectively': {
    name: 'Vanessa Alvarez',
    role: 'Entrepreneur in Residence',
    company: 'RISE UP – URI Research Foundation',
    image: '/images/workshop-speakers/Vanessa_Alvarez.JPG',
    bio: 'Vanessa was the co-founder of Nexme, an on-demand real estate platform that was acquired in 2024, and is an ex-Amazon and ex-Microsoft product manager. She is currently helping students build their unicorn startups in Ideation Studio at URI.',
    description: "As builders, we tend to focus on building cool tech — but telling the story in 30 seconds, 60 seconds, or 5 minutes is always so hard! Come to this workshop and prep to pitch your project to the judges. We'll cover storytelling frameworks, demo strategy, and how to handle Q&A under pressure.",
    workshopTitle: 'Pitching Workshop: How to Tell Your Story & Demo Effectively',
  },
  'graduate studies in computer science/cybersecurity': {
    name: 'Victor Fay-Wolfe',
    role: 'Professor of Computer Science',
    company: 'University of Rhode Island',
    image: '/images/workshop-speakers/Vic_Fay-Wolfe.jpg',
    bio: 'Victor Fay-Wolfe is a professor at the University of Rhode Island, based in Kingston, United States. He holds a BS degree from Tufts University. With a wealth of expertise in his field, Fay-Wolfe is responsible for teaching and conducting research at the university, contributing to the advancement of knowledge, and the development of future professionals.',
    description: "Join us for an informative session designed to demystify the graduate school landscape. This workshop provides a comprehensive overview of the advanced degree options available at the University of Rhode Island, including the Master of Science in Computer Science and the Professional Science Master’s (PSM) in Cybersecurity. We will break down the application timeline, entry requirements, and the distinct advantages of each program to help you determine the best path for your professional goals.",
    workshopTitle: 'Graduate Studies in Computer Science/Cybersecurity'
  }
};

// ─── Speaker Lookup ───────────────────────────────────────────────────────────
export const getSpeakerByTitle = (title) => {
  if (!title) return null;
  const key = title.toLowerCase().trim();
  if (SPEAKERS[key]) return SPEAKERS[key];
  for (const [storedKey, data] of Object.entries(SPEAKERS)) {
    if (key.includes(storedKey) || storedKey.includes(key)) return data;
    const keyWords    = key.split(/\W+/).filter((w) => w.length > 3);
    const storedWords = storedKey.split(/\W+/).filter((w) => w.length > 3);
    const overlap     = keyWords.filter((w) => storedWords.includes(w));
    if (overlap.length >= 3) return data;
  }
  return null;
};

// ─── Schedule Data ────────────────────────────────────────────────────────────
export const SCHEDULE = {
  day1: {
    date: 'Saturday, February 21, 2026',
    events: [
      { time: '8:00 AM',  duration: 60,  event: 'Check-In',                          location: 'Fascitelli Commons',                  type: 'hacking' },
      { time: '8:00 AM',  duration: 60,  event: 'BREAKFAST',                         location: 'Fascitelli Commons',                  type: 'food' },
      { time: '9:00 AM',  duration: 60,  event: 'Opening Ceremony & Mission Welcome', location: 'Common/Stage | Overflow to ENG 010C', type: 'ceremony' },
      { time: '10:00 AM', duration: 0,event: 'HACKING BEGINS!',                   location: 'All Hacking Areas',                   type: 'hacking', hero: true },
      { time: '10:00 AM', duration: 30,  event: 'Cyber Capture the Flag (CTF) Kickoff', location: 'ENGR 045C',                        type: 'cyber' },
      { time: '10:00 AM', duration: 60,  event: 'Advanced Software Engineering with AI', location: 'ENGR 025C',                       type: 'workshop' },
      { time: '10:00 AM', duration: 30,  event: 'Team Forming Activity',             location: 'ENGR 040C',                           type: 'activity' },
      { time: '10:30 AM', duration: 30,  event: 'Hacking with GitHub Copilot',       location: 'ENGR 010C',                           type: 'beginner' },
      { time: '11:15 AM', duration: 45,  event: 'Intro to Vibe Coding for Non-Developer', location: 'ENGR 010C',                     type: 'beginner' },
      { time: '11:15 AM', duration: 45,  event: 'Nvidia Supercomputers in AI Software Engineering', location: 'ENGR 025C',           type: 'workshop' },
      { time: '11:15 AM', duration: 90,  event: 'Mentor Office Hours (Round 1)',     location: 'Mentor Lounge (ENGR 125)',                       type: 'mentoring' },
      { time: '12:00 PM', duration: 60,  event: 'LUNCH',                             location: 'Fascitelli Commons',                  type: 'food' },
      { time: '1:00 PM',  duration: 60,  event: 'Generative Art and Pen Plotting',   location: 'ENGR 025C',                           type: 'workshop' },
      { time: '1:15 PM',  duration: 30,  event: 'Day in the life of a Cyber Threat Intelligence Analyst', location: 'ENGR 045C',    type: 'cyber' },
      { time: '1:15 PM',  duration: 30,  event: 'Contributing to Open Source with MergeFund', location: 'ENGR 010C',                type: 'beginner' },
      { time: '2:00 PM',  duration: 30,  event: 'Cyber Activity #1',                 location: 'ENGR 045C',                           type: 'cyber' },
      { time: '2:00 PM',  duration: 60,  event: 'Dog Visit!',                        location: 'Engineering Cafe',                    type: 'activity' },
      { time: '2:30 PM',  duration: 30,  event: 'Graduate Studies in Computer Science/Cybersecurity', location: 'ENGR 045C',        type: 'cyber' },
      { time: '2:30 PM',  duration: 30,  event: 'FactSet: Flexible Data Solutions for Investment Decision Making', location: 'ENGR 010C', type: 'beginner' },
      { time: '2:30 PM',  duration: 30,  event: 'Cloud Native Digital Transformation', location: 'ENGR 025C',                        type: 'workshop' },
      { time: '2:30 PM',  duration: 90,  event: 'Mentor Office Hours (Round 2)',     location: 'Mentor Lounge (ENGR 125)',                       type: 'mentoring' },
      { time: '3:00 PM',  duration: 40,  event: 'Typeracer Tournament',              location: 'Lounge/Commons',                      type: 'activity' },
      { time: '3:15 PM',  duration: 30,  event: 'C2PA - Embrace Authenticity of Digital Content', location: 'ENGR 045C',             type: 'cyber' },
      { time: '3:15 PM',  duration: 45,  event: 'Git: The Hard Way',                 location: 'ENGR 010C',                           type: 'workshop' },
      { time: '3:30 PM',  duration: 30,  event: 'Thinking Like a Project Manager', location: 'ENGR 025C', type: 'beginner' },
      { time: '4:15 PM',  duration: 30,  event: 'Experiment with Google AI Studio',  location: 'ENGR 010C',                           type: 'beginner' },
      { time: '4:15 PM',  duration: 30,  event: 'Hacking Interfaces and Human Perception', location: 'ENGR 045C',                   type: 'cyber' },
      { time: '4:15 PM',  duration: 60,  event: 'From Classroom to Industry: Exploring Model-Based Design with Simulink', location: 'ENGR 025C', type: 'workshop' },
      { time: '5:00 PM',  duration: 60,  event: 'DINNER',                            location: 'Fascitelli Commons',                  type: 'food' },
      { time: '6:00 PM',  duration: 30,  event: 'Guardians of the Model: Defending Against Prompt Injection and Adversarial AI', location: 'ENGR 045C', type: 'cyber' },
      { time: '6:30 PM',  duration: 30,  event: 'Breaking Into Tech Consulting: What No One Tells You', location: 'ENGR 025C',      type: 'beginner' },
      { time: '7:00 PM',  duration: 15,  event: 'Last Call for Bingo',              location: 'Lounge/Commons',                      type: 'activity' },
      { time: '7:30 PM',  duration: 60,  event: 'TechTogether Meetup',               location: 'Fascitelli Commons | MLH Help Desk', type: 'beginner' },
      { time: '7:30 PM',  duration: 45,  event: 'From Idea to Impact: Solving Real World Problems with Digital Companions', location: 'ENGR 025C', type: 'workshop' },
      { time: '8:30 PM',  duration: 45,  event: "Fireside Chat: How'd We Get Here?", location: 'Fascitelli Commons',                  type: 'beginner' },
      { time: '9:00 PM',  duration: 30,  event: 'Snacks',                            location: 'Fascitelli Commons',                  type: 'food' },
      { time: '9:15 PM',  duration: 45,  event: 'Skribbl.io',                        location: 'ENGR 040C',                           type: 'activity' },
      { time: '12:00 AM', duration: 30,  event: 'Midnight Snack',                    location: 'Fascitelli Commons',                  type: 'food' },
      { time: '12:00 AM', duration: 60,  event: 'Super Smash Bros',                  location: 'ENGR 040C',                           type: 'activity' },
    ],
  },
  day2: {
    date: 'Sunday, February 22, 2026',
    events: [
      { time: '8:00 AM',  duration: 60,  event: 'BREAKFAST',                         location: 'Atrium',                              type: 'food' },
      { time: '11:00 AM', duration: 0,   event: 'FINAL SUBMISSIONS DUE',             location: 'DevPost (Online)',                     type: 'hacking', hero: true },
      { time: '11:15 AM', duration: 45,  event: 'Pitching Workshop: How to Tell Your Story & Demo Effectively', location: 'ENGR 025C', type: 'beginner' },
      { time: '12:00 PM', duration: 60,  event: 'LUNCH',                             location: 'Fascitelli Commons',                  type: 'food' },
      { time: '12:15 PM', duration: 60,  event: 'Pitch Practice & Feedback',         location: 'Mentor Lounge (ENGR 125)',                       type: 'mentoring' },
      { time: '1:00 PM',  duration: 120, event: 'Project Expo & Judging Begins',     location: 'Expo Area',                           type: 'hacking', hero: true },
      { time: '3:00 PM',  duration: 105, event: 'Finalist Round | Pitching',          location: 'Pharmacy 170',                        type: 'hacking' },
      { time: '5:00 PM',  duration: 60,  event: 'Closing Ceremony & Awards',         location: 'Common/Stage',                        type: 'ceremony' },
    ],
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
export const parseEventDateTime = (dateStr, timeStr, dayKey) => {
  const [timePart, modifier] = timeStr.split(' ');
  let hour = parseInt(timePart.split(':')[0]);
  if (modifier === 'PM' && hour !== 12) hour += 12;
  if (modifier === 'AM' && hour === 12) hour = dayKey === 'day1' ? 24 : 0;
  const base = new Date(dateStr);
  base.setHours(hour, parseInt(timePart.split(':')[1]), 0, 0);
  return base;
};

export const formatCountdown = (diff) => {
  if (diff <= 0) return '00:00:00';
  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);
  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  parts.push(`${hours.toString().padStart(2, '0')}h`);
  parts.push(`${mins.toString().padStart(2, '0')}m`);
  parts.push(`${secs.toString().padStart(2, '0')}s`);
  return parts.join(' ');
};

// Returns a human-readable end time string like "2:30 PM" given a start Date and duration in minutes.
export const formatEndTime = (startDate, durationMinutes) => {
  if (!durationMinutes) return null;
  const end = new Date(startDate.getTime() + durationMinutes * 60 * 1000);
  const h   = end.getHours();
  const m   = end.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12  = h % 12 || 12;
  const mm   = m.toString().padStart(2, '0');
  return `${h12}:${mm} ${ampm}`;
};