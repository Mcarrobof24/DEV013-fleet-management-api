/* import { version } from "os";
import swaggerJSDoc from "swagger-jsdoc";

export const options ={
    definition:{
        openai: "3.0.0",
        info:{
            title:"Fleet Management API",
            version: "1.0.0",
            description: "REST API of a Fleet Management Software to consult the locations of the vehicles of a taxi company in Beijing, China.",
        },
        servers: [{
            url: "http://localhost:3000"
        }]
    },
    apis:["./src/routes/*.ts"]
} */

import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJSDoc.Options = {
    definition:{
        openai: '3.0.0',
        info:{
            title:'Fleet Management API NEW',
            version: '1.0.0',
            description: 'REST API of a Fleet Management Software to consult the locations of the vehicles of a taxi company in Beijing, China.',
        },
    },
    apis:[`${path.join(__dirname, './routes/*')}`],
}
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

