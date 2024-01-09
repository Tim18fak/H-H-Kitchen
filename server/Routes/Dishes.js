const express = require("express");
const router = express.Router();
// initializing a route file uisng express
router.post("/a/p", async (req, res) => {
  const { images, title, description } = req.body;
});
module.exports = router;
