import { Router } from 'express';
import { SuggestionController } from "../controllers/SuggestionController";

const suggestionRoutes = Router();

const suggestionController = new SuggestionController();

suggestionRoutes.post("/", suggestionController.create);
suggestionRoutes.put("/:id", suggestionController.update);
suggestionRoutes.get("/", suggestionController.findAllSuggestion);

export { suggestionRoutes };
