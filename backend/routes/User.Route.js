const router = require("express").Router();
const { postUser, getUser, deleteUser,loginUser,decoded } = require('../controller/User')

router.post("/user", postUser);

router.get("/user", getUser);

router.post("/user/login", loginUser);

router.post('/decode',decoded)

router.delete('/user', deleteUser)

module.exports = router;
