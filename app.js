const express = require("express");
const cors = require("cors");
const app = express();

// MIDDLEWARES
app.use(cors());

// ROUTES
const routes = require("./routers");
app.use("/", routes);


// STARTING SERVER
app.listen(process.env.PORT || 8888, (err) => {
  if (err) console.log(`SERVER FAILED TO RUN 🐛 ${err}`);
  console.log(`😎 server running successfully!`);
});