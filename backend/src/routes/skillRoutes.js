const express = require("express");
const router = express.Router();
const prisma = require("../db");
const auth = require("../middleware/auth");

// GET /api/skills
router.get("/", async (req, res) => {
  try {
    const skills = await prisma.skill.findMany();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/skills (Protected)
router.post("/", auth, async (req, res) => {
  try {
    const { name, category, iconClass, level } = req.body;
    const skill = await prisma.skill.create({
      data: {
        name,
        category,
        iconClass: iconClass || "",
        level: parseInt(level) || 80,
      },
    });
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/skills/:id (Protected)
router.delete("/:id", auth, async (req, res) => {
  try {
    await prisma.skill.delete({ where: { id: req.params.id } });
    res.json({ message: "Skill deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
