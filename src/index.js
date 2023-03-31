import express from "express";
import bodyParser from "body-parser";
import { configViewEngine } from "./configs/viewEngine.config";
import { initWebRoutes } from "./routes/web.route";
import { connectDB } from "./configs/connectDB.config";

require("dotenv").config();

let app = express();
let port = process.env.PORT || 8800;

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

connectDB();

app.listen(port, () => {
  console.log("listening on port " + port);
});
