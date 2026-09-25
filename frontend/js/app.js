const API_BASE = "http://localhost:5000/api";

// Verified Certificate Data with Courses and Internship Credentials
const certificatesData = [
  {
    title: "Full Stack Development & Gen AI Internship",
    issuer: "AstraTech AI (Prnatah Tech Solution Pvt. Ltd.)",
    instructor: "Aniket Kumar (Program Director)",
    issuedDate: "Aug 6, 2026",
    verifyUrl: "https://astratechai.com/certificate",
    certId: "AST-BACKEND-2026-044",
    skills: [
      "Frontend",
      "Backend APIs",
      "PostgreSQL",
      "GitHub",
      "Gen AI Integration",
    ],
    badgeColor: "border-violet-500/40 text-violet-400",
  },
  {
    title: "Vocational Training - Data Analysis",
    issuer: "Tata Steel Ltd., Jamshedpur (SNTI)",
    instructor: "Learning & Development Department",
    issuedDate: "June 30, 2026",
    verifyUrl: "#",
    certId: "VT20265281",
    skills: [
      "Data Analysis",
      "Data Cleaning",
      "Industrial Workflow",
      "Analytics",
    ],
    badgeColor: "border-blue-500/40 text-blue-400",
  },
  {
    title: "Advanced Data Structures, RSA and Quantum Algorithms",
    issuer: "University of Colorado Boulder (Coursera)",
    instructor: "Sriram Sankaranarayanan, PhD",
    issuedDate: "Oct 31, 2025",
    verifyUrl: "https://coursera.org/verify/JHXSMHCSJFHE",
    certId: "JHXSMHCSJFHE",
    skills: [
      "Quantum Algorithms",
      "RSA Cryptography",
      "Advanced Data Structures",
    ],
    badgeColor: "border-violet-500/40 text-violet-400",
  },
  {
    title: "Algorithms for Searching, Sorting, and Indexing",
    issuer: "University of Colorado Boulder (Coursera)",
    instructor: "Sriram Sankaranarayanan, PhD",
    issuedDate: "Oct 31, 2025",
    verifyUrl: "https://coursera.org/verify/THSPUWFLYZWC",
    certId: "THSPUWFLYZWC",
    skills: [
      "Searching Algorithms",
      "Sorting Techniques",
      "Indexing",
      "Complexity",
    ],
    badgeColor: "border-cyan-500/40 text-cyan-400",
  },
  {
    title: "Trees and Graphs: Basics",
    issuer: "University of Colorado Boulder (Coursera)",
    instructor: "Sriram Sankaranarayanan, PhD",
    issuedDate: "Oct 24, 2025",
    verifyUrl: "https://coursera.org/verify/9UPO1R3ARIVK",
    certId: "9UPO1R3ARIVK",
    skills: ["Tree Traversals", "Graph Theory", "BFS & DFS", "DAGs"],
    badgeColor: "border-emerald-500/40 text-emerald-400",
  },
];

// Configured projects
const fallbackProjects = [
  {
    id: "1",
    title: "YojanaBasket",
    category: "fullstack",
    status: "Live",
    description:
      "A platform simplifying citizen access to government schemes, public welfare initiatives, and eligibility verification.",
    technologies: ["Full Stack", "Tailwind CSS", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/ankitraj2707",
    liveUrl: "https://yojanabasket20.vercel.app/",
  },
  {
    id: "2",
    title: "TourEase",
    category: "fullstack",
    status: "Working on it",
    description:
      "Smart tourism and travel itinerary booking engine facilitating personalized discovery and reservations.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/ankitraj2707",
    liveUrl: "",
  },
  {
    id: "3",
    title: "Library Management System",
    category: "backend",
    status: "Working on it",
    description:
      "Relational book circulation, digital cataloguing, ISBN indexing, and automated penalty engine.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM"],
    githubUrl: "https://github.com/ankitraj2707",
    liveUrl: "",
  },
];

const fallbackSkills = [
  { name: "Data Structures & Algorithms", category: "tools", level: 92 },
  { name: "HTML5 / CSS3 / Tailwind", category: "frontend", level: 95 },
  { name: "Vanilla JavaScript (ES6+)", category: "frontend", level: 90 },
  { name: "Node.js & Express.js", category: "backend", level: 85 },
  { name: "REST APIs & JWT Auth", category: "backend", level: 90 },
  { name: "PostgreSQL & MongoDB", category: "database", level: 85 },
  { name: "Prisma ORM & Supabase", category: "database", level: 85 },
  { name: "Git & GitHub Workflows", category: "tools", level: 90 },
];

