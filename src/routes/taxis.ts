import { Router } from "express";
import { getAllTaxis } from "../controllers/taxis_controllers";

const router = Router()

//router.get('/taxis', getTaxis )


router.get('/taxis', getAllTaxis)

export default router