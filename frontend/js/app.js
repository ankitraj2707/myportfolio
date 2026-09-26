const API_BASE = "http://localhost:5000/api";

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

let currentProjects = [];

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

  // Run typing effect independently
  try {
    initTypingEffect();
  } catch (err) {
    console.error("Typing error:", err);
  }

  // Other animations
  initCustomCursorAndGlow();
  initMagneticButtons();
  initProfileImageHover();
  initActiveNavbarIndicator();
});

// ----------------- MOBILE DRAWER -----------------
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

// ----------------- 1. MOUSE-FOLLOWING GLOW & CUSTOM CURSOR -----------------
function initCustomCursorAndGlow() {
  const dot = document.getElementById("customCursorDot");
  const ring = document.getElementById("customCursorRing");
  const glow = document.getElementById("mouseGlow");
  if (!dot || !ring || !glow) return;

  // Disable custom cursor tracking on pure touch devices
  if (window.matchMedia("(hover: none)").matches) {
    dot.style.display = "none";
    ring.style.display = "none";
    glow.style.display = "none";
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Instant dot movement
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  // Smooth lerp loop for outer ring and glowing background spotlight
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Enlarge cursor on interactive links and buttons
  const interactiveTargets =
    "a, button, input, textarea, .interactive-card, .magnetic-btn";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveTargets)) {
      ring.classList.add("cursor-hover");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveTargets)) {
      ring.classList.remove("cursor-hover");
    }
  });
}

// ----------------- 2. TYPING EFFECT -----------------
function initTypingEffect() {
  const target = document.getElementById("typewriterText");
  if (!target) return;

  const roles = [
    "CSE Student",
    "Full Stack Developer",
    "Open to Internships & Roles",
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function tick() {
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      target.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      target.textContent = current.substring(0, charIdx);
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === current.length) {
      speed = 1800; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 300; // Pause before starting next word
    }

    setTimeout(tick, speed);
  }

  // Clear text first and start immediately
  target.textContent = "";
  tick();
}

// ----------------- 3. MAGNETIC BUTTONS -----------------
function initMagneticButtons() {
  if (window.matchMedia("(hover: none)").matches) return;

  const buttons = document.querySelectorAll(".magnetic-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate3d(0px, 0px, 0px)";
      btn.style.transition = "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)";
    });

    btn.addEventListener("mouseenter", () => {
      btn.style.transition = "none";
    });
  });
}

// ----------------- 4. PROFILE IMAGE 3D TILT EFFECT -----------------
function initProfileImageHover() {
  const card = document.getElementById("profileCard");
  if (!card || window.matchMedia("(hover: none)").matches) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
}

// ----------------- 5. ACTIVE NAVBAR INDICATOR -----------------
function initActiveNavbarIndicator() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  window.addEventListener(
    "scroll",
    () => {
      let currentId = "";
      const scrollPos = window.scrollY + 180;

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = sec.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active-nav");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active-nav");
        }
      });
    },
    { passive: true },
  );
}

// ----------------- 6. SCROLL REVEAL -----------------
function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ----------------- 7. ANIMATED STATISTICS -----------------
function setupCounters() {
  const counters = document.querySelectorAll(".counter");
  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = Math.max(1, target / 35);
            const updateCount = () => {
              count += increment;
              if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 35);
              } else {
                counter.innerText = target + "+";
              }
            };
            updateCount();
          });
        }
      });
    },
    { threshold: 0.3 },
  );

  const aboutSection = document.getElementById("about");
  if (aboutSection) observer.observe(aboutSection);
}

// ----------------- 8. INTERACTIVE PROJECT CARDS WITH 3D TILT & SHEEN -----------------
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
      <div class="interactive-card glass-panel rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between">
        <div class="card-sheen"></div>
        <div class="p-5 sm:p-6 relative z-10">
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
        <div class="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-slate-800/60 mt-auto relative z-10">
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
  setupCard3DTilt();
}

function setupCard3DTilt() {
  if (window.matchMedia("(hover: none)").matches) return;

  const cards = document.querySelectorAll(".interactive-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
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

// ----------------- CERTIFICATES, SKILLS & TIMELINE -----------------
function renderCertificates() {
  const container = document.getElementById("certificatesGrid");
  if (!container) return;

  container.innerHTML = certificatesData
    .map(
      (cert) => `
    <div class="interactive-card glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
      <div class="card-sheen"></div>
      <div class="relative z-10">
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

      <div class="pt-4 border-t border-slate-800/60 relative z-10">
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
  setupCard3DTilt();
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
  } catch (_) {}

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
      <div class="interactive-card glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800">
        <div class="card-sheen"></div>
        <h4 class="text-sm font-semibold mono uppercase tracking-wider text-cyan-400 mb-6 relative z-10">${titles[cat]}</h4>
        <div class="space-y-4 relative z-10">
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

  setupCard3DTilt();
}

async function fetchProjects() {
  currentProjects = fallbackProjects;
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (res.ok) {
      const data = await res.json();
      if (data.length > 0) currentProjects = data;
    }
  } catch (_) {}

  renderProjects(currentProjects);
  setupFilterListeners();
}

async function fetchExperiences() {
  let experiences = fallbackExperiences;
  try {
    const res = await fetch(`${API_BASE}/experiences`);
    if (res.ok) {
      const data = await res.json();
      if (data.length > 0) experiences = data;
    }
  } catch (_) {}

  const container = document.getElementById("timelineList");
  if (!container) return;

  container.innerHTML = experiences
    .map(
      (item) => `
    <div class="relative group">
      <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-500 ring-4 ring-[#0a0f1d]"></div>
      <div class="interactive-card glass-panel p-5 sm:p-6 rounded-xl border border-slate-800">
        <div class="card-sheen"></div>
        <div class="relative z-10">
          <span class="text-xs mono text-cyan-400 font-semibold">${item.period}</span>
          <h4 class="text-base sm:text-lg font-bold text-white mt-1">${item.title}</h4>
          <div class="text-xs sm:text-sm font-medium text-slate-300 mb-2">${item.organization}</div>
          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">${item.description}</p>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  setupCard3DTilt();
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");
  const submitBtn = document.getElementById("submitBtn");

  if (!form) return;

  // Paste your Formspree endpoint here:
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljdpajp"; // <-- REPLACE 'xyzabwqr' WITH YOUR FORMSPREE FORM ID

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerText = "Transmitting Message...";
    alertBox.classList.add("hidden");

    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        alertBox.className =
          "text-xs sm:text-sm p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300";
        alertBox.innerText =
          "Message sent successfully! Ankit will receive your email shortly.";
        alertBox.classList.remove("hidden");
        form.reset();
      } else {
        const errorData = await res.json();
        throw new Error(
          errorData.errors
            ? errorData.errors.map((err) => err.message).join(", ")
            : "Failed to send message.",
        );
      }
    } catch (err) {
      alertBox.className =
        "text-xs sm:text-sm p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300";
      alertBox.innerText =
        err.message ||
        "Something went wrong. You can also email directly at krankit2007@gmail.com.";
      alertBox.classList.remove("hidden");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";
    }
  });
}
