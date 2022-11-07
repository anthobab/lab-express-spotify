const router = require("express").Router();

console.log("fichier index.route.js");
router.use("/artist-search", require("./artist-search.route"));
router.use("/albums", require("./albums.route"));
router.use("/tracks", require("./tracks.route"));

router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
