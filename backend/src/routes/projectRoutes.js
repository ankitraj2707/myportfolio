const express = require("express");
const router = express.Router();
const prisma = require("../db");
const auth = require("../middleware/auth");

// GET /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { order: "asc" },
    });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/projects (Protected)
router.post("/", auth, async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      technologies,
      imageUrl,
      githubUrl,
      liveUrl,
    } = req.body;
    const project = await prisma.project.create({
      data: {
        title,
        category,
        description,
        technologies: Array.isArray(technologies)
          ? technologies
          : technologies.split(",").map((s) => s.trim()),
        imageUrl,
        githubUrl,
        liveUrl,
      },
    });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/projects/:id (Protected)
router.delete("/:id", auth, async (req, res) => {
  try {
    await prisma.project.delete({ where: { id: req.params.id } });
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
