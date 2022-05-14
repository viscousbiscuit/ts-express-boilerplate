import express from 'express';
import { getHome, getHomeDefault, getHomeId } from '../controllers/home';

const router = express.Router();

router.get('/', getHome);

router.get('/home', getHomeDefault);

router.get('/home/:id', getHomeId);

export default router;