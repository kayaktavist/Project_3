const router = require("express").Router();
const campaignRoutes = require("./campaigns");

// Campaign routes
router.use("/campaign", campaignRoutes);

module.exports = router;
