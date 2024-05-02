import { Router } from "express";
import { getTaxis } from "../controllers/taxis_controllers";

const router = Router()

router.get('/taxis', getTaxis )


router.get('/taxis', (req, res) => res.send('Hola Cami'))

export default router