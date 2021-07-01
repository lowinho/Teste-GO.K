import { Request, Response } from "express";

import { StarredService } from "../services/StarredService";

class StarredController {
  async create (req: Request, res: Response): Promise<Response> {
    const _starred = req.body;
   
    const starredService = new StarredService();

    
    try {
      const starred = await starredService.create(_starred);
      return res.json(starred);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _starred = req.body;
    const starredService = new StarredService();
    
    try {
      const starred = await starredService.update(<any>id, _starred);
      return res.json(starred);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    console.log(id);
    const starredService = new StarredService();

    try { 
      const response = await starredService.findOne(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async findAllStarreds(req: Request, res: Response): Promise<Response> {
    const starredService = new StarredService();

    try { 
      const response = await starredService.findAll();

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { StarredController };
