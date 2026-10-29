/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Amartya",
  last: "Jha",
  fullName: "Amartya Jha",
  tagline: "Aspiring Robotics & Drone Engineer • National Footballer • FRC Rookie All-Star",
  location: "Noida, India",
  email: "",
  phone: "",
  bio: [
    "I enjoy understanding how machines and systems come together — whether it's through robotics, electronics, or simply exploring how different parts work as one. I've always preferred learning by doing, which is probably why I enjoy building things, experimenting, and working hands-on.",
    "My interest in robotics grew through FRC, where I learned CAD and programming, worked with a team to build a robot, and experienced what it takes to turn an idea into something real. Since then, internships involving drone systems, electronics, and soldering have helped me explore engineering in more practical ways. What excites me most is the process of solving problems, building something meaningful, and learning from every step of it.",
    "Outside of engineering, I enjoy playing football and being part of team environments that push me to stay disciplined and keep improving.",
  ],
  quote:
    "I want to keep learning how things work — and more importantly, how they can work better. Whether through robotics, engineering, or hands-on building, I enjoy exploring ideas that combine creativity with problem-solving.",
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "",
  photo: "/placeholder.png",
  aboutPhoto: "/photo.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Experience (renders as "Work Experience" cards) — Internships ---- */

export const EXPERIENCE = [
  {
    slug: "iit-kanpur-uav-research-intern",
    role: "Research Intern — Unmanned Aerial Vehicles",
    org: "IIT Kanpur",
    logo: "/logos/iit-kanpur.png",
    location: "Kanpur, India",
    dates: "2026 · 2 weeks",
    meta: "2026 · 2 weeks · Kanpur, India ·",
    badge: "Research Internship",
    desc: "Spent two weeks interning in the Unmanned Aerial Vehicle department of IIT Kanpur, one of India's top engineering institutes. Researched drone designs under the mentorship of Professor Abhishek, then designed, simulated and coded a UAV of my own.",
    bullets: [
      "Studied existing UAV designs and designed my own",
      "Simulated the UAV design in Gazebo",
      "Coded an obstacle-collision-prevention system for a LiDAR-equipped drone in Gazebo",
    ],
    tags: ["UAV Design", "Gazebo Simulations", "LiDAR", "Robotics", "Electronics"],
    featured: true,
  },
  {
    slug: "endure-air-drone-intern",
    role: "Drone Technology Intern",
    org: "Endure Air",
    logo: "/logos/endure-air.png",
    location: "Noida, India",
    dates: "May – June 2025 · 15 days",
    meta: "May – June 2025 · 15 days · Noida, India ·",
    badge: "Internship",
    desc: "Stepped into a professional drone engineering lab with one clear brief: design and build the radio transmitter system for a drone from scratch. Over two weeks, worked alongside engineers to understand how aerodynamics, hardware design, and manufacturing connect in a real production environment.",
    bullets: [
      "Designed and built the radio transmitter system for drone prototypes",
      "Applied CAD software and aerodynamics principles in live manufacturing contexts",
      "Gained hands-on exposure to hardware prototyping and production workflows",
    ],
    tags: ["Drone Engineering", "CAD", "Aerodynamics", "Radio Systems", "Hardware Prototyping"],
    featured: true,
  },
  {
    slug: "addverb-robotics-intern",
    role: "Robotics Intern",
    org: "Addverb Technologies",
    logo: "/logos/addverb.png",
    location: "Noida, India",
    dates: "2024",
    meta: "2024 · Noida, India ·",
    badge: "Internship",
    desc: "Worked inside one of India's leading industrial robotics companies, with hands-on time in their hardware lab. Rather than shadowing, I was soldering circuits, studying mechanical systems, and debugging assemblies on an advanced robot dog platform.",
    bullets: [
      "Worked with electronics and soldering in a professional robotics lab",
      "Studied the mechanical and electronic architecture of the robot dog system",
      "Built practical skills in circuit assembly, debugging, and systems integration",
    ],
    tags: ["Soldering", "Electronics", "Robotics", "Circuit Assembly", "Systems Integration"],
    featured: true,
  },
];

/* ---- Projects (Research & Projects) ---- */

