import { Router } from 'express';
import { StarredController } from "../controllers/StarredController";

import multer from "multer";
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig).single("file");

const starredRoutes = Router();

const starredController = new StarredController();

starredRoutes.post("/", starredController.create);
starredRoutes.put("/:id", starredController.update);
starredRoutes.get("/:id", starredController.findById);
starredRoutes.get("/", starredController.findAllStarreds);

export { starredRoutes };
