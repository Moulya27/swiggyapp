const router = require("express").Router();
const { privatePosts, MenuItems } = require("../database");
const authToken = require("../middleware/authenticateToken");

router.get("/public",authToken, (req, res) => {
  res.json(MenuItems);
});

router.get("/private", authToken, (req, res) => {
  res.json(privatePosts);
});

module.exports = router;
