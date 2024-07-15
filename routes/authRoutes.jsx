const express = require("express");
const router = express.Router();
const users = [
  {
    firstName: "Admin",
    lastName: "Admin",
    middleName: "",
    birthDate: "1970-01-01",
    email: "admin@example.com",
    password: "adminpassword",
    role: "admin",
    faculty: "",
    direction: "",
    course: "",
    group: "",
    subject: "",
  },
];

router.post("/api/register", (req, res) => {
  const { email, role } = req.body;
  const userExists = users.some(
    (user) => user.email === email && user.role === role
  );
  if (userExists) {
    return res
      .status(400)
      .json({ message: "Пользователь с таким email и ролью уже существует" });
  }
  users.push(req.body);
  res.status(201).json({ message: "Регистрация прошла успешно" });
});

router.post("/api/login", (req, res) => {
  const { email, password, role } = req.body;
  const user = users.find(
    (user) =>
      user.email === email && user.password === password && user.role === role
  );
  if (!user) {
    return res
      .status(400)
      .json({ message: "Неправильный email, пароль или роль" });
  }
  res.status(200).json({ message: "Вход выполнен успешно" });
});

module.exports = router;
