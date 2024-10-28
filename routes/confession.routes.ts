import { Router } from "express";
import { confessionController } from "../controllers/confession.controller";
const {createConfession} = confessionController;
const router = Router()

router.route('/').post(createConfession)

export const confessionRouter = router;