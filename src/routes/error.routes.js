const { notFound404, severError } = require("../controllers/error.controller");
const router = require("express").Router();

router.use(notFound404);
router.use(severError);


module.exports = router;
