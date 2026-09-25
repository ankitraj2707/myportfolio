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

  console.log("🌱 Seeding timeline with academic milestones...");
  await prisma.experience.createMany({
    data: [
      {
        title: "B.Tech in Computer Science Engineering",
        organization: "University Institution",
        period: "2023 - Present",
        description:
          "Specializing in Data Structures, Algorithms, Database Management Systems, and Object-Oriented Software Design.",
        type: "education",
        order: 1,
      },
      {
        title: "Specialized Coursera Certifications",
        organization: "University of Colorado Boulder",
        period: "October 2025",
        description:
          "Completed rigorous tracks covering Quantum Algorithms, RSA, Advanced Searching, Sorting, and Tree/Graph traversal algorithms.",
        type: "education",
        order: 2,
      },
      {
        title: "Smart India Hackathon Finalist",
        organization: "National Hackathon",
        period: "2024",
        description:
          "Architected and built a civic problem-reporting dashboard within a 36-hour sprint.",
        type: "hackathon",
        order: 3,
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

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
