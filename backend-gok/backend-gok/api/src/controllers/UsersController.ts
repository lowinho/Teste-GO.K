import { Request, Response } from "express";

import { UsersService } from "../services/UsersService";

class UsersController {
  async create (req: Request, res: Response): Promise<Response> {
    const _users = req.body;
   
    const usersService = new UsersService();

    
    try {
      const users = await usersService.create(_users);
      return res.json(users);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findAllUsers(req: Request, res: Response): Promise<Response> {
    const usersService = new UsersService();

    try { 
      const response = await usersService.findAll();

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usersService = new UsersService();

    try { 
      const response = await usersService.delete(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { UsersController };
