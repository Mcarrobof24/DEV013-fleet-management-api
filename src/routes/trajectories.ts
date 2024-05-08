import { Router } from "express";
import { getLocationById } from "../controllers/trajectories_controllers";


const router = Router()



router.get('/trajectories/:id', getLocationById)


export default router



