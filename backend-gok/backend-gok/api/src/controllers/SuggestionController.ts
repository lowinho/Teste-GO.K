import { Request, Response } from "express";

import { SuggestionService } from "../services/SuggestionService";

class SuggestionController {
  async create (req: Request, res: Response): Promise<Response> {
    const _tag = req.body;
   
    const suggestionService = new SuggestionService();

    
    try {
      const tag = await suggestionService.create(_tag);
      return res.json(tag);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _tag = req.body;
    const suggestionService = new SuggestionService();
    
    try {
      const tag = await suggestionService.update(<any>id, _tag);
      return res.json(tag);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findAllSuggestion(req: Request, res: Response): Promise<Response> {
    const suggestionService = new SuggestionService();

    try { 
      const response = await suggestionService.findAll();

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { SuggestionController };
