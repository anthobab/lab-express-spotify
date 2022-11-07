const router = require("express").Router();
const spotifyApi = require("./../spotifyConfig");

router.get("/:artistId", async (req, res) => {
  // console.log(artist);
  console.log(req.params.artistId);
  spotifyApi
    .getArtistAlbums(req.params.artistId)
    // .getArtistAlbums(req.params.artistId, { album_type: "album" })
    .then((data) => {
      console.log("The received data from the API: ", data.body);
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'

      spotifyApi.getArtist(req.params.artistId).then(
        function (dataArtist) {
          console.log("Artist information", dataArtist.body);
          res.render("albums", {
            artist: dataArtist.body.name,
            albums: data.body.items,
          });
        },
        function (err) {
          console.error(err);
        }
      );
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

module.exports = router;
