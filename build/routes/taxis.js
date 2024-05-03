"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taxis_controllers_1 = require("../controllers/taxis_controllers");
const router = (0, express_1.Router)();
//router.get('/taxis', getTaxis )
/**
 * @swagger
 * /taxis:
 *  get:
 *      summary: Obtener lista de taxis
 *      tags:
 *          - Taxis
 *      parameters:
 *          - name: page
 *            in: query
 *            description: Page number to consult
 *            required: false
 *            schema:
 *              type: integer
 *              default: 1
 *          - name: pageSize
 *            in: query
 *            description: Number of taxis per page
 *            required: false
 *            schema:
 *              type: integer
 *              default: 10
 *      responses:
 *          200:
 *              description: Listado de taxis obtenidos con exito
 *              content:
 *                  application/json
 *              schema:
 *                  type: array
 *                  $ref: '#/components/schemas/Taxis'
 *          500:
 *              description: Error interno del servidor
 *
 */
router.get('/taxis', taxis_controllers_1.getAllTaxis);
exports.default = router;
