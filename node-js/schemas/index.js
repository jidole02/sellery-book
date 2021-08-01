const mongoose = require("mongoose");

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose.connect(
    "mongodb://jidole02:fprhwhdk1214@localhost:27017/admin",
    {
      dbName: "sellery_book",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      err
        ? console.log("DB connecting error", err)
        : console.log("DB connecting success!!");
    }
  );
};

mongoose.connection.on("error", (err) => {
  console.error("connect err", err);
});

mongoose.connection.on("disconnected", () => {
  console.error("mongo is disconnect, try to reconnect");
  connect();
});

module.exports = connect;
