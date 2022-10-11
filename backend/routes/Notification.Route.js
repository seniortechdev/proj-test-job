const router = require("express").Router();
const {postNotification,getNotification, deleteNotification, getNotificationByUserId} = require('../controller/Notification');
const { VerifyUser } = require("../middleware/VerifyUser");

router.post(
    "/notification",
    VerifyUser,
    postNotification
  );

  router.get(
    "/notification",
    getNotification
  );

  router.get(
    "/notification/:id",
    getNotificationByUserId
  );

  router.delete(
    "/notification",
    deleteNotification
  );

  module.exports = router;
