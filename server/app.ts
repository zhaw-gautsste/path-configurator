import * as dotenv from "dotenv";
import * as morgan from "morgan";
import * as path from "path";
import setRoutes from "./routes";
import BaseCtrl from "./controllers/base";

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

dotenv.load({ path: ".env" });
app.set("port", (process.env.PORT || 8080));

app.use("/", express.static(path.join(__dirname, "../public")));

app.use(morgan("dev"));

if (!module.parent) {
  app.listen(app.get("port"), () => console.log(`Path configurator listening on port ${app.get("port")}`));
}

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at:", p, "reason:", reason);
});

// setup CORS
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Method", "*");
  res.header("Access-Control-Allow-Headers", req.header["Access-Control-Request-Headers"]);
  res.header("Access-Control-Expose-Headers", "Authorization");
  res.type("application/json");
  next();
});

app.options("/*", function (req, res) {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  res.sendStatus(200);
});

// disable Caching
app.get("/*", function (req, res, next) {
  res.header("cache-control", "no-cache, no-store, must-revalidate"); // HTTP 1.1
  res.header("pragma", "no-cache"); // HTTP 1.0
  res.header("expires", "0"); // HTTP 1.0 proxies
  next();
});

// Path ping request
app.get("/services/ping", function (req, res) {
  res.json({status: "ok", userId: "demo", languageCode: "en", version: "0.1.5"}); // userId: "demo",
});

BaseCtrl.initDatabase();

setRoutes(app);

// set the home page route
app.get("/", function (req, res) {

  // ejs render automatically looks in the views folder
  res.render("../src/index.html");
});

export { app };

