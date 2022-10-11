require("dotenv").config();
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const createErrors = require("http-errors");

const PORT = process.env.PORT || 2500;

require("./database");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin:  '*'
}));



// 
const Notification = require('./routes/Notification.Route')
const User = require('./routes/User.Route')
const Channel = require('./routes/Channel.Route')
const Category = require('./routes/Category.Route')




app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message:
      "Home page",
  });
});

app.use("/api/v1/", Notification);
app.use("/api/v1/", User);
app.use("/api/v1/", Channel);
app.use("/api/v1/", Category);


// Handling the error
app.use(async (req, res, next) => {
  next(createErrors.NotFound("Opps...Incorrect URL"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(` Server Running succesfully on port ${PORT} 🚀 🚀  🔥 🔥  `);
});

module.exports = app;
