const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Cleaning old records...");
  await prisma.project.deleteMany({});
  await prisma.experience.deleteMany({});
  await prisma.skill.deleteMany({});

  console.log("🌱 Seeding updated portfolio projects...");
  await prisma.project.createMany({
    data: [
      {
        title: "YojanaBasket",
        category: "fullstack",
        description:
          "A platform simplifying citizen access to government schemes, public welfare initiatives, and eligibility verification.",
        technologies: ["Full Stack", "Tailwind CSS", "JavaScript", "REST APIs"],
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
        githubUrl: "https://github.com/ankitraj2707",
        liveUrl: "https://yojanabasket20.vercel.app/",
        order: 1,
      },
      {
        title: "TourEase",
        category: "fullstack",
        description:
          "Smart tourism and travel itinerary booking engine facilitating discovery and reservations. [Status: Working on it]",
        technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma"],
        imageUrl:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600",
        githubUrl: "https://github.com/ankitraj2707",
        liveUrl: "",
        order: 2,
      },
      {
        title: "Library Management System",
        category: "backend",
        description:
          "Comprehensive book circulation, digital cataloguing, ISBN indexing, and automated penalty engine. [Status: Working on it]",
        technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM"],
        imageUrl:
          "https://images.unsplash.com/photo-1507842229456-834898d022b7?q=80&w=600",
        githubUrl: "https://github.com/ankitraj2707",
        liveUrl: "",
        order: 3,
      },
    ],
  });

  console.log("🌱 Seeding updated timeline with internship milestones...");
  await prisma.experience.createMany({
    data: [
      {
        title: "Full Stack Development & Gen AI Intern",
        organization: "AstraTech AI (Prnatah Tech Solution Pvt. Ltd.)",
        period: "May 2026 - August 2026",
        description:
          "Developed modern web applications leveraging frontend, backend, REST APIs, databases, Git/GitHub, and Generative AI service integrations.",
        type: "experience",
        order: 1,
      },
      {
        title: "Vocational Trainee - Data Analysis",
        organization: "Tata Steel Ltd., Jamshedpur (SNTI)",
        period: "June 2026",
        description:
          "Underwent an intensive vocational training program under the Learning & Development Department focusing on real-world industrial Data Analysis.",
        type: "experience",
        order: 2,
      },
      {
        title: "B.Tech in Computer Science Engineering",
        organization: "ARKA JAIN University",
        period: "2023 - Present",
        description:
          "Studying core Computer Science: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Full-Stack Web Engineering.",
        type: "education",
        order: 3,
      },
      {
        title: "Specialized Algorithm Certifications",
        organization: "University of Colorado Boulder (Coursera)",
        period: "October 2025",
        description:
          "Completed comprehensive credentials in Advanced Data Structures, RSA, Quantum Algorithms, and Graph/Tree data algorithms.",
        type: "education",
        order: 4,
      },
    ],
  });

  console.log("🌱 Seeding core technical skills...");
  await prisma.skill.createMany({
    data: [
      {
        name: "Data Structures & Algorithms",
        category: "tools",
        iconClass: "code",
        level: 92,
      },
      {
        name: "HTML5 / CSS3 / Tailwind",
        category: "frontend",
        iconClass: "layout",
        level: 95,
      },
      {
        name: "Vanilla JavaScript (ES6+)",
        category: "frontend",
        iconClass: "code-2",
        level: 90,
      },
      {
        name: "Node.js & Express.js",
        category: "backend",
        iconClass: "server",
        level: 85,
      },
      {
        name: "REST APIs & JWT Auth",
        category: "backend",
        iconClass: "shield",
        level: 90,
      },
      {
        name: "PostgreSQL & MongoDB",
        category: "database",
        iconClass: "database",
        level: 85,
      },
      {
        name: "Prisma ORM & Supabase",
        category: "database",
        iconClass: "database",
        level: 85,
      },
      {
        name: "Git & GitHub Workflows",
        category: "tools",
        iconClass: "git-branch",
        level: 90,
      },
    ],
  });

  console.log("✅ Database successfully seeded!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
