import { Router } from "express";
import {createService} from '../controllers/services.controllers'
// const {createService} = serviceController;

const router = Router();

router.route('/').post(createService)


export const serviceRouter = router;