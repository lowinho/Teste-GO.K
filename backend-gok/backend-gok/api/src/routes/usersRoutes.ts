import { Router } from 'express';
import { UsersController } from "../controllers/UsersController";

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.delete("/:id", usersController.delete);
usersRoutes.get("/", usersController.findAllUsers);

export { usersRoutes };
