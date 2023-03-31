import express from "express";
import { getHomePage } from "../controllers/home.controller";

let router = express.Router();

export const initWebRoutes = (app) => {
  router.get("/", getHomePage);

  return app.use("/", router);
};
