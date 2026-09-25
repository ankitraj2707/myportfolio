const API_BASE = "http://localhost:5000/api";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("ankit_portfolio_token");
  if (token) {
    showDashboard();
  } else {
    showLogin();
  }
  setupAuthEvents();
});

function showLogin() {
  document.getElementById("loginView").classList.remove("hidden");
  document.getElementById("dashboardView").classList.add("hidden");
}

function showDashboard() {
  document.getElementById("loginView").classList.add("hidden");
  document.getElementById("dashboardView").classList.remove("hidden");
  loadMessages();
}

function setupAuthEvents() {
  // Login Form
  document
    .getElementById("adminLoginForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      try {
        const res = await fetch(`${API_BASE}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Login failed");

        localStorage.setItem("ankit_portfolio_token", data.token);
        showDashboard();
      } catch (err) {
        alert(err.message);
      }
    });

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("ankit_portfolio_token");
    showLogin();
  });

  // Add Project
  document
    .getElementById("addProjectForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("ankit_portfolio_token");
      const payload = {
        title: document.getElementById("projTitle").value,
        category: document.getElementById("projCat").value,
        technologies: document.getElementById("projTech").value,
        githubUrl: document.getElementById("projGithub").value,
        liveUrl: document.getElementById("projLive").value,
        description: document.getElementById("projDesc").value,
        imageUrl:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600",
      };

      try {
        const res = await fetch(`${API_BASE}/projects`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          alert("Project added successfully!");
          document.getElementById("addProjectForm").reset();
        }
      } catch (err) {
        alert(err.message);
      }
    });
}

async function loadMessages() {
  const token = localStorage.getItem("ankit_portfolio_token");
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const messages = await res.json();
      const list = document.getElementById("messagesList");
      if (messages.length === 0) {
        list.innerHTML = `<div class="text-xs text-slate-500 mono">No inquiries yet.</div>`;
        return;
      }
      list.innerHTML = messages
        .map(
          (m) => `
        <div class="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs space-y-1">
          <div class="flex justify-between items-center text-slate-400">
            <span class="font-bold text-white">${m.name} (${m.email})</span>
            <span class="mono">${new Date(m.createdAt).toLocaleDateString()}</span>
          </div>
          <div class="font-semibold text-cyan-400">${m.subject}</div>
          <p class="text-slate-300 mt-1">${m.message}</p>
        </div>
      `,
        )
        .join("");
    }
  } catch (err) {
    console.error(err);
  }
}
