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
        openapi: '3.0.0',
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
                            description: 'id',
                            type: 'integer',
                            format: 'int64',
                            example: 974
                        },
                        plate: {
                            type: 'string',
                            description: 'plate',
                            format: 'int64',
                            example: 'FNDF-2678'
                        }
                    }
                },
                Trajectories: {
                    type: 'object',
                    properties: {
                        id: {
                            description: 'id',
                            type: 'integer',
                            format: 'int64',
                            example: 9497
                        },
                        taxiId: {
                            description: 'taxiId',
                            type: 'integer',
                            format: 'int64',
                            example: 7957,
                        },
                        date: {
                            type: 'string',
                            description: 'date',
                            example: '2008-02-08T12:56:12.000Z',
                        },
                        latitude: {
                            type: 'string',
                            description: 'latitude',
                            example: 116.26536,
                        },
                        longitude: {
                            type: 'string',
                            description: 'longitude',
                            example: 39.89442,
                        }
                    }
                },
                LastestTrajectories: {
                    type: 'object',
                    properties: {
                        id: {
                            description: 'id',
                            type: 'integer',
                            format: 'int64',
                            example: 9497
                        },
                        taxiId: {
                            description: 'taxiId',
                            type: 'integer',
                            format: 'int64',
                            example: 7249,
                        },
                        plate: {
                            type: 'string',
                            format: 'int64',
                            description: 'plate',
                            example: 'CNCJ-2997',
                        },
                        date: {
                            type: 'string',
                            description: 'date',
                            example: '2008-02-08 17:36:33',
                        },
                        latitude: {
                            type: 'string',
                            description: 'latitude',
                            example: 116.291,
                        },
                        longitude: {
                            type: 'string',
                            description: 'longitude',
                            example: 39.88672,
                        }
                    }
                },
                Error: {
                    type: 'object',
                    properties: {
                        error: {
                            description: 'Error message',
                            type: 'string',
                        }
                    }
                }
            }
        },
    },
    apis: ['./src/routes/*.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
routerSwagger.use('/api-docs', swagger_ui_express_1.default.serve);
routerSwagger.get('/api-docs', swagger_ui_express_1.default.setup(swaggerSpec));
exports.default = routerSwagger;
/*const routerSwagger = express.Router();
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentation taxis',
      version: '1.0.0',
      description: 'Documentation for my API',
    },
    servers: [{ url: 'http://localhost:3000' }],
    components: {
      schemas: {
        Taxis: {
          taxiExample1: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 10133,
              },
              plate: {
                type: "string",
                example: "PAOF-6727"
              },
            },
          },
          taxiExample2: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                example: 5,
              },
              plate: {
                type: "string",
                example: "5555-DBA"
              },
            },
          }
        },
        Trajectories: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              format: "int64",
              example: 8
            },
            taxi_id: {
              type: "integer",
              format: "int32",
              example: 10133
            },
            date: {
              type: "string",
              format: "date-time",
              example: "2008-02-02 13:47:59"
            },
            latitude: {
              type: "number",
              format: "int64",
              example: 116.37659
            },
            longitude: {
              type: "number",
              format: "int64",
              example: 39.85567
            }
          }
        },
        Parameters: {
          dateParams: {
            name:"_date",
            in: "query",
            description: "fecha de la cual se va a buscar",
            example: "2008-02-02",
            schema: {
              type: "integer"
            }
          },
          skipParam: {
            name: "_skip",
            in: "query",
            description: "número del que partir",
            example: 2,
            schema: {
              type: "integer"
            }
          },
          takeParam: {
            name: "_take",
            in: "query",
            description: "cantidad mostrada",
            example: 1,
            schema: {
              type: "integer"
            }
          },
        },
        Error: {
          type: "object",
          properties: {
            // code: {
            //     description: "Código de error",
            //     type: "string"
            // },
            // status: {
            //     description: "httpstatus",
            //     type: "integer",
            //     format: "int32",
            // },
            // type: {
            //     type: "string",
            //     description: "Tipo de error",
            // },
            message: {
              type: "string",
              description: "Mensaje de error"
            }
          }
        },
      }
                             
    }
  },
  apis: ['./src/routes/*.ts'],
};
  
const swaggerSpec = swaggerJSDoc(options);
routerSwagger.use('/api-docs', swaggerUi.serve);
routerSwagger.get('/api-docs', swaggerUi.setup(swaggerSpec));

export default routerSwagger;*/
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
