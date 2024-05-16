"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//En este archivo se crea el servidor 
const express_1 = __importDefault(require("express"));
//Swagger
const swaggerOptions_1 = __importDefault(require("./swaggerOptions"));
const taxis_1 = __importDefault(require("./routes/taxis"));
const trajectories_1 = __importDefault(require("./routes/trajectories"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000);
//Para trabajar con archivos json
app.use(express_1.default.json());
//rutas declaradas
app.use(taxis_1.default);
app.use(trajectories_1.default);
//Implementar Swagger
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSetup));
app.use(swaggerOptions_1.default);
exports.default = app;
