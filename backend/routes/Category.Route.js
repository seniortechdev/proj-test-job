const router = require("express").Router();
const { postCategory, getCategory, deleteCategory } = require("../controller/Category");

router.post("/category", postCategory);

router.get("/category", getCategory);

router.delete("/category", deleteCategory);


module.exports = router;
