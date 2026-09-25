const express = require("express");
const router = express.Router();
const prisma = require("../db");
const auth = require("../middleware/auth");

// POST /api/contact (Public form submission)
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    const record = await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });
    res
      .status(201)
      .json({ message: "Message sent successfully!", id: record.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/contact (Protected - Admin inbox)
router.get("/", auth, async (req, res) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
