import { Router } from "express";

import { usersRoutes } from './routes/usersRoutes';
import { starredRoutes } from './routes/starredRoutes';
import { tagRoutes } from './routes/tagRoutes';
import { suggestionRoutes } from './routes/suggestionRoutes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/starred', starredRoutes);
routes.use('/tags', tagRoutes);
routes.use('/suggestion', suggestionRoutes);


export { routes };