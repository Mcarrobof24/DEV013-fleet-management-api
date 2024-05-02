//En este archivo se crea el servidor 
import express, { Application, Request, Response } from 'express';

import taxisRoutes from './routes/taxis'

const app: Application = express();

app.set('port', process.env.PORT || 3000);

//Para trabajar con archivos json
app.use(express.json())
app.use(taxisRoutes)

export default app

