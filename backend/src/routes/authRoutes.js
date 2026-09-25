const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../db");

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      // Auto-provision initial master account on first clean launch if empty
      const count = await prisma.admin.count();
      if (count === 0 && email === "ankit@example.com") {
        const hashedPassword = await bcrypt.hash(password, 10);
        admin = await prisma.admin.create({
          data: { email, password: hashedPassword },
        });
      } else {
        return res.status(400).json({ message: "Invalid credentials." });
      }
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "7d" },
    );
    res.json({ token, user: { id: admin.id, email: admin.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
