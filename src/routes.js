import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import UserMeetupsController from './app/controllers/UserMeetupsController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/meetups', MeetupController.store);
// Route to list meetups from logged user
routes.get('/mymeetups', UserMeetupsController.index);
// Route to update meetups
routes.put('/mymeetups/:id', UserMeetupsController.update);
// Route to delete meetups
routes.delete('/mymeetups/:id', UserMeetupsController.delete);
// Route to list meetups
routes.get('/meetups', MeetupController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
