import { Router } from "express";
import {createService , updateService , getServices} from '../controllers/services.controllers'
// const {createService} = serviceController;

const router = Router();

router.route('/')
.post(createService)
.get(getServices)

router.route('/:id')
.put(updateService)


export const serviceRouter = router;