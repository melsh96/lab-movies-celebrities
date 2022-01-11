const router = require("express").Router();
const CelebrityModel = require("./../models/Celebrity.model");

// all your routes here

// GET - create one celebrity (form)
router.get("/create", async (req, res, next) => {
  const celebrities = await CelebrityModel.find();
  res.render("celebrities/new-celebrity", celebrities);
});

// POST - create one celebrity
router.post("/create", async (req, res, next) => {
  try {
    await CelebrityModel.create(req.body);
    res.redirect("");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