// Real Experience & Milestones Timeline
const fallbackExperiences = [
  {
    title: "Full Stack Development & Gen AI Intern",
    organization: "AstraTech AI (Prnatah Tech Solution Pvt. Ltd.)",
    period: "May 2026 - August 2026",
    description:
      "Developed modern web applications leveraging frontend, backend, REST APIs, databases, Git/GitHub, and Generative AI service integrations.",
  },
  {
    title: "Vocational Trainee - Data Analysis",
    organization: "Tata Steel Ltd., Jamshedpur (SNTI)",
    period: "June 2026 - June 2026",
    description:
      "Underwent an intensive vocational training program under the Learning & Development Department focusing on real-world industrial Data Analysis.",
  },
  {
    title: "B.Tech in Computer Science Engineering",
    organization: "ARKA JAIN University",
    period: "2023 - Present",
    description:
      "Studying core Computer Science: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Full-Stack Web Engineering.",
  },
  {
    title: "Specialized Algorithm Certifications",
    organization: "University of Colorado Boulder (Coursera)",
    period: "October 2025",
    description:
      "Completed comprehensive credentials in Advanced Data Structures, RSA, Quantum Algorithms, and Graph/Tree data algorithms.",
  },
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
  setupMobileMenu();
  setupScrollReveal();
  setupCounters();
  setupGitHubMatrix();
  renderCertificates();
  fetchSkills();
  fetchProjects();
  fetchExperiences();
  setupContactForm();
});

function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => menu.classList.add("hidden"));
    });
  }
}

function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setupCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = Math.max(1, target / 30);
    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
}

function renderCertificates() {
  const container = document.getElementById("certificatesGrid");
  if (!container) return;

  container.innerHTML = certificatesData
    .map(
      (cert) => `
    <div class="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition duration-300">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <i data-lucide="award" class="w-5 h-5 text-cyan-400"></i>
            <span class="text-[11px] mono text-slate-400">${cert.issuedDate}</span>
          </div>
          <span class="text-[10px] mono px-2.5 py-0.5 rounded border ${cert.badgeColor}">Verified</span>
        </div>
        <h4 class="text-base sm:text-lg font-bold text-white mb-2 leading-snug">${cert.title}</h4>
        <div class="text-xs text-slate-300 font-medium mb-1">${cert.issuer}</div>
        <div class="text-[11px] text-slate-500 mono mb-1">Mentor/Dept: ${cert.instructor}</div>
        ${cert.certId ? `<div class="text-[10px] text-cyan-400/80 mono mb-4">ID: ${cert.certId}</div>` : ""}
        
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${cert.skills
            .map(
              (skill) => `
            <span class="text-[10px] mono text-slate-300 bg-slate-900 border border-slate-800/80 px-2 py-0.5 rounded">${skill}</span>
          `,
            )
            .join("")}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/60">
        ${
          cert.verifyUrl && cert.verifyUrl !== "#"
            ? `
          <a href="${cert.verifyUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">
            <span>Verify Credential</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        `
            : `
          <span class="text-xs mono text-slate-500 flex items-center gap-1.5">
            <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400"></i> Verified by Institute
          </span>
        `
        }
      </div>
    </div>
  `,
    )
    .join("");

  if (window.lucide) lucide.createIcons();
}

function setupGitHubMatrix() {
  const matrix = document.getElementById("githubMatrix");
  if (!matrix) return;
  const shades = [
    "bg-slate-800",
    "bg-cyan-950",
    "bg-cyan-800",
    "bg-cyan-600",
    "bg-cyan-400",
  ];
  for (let i = 0; i < 364; i++) {
    const square = document.createElement("div");
    const randomShade =
      shades[Math.floor(Math.random() * (i % 6 === 0 ? shades.length : 2))];
    square.className = `w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${randomShade}`;
    matrix.appendChild(square);
  }
}

async function fetchSkills() {
  let skills = fallbackSkills;
  try {
    const res = await fetch(`${API_BASE}/skills`);
    if (res.ok) {
      const data = await res.json();
      if (data.length > 0) skills = data;
    }
  } catch (_) {
    console.info("Using fallback skills.");
  }

  const container = document.getElementById("skillsGrid");
  if (!container) return;

  const categories = ["frontend", "backend", "database", "tools"];
  const titles = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Algorithms & Tools",
  };

  container.innerHTML = categories
    .map((cat) => {
      const filtered = skills.filter((s) => s.category.toLowerCase() === cat);
      return `
      <div class="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800">
        <h4 class="text-sm font-semibold mono uppercase tracking-wider text-cyan-400 mb-6">${titles[cat]}</h4>
        <div class="space-y-4">
          ${filtered
            .map(
              (skill) => `
            <div>
              <div class="flex justify-between text-xs mono mb-1">
                <span>${skill.name}</span>
                <span class="text-slate-400">${skill.level}%</span>
              </div>
              <div class="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                <div class="bg-gradient-to-r from-cyan-400 to-violet-500 h-1.5 rounded-full" style="width: ${skill.level}%"></div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `;
    })
    .join("");
}

