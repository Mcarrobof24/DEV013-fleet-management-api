import express  from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const routerSwagger = express.Router();
const options = {
    swaggerDefinition:{
        openai: '3.0.0',
        info:{
            title: "Fleet Management API",
            version: "1.0.0",
            description: "REST API of a Fleet Management Software to consult the locations of the vehicles of a taxi company in Beijing, China.",
        },
        servers: [
            { 
                url: "http://localhost:3000"
            },
        ],
        components:{
            schemas:{
                Taxis: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 974
                        },
                        plate:{
                            type: 'string',
                            example: 'FNDF-2678'
                        }
                    }
                },   
            }
        }
    },
    apis: ['./src//routes/*.ts'],      
};

const swaggerSpec = swaggerJSDoc(options);
routerSwagger.use('/api-docs', swaggerUi.serve);
routerSwagger.get('/api-docs', swaggerUi.setup(swaggerSpec));

export default routerSwagger;


/*import swaggerJSDoc, {OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition= {
    openai: '3.0.0',
    info:{
        title: "Fleet Management API",
        version: "1.0.0",
         description: "REST API of a Fleet Management Software to consult the locations of the vehicles of a taxi company in Beijing, China.",
    },
    servers: [
        { 
            url: "http://localhost:3000"
        },
    ],
    components:{
        schemas:{
            Taxis: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 974
                    },
                    plate:{
                        type: 'string',
                        example: 'FNDF-2678'
                    },
                },
            },   
        },
    },     
}

const swaggerOptions: OAS3Options ={
    swaggerDefinition,
    apis:['./src/routes/*.ts'],
};

export default swaggerJSDoc(swaggerOptions)*/





