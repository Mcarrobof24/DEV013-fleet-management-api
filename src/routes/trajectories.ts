import { Router } from "express";
import { getLocationById, getLastLocation } from "../controllers/trajectories_controllers";


const router = Router()

/**
 * Get track
 * @swagger
 * tags:
 *  - name: Trajectories
 *    description: Operations on trajectories
 * paths:
 *  /trajectories/{taxiId}:
 *      get:
 *          tags:
 *              - Trajectories
 *          summary: List trajectories
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
 *              - name: taxiId
 *                in: path
 *                description: Id of the taxi to consult
 *                required: true
 *                schema:
 *                  type: string
 *                example: 15457
 *              - name: date
 *                in: query
 *                description: Date
 *                required: true
 *                schema:
 *                  type: string
 *                  default: date
 *          responses:
 *              '200':
 *                  description: Successful operation
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array                                     
 *                              $ref: '#/components/schemas/Trajectories'
 *                          examples:
 *                              allTrajectories:
 *                                  value:
 *                                      - id: 9497
 *                                        taxiId: 7957
 *                                        date: "2008-02-08T12:56:12.000Z"
 *                                        latitude: 116.26536
 *                                        longitude: 39.89442
 *                                      - id: 9532
 *                                        taxiId: 7957
 *                                        date: "2008-02-08T14:41:47.000Z"
 *                                        latitude: 116.27765
 *                                        longitude: 39.92311
 *                                      - id: 9533
 *                                        taxiId: 7957
 *                                        date: "2008-02-08T14:46:49.000Z"
 *                                        latitude: 116.25863
 *                                        longitude: 39.91974
 *              '404':
 *                   description: Taxi ID not found
 *                   content:
 *                      application/json:
 *                          schema:
 *                              type: array                                     
 *                              $ref: '#/components/schemas/Error'
 *  /trajectories/latest:
 *      get:
 *          tags:
 *              - Trajectories
 *          summary: List lastest trajectories
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
 *                              $ref: '#/components/schemas/Trajectories'
 *                          examples:
 *                              allTrajectoriesLastest:
 *                                  value:
 *                                      - id: 9497
 *                                        taxiId: 7249
 *                                        plate: "CNCJ-2997" 
 *                                        date: "2008-02-08 17:36:33"
 *                                        latitude: 116.291
 *                                        longitude: 39.88672
 *                                      - id: 9532
 *                                        taxiId: 10133
 *                                        plate: "PAOF-6727"
 *                                        date: "2008-02-08 16:07:16"
 *                                        latitude: 116.11806
 *                                        longitude: 39.72814
 *                                      - id: 9533
 *                                        taxiId: 7956
 *                                        plate: "CCKF-1601" 
 *                                        date: "2008-02-08 15:34:38"
 *                                        latitude: 117.12528
 *                                        longitude: 40.14692          
 *                                                                 
 */

router.get('/trajectories/:taxiId', getLocationById);

router.get('/trajectories/search/lastest', getLastLocation)


export default router



