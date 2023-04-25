const { isLoggedIn } = require("../middleware/route-guard");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/main", isLoggedIn, (req, res, next) => {
  console.log(req.session);
  //render view and user is coming from req.session.user
  res.render("main", { user: req.session.user });
});

router.get("/private", isLoggedIn, (req, res, next) => {
  console.log(req.session);
  //render view and user is coming from req.session.user
  res.render("private", { user: req.session.user });
});

module.exports = router;
