import  request from "supertest";
import app from "../src/app";


describe ('GET /trajectories/:taxiId', ()=>{
    const taxiId = '6418';
    it ('Obtener el listado de trajectorias de acuerdo ID', async()=>{   
        const response= await request(app).get(`/trajectories/${taxiId}?page=6&date=2008-02-02`);
        expect(response.status).toBe(200)
        expect(response.body.data.length > 0).toBe(true)
    })
    it ('Verificar que el response es un array', async()=>{
        const response= await request(app).get(`/trajectories/${taxiId}?page=6&date=2008-02-02`);
        expect(Array.isArray(response.body.data)).toBe(true)
    })
    it ('Verificar si el response nos da un array 10 elementos por default', async()=>{
        const response= await request(app).get(`/trajectories/${taxiId}?page=6&date=2008-02-02`);
        expect(response.body.data).toHaveLength(10)
    })
    it ('Verificar si cada elemento del response es un objeto que tiene la propiedad latitude', async()=>{
        const response= await request(app).get(`/trajectories/${taxiId}?page=6&date=2008-02-02`);
        expect(typeof response.body.data[0]).toBe('object')
        expect(response.body.data[0]).toHaveProperty('latitude')
        expect(typeof response.body.data[0].latitude).toBe('number')
    })
    it ('Verificar si cada elemento del response es un objeto que tiene la propiedad longitude', async()=>{
        const response= await request(app).get(`/trajectories/${taxiId}?page=6&date=2008-02-02`);
        expect(typeof response.body.data[0]).toBe('object')
        expect(response.body.data[0]).toHaveProperty('longitude')
        expect(typeof response.body.data[0].longitude).toBe('number')
    })
    it ('Deberia responder status code 404 cuando la URL es erronea', async()=>{
        const response= await request(app).get('/trajectorie');
        expect(response.status).toBe(404)
    })
    
})

describe ('GET /trajectories/search/lastest', ()=>{
   
    it ('Obtener el listado de trajectorias de acuerdo ID', async()=>{   
        const response= await request(app).get(`/trajectories/search/lastest`);
        expect(response.status).toBe(200)
        expect(response.body.data.length > 0).toBe(true)
    })
    it ('Verificar que el response es un array', async()=>{
        const response= await request(app).get(`/trajectories/search/lastest`);
        expect(Array.isArray(response.body.data)).toBe(true)
    })
    it ('Verificar si el response nos da un array 10 elementos por default', async()=>{
        const response= await request(app).get(`/trajectories/search/lastest`);
        expect(response.body.data).toHaveLength(10)
    })
    it ('Verificar si cada elemento del response es un objeto que tiene la propiedad latitude', async()=>{
        const response= await request(app).get(`/trajectories/search/lastest`);
        expect(typeof response.body.data[0]).toBe('object')
        expect(response.body.data[0]).toHaveProperty('latitude')
        expect(typeof response.body.data[0].latitude).toBe('number')
    })
    it ('Verificar si cada elemento del response es un objeto que tiene la propiedad plate', async()=>{
        const response= await request(app).get(`/trajectories/search/lastest`);
        expect(typeof response.body.data[0]).toBe('object')
        expect(response.body.data[0]).toHaveProperty('plate')
        expect(typeof response.body.data[0].plate).toBe('string')
    })
    it ('Deberia responder status code 404 cuando la URL es erronea', async()=>{
        const response= await request(app).get('/trajectorie');
        expect(response.status).toBe(404)
    })
    
})