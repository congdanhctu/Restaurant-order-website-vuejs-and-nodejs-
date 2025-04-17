const db = require("../db"); // Database connection
const bcrypt = require("bcrypt");

// Login function
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db("user").where({ user_email: email }).first();

    if (user) {
      const validPassword = await bcrypt.compare(password, user.user_password);
      if (validPassword) {
        req.session.user = { id: user.user_id, user_type: user.user_type }; // Save info in session
        return res.json({
          success: true,
          user: { id: user.user_id, user_type: user.user_type },
        });
      } else {
        return res
          .status(401)
          .json({ success: false, message: "Incorrect password" });
      }
    } else {
      return res
        .status(401)
        .json({ success: false, message: "User does not exist" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Register function
exports.register = async (req, res) => {
  const { name, email, phone, password, confirmPassword, birth, gender } =
    req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password confirmation does not match",
      });
    }

    const existingUser = await db("user").where({ user_email: email }).first();
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db("user").insert({
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_password: hashedPassword,
      user_birth: birth,
      user_gender: gender,
      user_type: 1, // Assuming `1` is the regular user type
    });

    res.status(201).json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
