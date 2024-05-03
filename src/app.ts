//En este archivo se crea el servidor 
import express, { Application} from 'express';
//Swagger
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './swaggerOptions';
import taxisRoutes from './routes/taxis'

const app: Application = express();

app.set('port', process.env.PORT || 3000);

//Para trabajar con archivos json
app.use(express.json());

//rutas declaradas
app.use(taxisRoutes);

//Implementar Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default app

