"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taxis_controllers_1 = require("../controllers/taxis_controllers");
const router = (0, express_1.Router)();
//router.get('/taxis', getTaxis )
/**
 * Get track
 * @swagger
 * tags:
 *  - name: Taxis
 *    description: Operations on taxis
 * paths:
 *  /taxis:
 *      get:
 *          tags:
 *              - Taxis
 *          summary: List taxis
 *          parameters:
 *              - name: page
 *                in: query
 *                description: Page of the list to consult
 *                required: false
 *                schema:
 *                  type: integer
 *                  default: 1
 *              - name: pageSize
 *                in: query
 *                description: Number of elements per page
 *                required: false
 *                schema:
 *                  type: integer
 *                  default: 10
 *          responses:
 *              '200':
 *                  description: Successful operation
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              $ref: '#/components/schemas/Taxis'
 *                          examples:
 *                              allTaxis:
 *                                  value:
 *                                      - id: 974
 *                                        plate: "FNDF-2678"
 *                                      - id: 8935
 *                                        plate: "GAJG-2446"
 *                                      - id: 6772
 *                                        plate: "NOCB-3788"
 *
 *
 */
router.get('/taxis', taxis_controllers_1.getAllTaxis);
exports.default = router;
