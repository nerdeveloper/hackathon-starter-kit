import express from 'express';
 import {Request, Response} from 'express';
const router = express.Router();
//import * as userController from '../controllers/userController';
import * as indexController from '../controllers/indexController';

router.get('/',  indexController.home)




export default router;