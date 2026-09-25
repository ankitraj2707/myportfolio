const express = require("express");
const router = express.Router();
const prisma = require("../db");
const auth = require("../middleware/auth");

// GET /api/experiences
router.get("/", async (req, res) => {
  try {
    const data = await prisma.experience.findMany({
      orderBy: { order: "asc" },
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/experiences (Protected)
router.post("/", auth, async (req, res) => {
  try {
    const exp = await prisma.experience.create({ data: req.body });
    res.status(201).json(exp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/experiences/:id (Protected)
router.delete("/:id", auth, async (req, res) => {
  try {
    await prisma.experience.delete({ where: { id: req.params.id } });
    res.json({ message: "Experience item deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
