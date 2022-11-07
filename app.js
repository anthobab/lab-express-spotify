require("dotenv").config();
// const spotifyApi = require("./spotifyConfig");

const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// hbs.registerPartials(__dirname + "/views/partials")
// setting the spotify-api goes here:

// Our routes go here:
try {
  app.use("/", require("./routes/index.route"));

  app.get("/", (req, res) => {
    res.render("home");
  });

  //   /* Without routes folder */
  //   app.get("/artist-search", async (req, res) => {
  //     const { artist } = req.query;
  //     // console.log(artist);
  //     spotifyApi
  //       .searchArtists(artist)
  //       .then((data) => {
  //         console.log(
  //           "The received data from the API: ",
  //           data.body.artists.items[0]
  //         );
  //         // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
  //         res.render("pageartist", { artist, artists: data.body.artists.items });
  //       })
  //       .catch((err) =>
  //         console.log("The error while searching artists occurred: ", err)
  //       );
  //   });
} catch (error) {
  console.log(error);
}

app.listen(3000, () =>
  console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊")
);

// module.exports = spotifyApi;
