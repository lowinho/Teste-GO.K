import { Router } from 'express';
import { TagController } from "../controllers/TagController";

const tagRoutes = Router();

const tagController = new TagController();

tagRoutes.post("/", tagController.create);
tagRoutes.put("/:id", tagController.update);
tagRoutes.get("/", tagController.findAllTags);
tagRoutes.get("/:id", tagController.findById);
tagRoutes.delete("/:id", tagController.delete);

export { tagRoutes };
