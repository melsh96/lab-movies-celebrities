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

router.post("/movies/create", async (req, res, next) => {
  try {
    await MovieModel.create(req.body);
    res.redirect("/movies");
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    res.render("movies/movies.hbs", {
      movies: await MovieModel.find(),
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
