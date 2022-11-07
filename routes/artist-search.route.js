const router = require("express").Router();
const spotifyApi = require("./../spotifyConfig");

router.get("/", async (req, res) => {
  const { artist } = req.query;
  // console.log(artist);
  console.log(artist);
  spotifyApi
    .searchArtists(artist)
    .then((data) => {
      console.log(
        "The received data from the API: ",
        data.body.artists.items[0]
      );
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
      res.render("artist-search-results", {
        artist,
        artists: data.body.artists.items,
      });
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

module.exports = router;
