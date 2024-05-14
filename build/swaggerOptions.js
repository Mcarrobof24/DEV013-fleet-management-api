"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routerSwagger = express_1.default.Router();
const options = {
    swaggerDefinition: {
        openai: '3.0.0',
        info: {
            title: "Fleet Management API",
            version: "1.0.0",
            description: "REST API of a Fleet Management Software to consult the locations of the vehicles of a taxi company in Beijing, China.",
        },
        servers: [
            {
                url: "http://localhost:3000"
            },
        ],
        components: {
            schemas: {
                Taxis: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 974
                        },
                        plate: {
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
routerSwagger.use('/api-docs', swagger_ui_express_1.default.serve);
routerSwagger.get('/api-docs', swagger_ui_express_1.default.setup(swaggerSpec));
exports.default = routerSwagger;
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
