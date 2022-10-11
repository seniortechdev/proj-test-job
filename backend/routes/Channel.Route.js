const router = require("express").Router();
const { postChannel, getChannel, deleteCannel } = require('../controller/Channel')

router.post("/channel", postChannel);

router.get("/channel", getChannel);

router.delete("/channel", deleteCannel);


module.exports = router;
