"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path_1 = __importDefault(require("path"));
const options = {
    definition: {
        openai: '3.0.0',
        info: {
            title: 'Fleet Management API NEW',
            version: '1.0.0',
            description: 'REST API of a Fleet Management Software to consult the locations of the vehicles of a taxi company in Beijing, China.',
        },
    },
    apis: [`${path_1.default.join(__dirname, './routes/*')}`],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