let currentProjects = [];
async function fetchProjects() {
  currentProjects = fallbackProjects;
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (res.ok) {
      const data = await res.json();
      if (data.length > 0) currentProjects = data;
    }
  } catch (_) {
    console.info("Using fallback projects.");
  }

  renderProjects(currentProjects);
  setupFilterListeners();
}

function renderProjects(items) {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  container.innerHTML = items
    .map((p) => {
      const isLive = p.liveUrl && p.liveUrl.startsWith("http");
      const statusText = p.status || (isLive ? "Live" : "Working on it");
      const statusBadgeClass = isLive
        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
        : "border-amber-500/40 bg-amber-500/10 text-amber-400";

      return `
      <div class="glass-panel rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition duration-300">
        <div class="p-5 sm:p-6">
          <div class="flex justify-between items-start mb-4">
            <span class="text-[10px] mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-cyan-400">${p.category}</span>
            <div class="flex items-center gap-3 text-slate-400">
              <a href="${p.githubUrl || "https://github.com/ankitraj2707"}" target="_blank" rel="noreferrer" class="hover:text-white transition" title="Repository">
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
              ${
                isLive
                  ? `
                <a href="${p.liveUrl}" target="_blank" rel="noreferrer" class="hover:text-white text-cyan-400 transition" title="Live Preview">
                  <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
              `
                  : `
                <span class="text-[10px] mono px-2 py-0.5 rounded border ${statusBadgeClass}">${statusText}</span>
              `
              }
            </div>
          </div>
          <h4 class="text-lg sm:text-xl font-bold text-white mb-2">${p.title}</h4>
          <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">${p.description}</p>
        </div>
        <div class="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-800/60 mt-auto">
          <div class="flex flex-wrap gap-2 pt-4">
            ${(Array.isArray(p.technologies) ? p.technologies : [])
              .map(
                (tech) => `
              <span class="text-[11px] mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">${tech}</span>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  if (window.lucide) lucide.createIcons();
}

function setupFilterListeners() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("bg-cyan-500", "text-slate-950");
        b.classList.add("bg-slate-900", "text-slate-300");
      });
      btn.classList.add("bg-cyan-500", "text-slate-950");
      btn.classList.remove("bg-slate-900", "text-slate-300");

      const filter = btn.getAttribute("data-filter");
      if (filter === "all") {
        renderProjects(currentProjects);
      } else {
        const filtered = currentProjects.filter(
          (p) => p.category.toLowerCase() === filter,
        );
        renderProjects(filtered);
      }
    });
  });
}

async function fetchExperiences() {
  let experiences = fallbackExperiences;
  try {
    const res = await fetch(`${API_BASE}/experiences`);
    if (res.ok) {
      const data = await res.json();
      if (data.length > 0) experiences = data;
    }
  } catch (_) {
    console.info("Using fallback experiences.");
  }

  const container = document.getElementById("timelineList");
  if (!container) return;

  container.innerHTML = experiences
    .map(
      (item) => `
    <div class="relative group">
      <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-500 ring-4 ring-[#0a0f1d]"></div>
      <div class="glass-panel p-5 sm:p-6 rounded-xl border border-slate-800">
        <span class="text-xs mono text-cyan-400 font-semibold">${item.period}</span>
        <h4 class="text-base sm:text-lg font-bold text-white mt-1">${item.title}</h4>
        <div class="text-xs sm:text-sm font-medium text-slate-300 mb-2">${item.organization}</div>
        <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">${item.description}</p>
      </div>
    </div>
  `,
    )
    .join("");
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");
  const submitBtn = document.getElementById("submitBtn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerText = "Transmitting Message...";

    const payload = {
      name: document.getElementById("contactName").value,
      email: document.getElementById("contactEmail").value,
      subject: document.getElementById("contactSubject").value,
      message: document.getElementById("contactMessage").value,
    };

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok) {
        alertBox.className =
          "text-xs sm:text-sm p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300";
        alertBox.innerText = "Thank you! Your message has been received.";
        alertBox.classList.remove("hidden");
        form.reset();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      alertBox.className =
        "text-xs sm:text-sm p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300";
      alertBox.innerText =
        err.message || "Failed to submit. Please ensure your backend is live.";
      alertBox.classList.remove("hidden");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";
    }
  });
}
