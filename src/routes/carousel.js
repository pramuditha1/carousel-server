const express = require("express");
const { getSlidesByNumber } = require("../controller/carousel");
const router = express.Router();

router.get("/carousel/:slides", getSlidesByNumber);

module.exports = router;