export const PROJECTS = [
  {
    name: "FIRST Robotics Competition (FRC) — Chicago Regional",
    org: "Team Co-founder · CAD & Programming · Competitor",
    meta: "2022 · Rookie All-Star Award — Chicago Regional",
    desc: "Started with five months of self-directed learning in CAD and robot programming before a team even existed. Then assembled a group of ten, spent three months designing and building a full competition robot, and flew to Chicago to compete in an international FRC regional — as a first-year, rookie squad.",
    tags: ["CAD", "Robot Programming", "Mechanical Engineering", "Team Building", "Problem-Solving Under Pressure"],
    featured: true,
  },
  {
    name: "Wi-Fi Sumo Battle Robot",
    org: "Team Leader",
    meta: "2025 – 26 · CREST Gold Award",
    desc: "Led a team of peers to build a 3 kg Wi-Fi-controlled robot for sumo battles, working in after-school hours. After countless trials, numerous setbacks and over 100 hours of work, the robot was completed and earned the CREST Gold Award.",
    tags: ["Autodesk Fusion 360", "Laser Cutting", "Circuit Design", "Soldering", "Team Leadership"],
    featured: true,
  },
  {
    name: "OpenCV Computer Vision Tracking Robot",
    org: "Individual Project",
    meta: "2025 · Presented to 100+ students",
    desc: "Designed and built an ESP32 Wi-Fi-powered robot that uses an overhead camera and computer vision to track and follow a designated object. Designed and soldered the circuit, assembled the chassis, and wrote the tracking code in Python with OpenCV — then presented the project to over 100 students at school, explaining computer vision and its practical uses.",
    tags: ["Python", "OpenCV", "Computer Vision", "ESP32", "Soldering", "Circuit Assembly"],
    featured: true,
  },
  {
    name: "Quadrobot — Four-Legged Walking Robot",
    org: "Individual Project",
    meta: "2026 · Ongoing",
    desc: "Building a four-legged walking robot from scratch. The parts have been designed and 3D printed and the servo motors are mounted; work continues on getting it walking.",
    tags: ["CAD Design", "3D Printing", "Servo Motors", "Robotics"],
    featured: false,
  },
  {
    name: "ICT Team — Media & Content Production",
    org: "Member · School ICT Initiative",
    meta: "2025",
    desc: "Selected by the school to join the ICT media team, producing educational and promotional video content. Joined to learn how to communicate ideas visually — not just through engineering drawings, but through video and editing.",
    tags: ["Video Production", "Editing", "Visual Communication"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🏆",
    title: "FRC Rookie All-Star Award",
    meta: "International · FIRST Robotics Competition — Chicago Regional · 2022",
    detail: "One of the most prestigious honours for a first-year FRC team, recognising strong robot performance, community engagement and professionalism. Won as a brand-new team competing against squads with years of experience.",
    link: "",
    featured: true,
  },
  {
    icon: "🥇",
    title: "CREST Gold Award",
    meta: "International · CREST Awards · 2026",
    detail: "A prestigious STEM award for student-led research and engineering projects, requiring a minimum of 70 hours of work. Earned by leading a team to design and build a 3 kg Wi-Fi sumo battle robot over more than 100 hours.",
    link: "",
    featured: true,
  },
  {
    icon: "⚽",
    title: "National Football Competitor — ISSO",
    meta: "National, India · Inter-School Sports Organisation (ISSO) · 2023 – Present",
    detail: "Selection for ISSO national football is based on competitive performance across regional qualifying rounds. Maintaining consistent national-level selection across multiple years — while managing an IB workload — reflects both athletic ability and personal discipline.",
    link: "",
    featured: true,
  },
  {
    icon: "🧪",
    title: "IGCSE — A* In Chemistry",
    meta: "Cambridge International Examinations · 2023",
    detail: "The A* is the highest grade awarded by Cambridge IGCSE, requiring performance above 90% across paper components. Chemistry A* confirmed a scientific aptitude that has since been built on through HL IB Chemistry.",
    link: "",
    featured: true,
  },
  {
    icon: "🎥",
    title: "ICT Media Team — Selected Member",
    meta: "School · 2025",
    detail: "Selected by the school to join the ICT media team, responsible for producing educational and promotional video content — reflecting technical competence in video production and communication beyond core academic subjects.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of Interest ---- */

export const ARTICLES = [
  {
    title: "Robotics & Mechatronics",
    outlet: "Building robots — from competition robots and sumo bots to robot-dog and quadruped platforms",
    link: "",
  },
  {
    title: "Drone Engineering & UAV Design",
    outlet: "Radio transmitter systems, aerodynamics, and UAV design and simulation in Gazebo",
    link: "",
  },
  {
    title: "Computer Vision & Autonomous Systems",
    outlet: "Object tracking with OpenCV and LiDAR-based collision prevention",
    link: "",
  },
  {
    title: "CAD, Electronics & Hardware Prototyping",
    outlet: "Fusion 360 design, 3D printing, laser cutting, soldering, and circuit design",
    link: "",
  },
  {
    title: "Video Production & Storytelling",
    outlet: "Communicating ideas visually through video production and editing",
    link: "",
  },
];

/* ---- Leadership, community & personal growth ---- */

export const VOLUNTEER = {
  stats: [
    { value: "3", label: "Engineering Internships" },
    { value: "10", label: "FRC Team Members Co-Founded" },
    { value: "3+", label: "Years National Football" },
  ],
  orgs: [
    {
      name: "Dr. A.V. Baliga Memorial Trust",
      role: "Volunteer Science Teacher · 2024 – 2026",
      desc: "The Dr. A.V. Baliga Memorial Trust works toward improving healthcare access for underserved communities. Over the last two years I have taught science classes to students from grades 2 to 6 and designed five hands-on experiments for them to perform. I think students preparing for careers in engineering or science have a responsibility to look beyond their own ambitions, and this is one way of doing that.",
    },
    {
      name: "Leadership & Personal Growth",
      role: "Across sport, robotics & community work",
      desc: "Co-founding an FRC team, leading a CREST Gold robotics project, competing on the football pitch, and teaching younger students have developed composure under pressure, teamwork, and the discipline to keep improving — qualities carried into every new engineering project.",
    },
  ],
};

/* ---- Beyond Academics (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "⚽",
    name: "Football — National Competitor",
    desc: "Football isn't something I do alongside everything else — it's the thing that balances everything else. Twice a week, every week, regardless of what's happening academically, I'm on the pitch. Playing at national level means competing against the best interschool talent in the country. It's taught me things no classroom has: how to stay composed under pressure, how to trust the people around you, and how to keep going when you're down by one in the 80th minute.",
  },
  {
    icon: "🎥",
    name: "ICT Team — Video Production",
    desc: "I joined the ICT team because I wanted to understand how to communicate ideas visually — not just through engineering drawings, but through video and editing. It gave me an appreciation for how much craft goes into making something that genuinely holds an audience's attention.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming & Design",
    items: ["CAD Design", "Autodesk Fusion 360", "Robot Programming", "Python", "OpenCV", "Gazebo Simulations"],
  },
  {
    group: "Engineering & Hardware",
    items: ["Drone Engineering", "UAV Design", "Radio Transmitter Systems", "Electronics & Soldering", "Circuit Assembly", "ESP32", "3D Printing", "Laser Cutting", "Aerodynamics", "Hardware Prototyping"],
  },
  {
    group: "Media",
    items: ["Video Production", "Editing"],
  },
  {
    group: "Core Strengths",
    items: ["Leadership", "Discipline", "Team Building", "Teamwork", "Composure Under Pressure", "Problem-Solving Under Pressure"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "The Shriram Millennium School, Noida",
    location: "Noida, India",
    level: "IB Diploma Programme",
    dates: "Graduating June 2027",
    gpa: "",
    coursework: [
      "Mathematics AA — HL",
      "Chemistry — HL",
      "Physics — HL",
      "Environmental Systems & Societies — SL",
      "French B — SL",
      "English A — SL",
    ],
  },
  {
    school: "The Shriram Millennium School, Noida",
    location: "Noida, India",
    level: "Cambridge IGCSE",
    dates: "Completed May 2023",
    gpa: "",
    coursework: ["Chemistry", "Physics", "Biology", "French", "Mathematics", "Computer Science", "English Literature", "English Language"],
  },
];

export const TEST_SCORES = [
  {
    exam: "IB Predicted Grades (Grade 11)",
    date: "2025",
    breakdown: [
      { label: "Mathematics AA (HL)", value: "7" },
      { label: "Chemistry (HL)", value: "6" },
      { label: "Physics (HL)", value: "5" },
      { label: "Environmental Systems & Societies (SL)", value: "6" },
      { label: "French B (SL)", value: "5" },
      { label: "English A (SL)", value: "4" },
    ],
  },
  {
    exam: "Cambridge IGCSE Results",
    date: "May 2023",
    breakdown: [
      { label: "Chemistry", value: "A*" },
      { label: "Physics", value: "A" },
      { label: "Biology", value: "A" },
      { label: "French", value: "A" },
      { label: "Mathematics", value: "B" },
      { label: "Computer Science", value: "B" },
      { label: "English Literature", value: "B" },
      { label: "English Language", value: "C" },
    ],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
