const express = require("express");
const themeController = require("../themeController");
const router = express.Router();

router.get('/theme-detect', themeController)

module.exports = router;