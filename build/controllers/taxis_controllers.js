"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTaxis = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//export const getTaxis: Handler = (req, res) => res.send('Hola Cami Arrobo')
const getAllTaxis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener el número de página de la solicitud o usar 1 como predeterminado
    const page = parseInt(req.query.page) || 1;
    // Tamaño de la página
    const pageSize = 10;
    try {
        const taxis = yield prisma.taxis.findMany({
            // Saltar los taxis anteriores a la página actual
            skip: (page - 1) * pageSize,
            // Tomar solo el número especificado de taxis
            take: pageSize,
            orderBy: {
                id: 'asc',
            },
        });
        console.log(taxis);
        return res.status(200).json({ data: taxis });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});
exports.getAllTaxis = getAllTaxis;
