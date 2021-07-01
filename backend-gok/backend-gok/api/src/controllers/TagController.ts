import { Request, Response } from "express";

import { TagService } from "../services/TagService";

class TagController {
  async create (req: Request, res: Response): Promise<Response> {
    const _tag = req.body;
   
    const tagService = new TagService();

    
    try {
      const starred = await tagService.create(_tag);
      return res.json(starred);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _tag = req.body;
    const tagService = new TagService();
    
    try {
      const starred = await tagService.update(<any>id, _tag);
      return res.json(starred);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }


  async findAllTags(req: Request, res: Response): Promise<Response> {
    const tagService = new TagService();

    try { 
      const response = await tagService.findAll();

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const tagService = new TagService();

    try { 
      const response = await tagService.findOne(id);

      return res.json(response);
    } catch (e) {
      console.log('erro', e)
      // res.status(e.error.status).json(e.error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const tagService = new TagService();

    try { 
      const response = await tagService.delete(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { TagController };
