const router = require("express").Router();
const CelebrityModel = require("./../models/Celebrity.model");
const MovieModel = require("./../models/Movie.model");

// all your routes here

router.get("/create", async (req, res, next) => {
  try {
    res.render("movies/new-movie", {
      celebrities: await CelebrityModel.find(),
    });
  } catch (e) {
    next(e);
  }
});

// router.post("/create", async (req, res, next) => {
//   const { title, genre, plot, cast } = req.body;
// });

module.exports = router;
