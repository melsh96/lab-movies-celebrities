const router = require("express").Router();
const CelebrityModel = require("./../models/Celebrity.model");

// all your routes here

router.get("/", async (req, res, next) => {
  try {
    res.render("celebrities/celebrities", {
      celebrities: await CelebrityModel.find(),
    });
  } catch (e) {
    next(e);
  }
});

// GET - create one celebrity (form)
router.get("/create", async (req, res) => {
  res.render("celebrities/new-celebrity");
});

// POST - create one celebrity
router.post("/create", async (req, res, next) => {
  try {
    await CelebrityModel.create(req.body);
    res.redirect("/celebrities");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
