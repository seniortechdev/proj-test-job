require("dotenv").config();
const mongoose = require("mongoose");

const mongodb_uri = process.env.MONGODB_URI;

mongoose
  .connect(mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
  .then(() => {
    console.info(
      `Mongodb connected succesfully 🙅🙅`
    );
  })
  .catch((error) => {
    console.error(
      "Error : Mongoose cannot be connected at this moment due to no internet or poor connection ❌ ❌ ❌ ❌"
    );
  });

// for mongoose termination
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose is disconnected due to app termination ❌ ❌ ❌ ❌");
  });
  process.exit(0);
});
