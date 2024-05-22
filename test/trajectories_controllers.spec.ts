import { getAllTrajectories, getLastTrajectories} from '../src/services/trajectories_services';
import { getLastLocation } from '../src/controllers/trajectories_controllers';
import { PrismaClient } from '@prisma/client';

//Mockear base de datos
jest.mock('@prisma/client', ()=>{
    const mockTaxis ={
        trajectories:{
            findMany: jest.fn().mockResolvedValue([
                {id: 1020, date: "2008-02-02", latitude: 116.224, longitude: 36.888},
                {id: 2244, date: "2009-04-04", latitude: 114.246, longitude: 28.448},
                {id: 1020, date: "2008-02-02", latitude: 118.123, longitude: 20.666},
                {id: 1020, date: "2008-02-02", latitude: 120.456, longitude: 24.222},
            ]),
        },
        trajectoriesId:{
            findMany: jest.fn().mockResolvedValue([
                {date: "2008-02-02", id: 1020, latitude: 116.224, longitude: 36.888},
                {date: "2009-04-04", id: 2244, latitude: 114.246, longitude: 28.448},
                {date: "2008-02-02", id: 1020, latitude: 118.123, longitude: 20.666},
                {date: "2008-02-02", id: 1020, latitude: 120.456, longitude: 24.222},
            ]),
        },
        trajectoriesLocation:{
            findMany: jest.fn().mockResolvedValue([
                {
                    "taxiId": 7249,
                    "plate": "CNCJ-2997",
                    "date": "2008-02-08T17:36:33.000Z",
                    "latitude": 116.291,
                    "longitude": 39.88672
                },
                {
                    "taxiId": 10133,
                    "plate": "PAOF-6727",
                    "date": "2008-02-08T16:07:16.000Z",
                    "latitude": 116.11806,
                    "longitude": 39.72814
                },
                {
                    "taxiId": 7956,
                    "plate": "CCKF-1601",
                    "date": "2008-02-08T15:34:38.000Z",
                    "latitude": 117.12528,
                    "longitude": 40.14692
                }
            ]),
        }
    };
    return {
        PrismaClient: jest.fn(()=> mockTaxis)
    };
});

const mockPrisma = new PrismaClient();

describe('GET /trajectories/:taxiId', ()=>{
    it('Deberia regresar las trajectorias por taxiId, date y paginadas', async()=>{
        const page=0;
        const taxi_id= 1020 as any;
        const parsedDate = "2008-02-02";
        const nextDay = "2008-02-02";

        const resp= await getAllTrajectories(taxi_id, page, parsedDate, nextDay);
        expect([resp[0], resp[2], resp[3]]).toEqual([
            {id: 1020, date: "2008-02-02", latitude: 116.224, longitude: 36.888},
            {id: 1020, date: "2008-02-02", latitude: 118.123, longitude: 20.666},
            {id: 1020, date: "2008-02-02", latitude: 120.456, longitude: 24.222},
        ])
    })
})

/*describe('GET /trajectories/search/lastest', ()=>{
    it('Deberia regresar la ultima trajectoria del taxi con las propiedades por taxiId, date, longitude, plate, latitude', async()=>{
      
        const resp= await getLastTrajectories();
        console.log('esta es la respuesta del test', resp)
        expect(resp).toEqual([
            {
                "plate": "CNCJ-2997",
                
            },
            {
                "plate": "PAOF-6727",
                
            },
            {
                "plate": "CCKF-1601",

            }
            
        ])
    })
})*/



