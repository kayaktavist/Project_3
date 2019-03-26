const router = require("express").Router();
const campaignRoutes = require("./campaigns");

// Book routes
router.use("/campaign", campaignRoutes);

module.exports = router;
