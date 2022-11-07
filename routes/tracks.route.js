const router = require("express").Router();
const spotifyApi = require("../spotifyConfig");

router.get("/:albumId", async (req, res) => {
  // console.log(artist);
  console.log(req.params.albumId);
  spotifyApi
    .getAlbumTracks(req.params.albumId)
    // .getArtistAlbums(req.params.albumId, { album_type: "album" })
    .then((data) => {
      console.log("The received data from the API for Tracks: ", data.body);
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'

      res.render("tracks", {
        album: data.body.items[0].name,
        tracks: data.body.items,
      });
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

module.exports = router;
