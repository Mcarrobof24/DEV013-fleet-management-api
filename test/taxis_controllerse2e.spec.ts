import  request from "supertest";
import app from "../src/app";


describe ('GET /taxis', ()=>{
    it ('Obtener el listado de taxis', async()=>{
        const response= await request(app).get('/taxis');
        expect(response.status).toBe(200)
        expect(response.body.data.length > 0).toBe(true)
    })
    it ('Verificar que el response es un array', async()=>{
        const response= await request(app).get('/taxis');
        expect(Array.isArray(response.body.data)).toBe(true)
    })
    it ('Verificar si el response nos da un array 10 elementos por default', async()=>{
        const response= await request(app).get('/taxis');
        expect(response.body.data).toHaveLength(10)
    })
    it ('Verificar si cada elemento del response es un objeto que tiene la propiedad ID', async()=>{
        const response= await request(app).get('/taxis');
        expect(typeof response.body.data[0]).toBe('object')
        expect(response.body.data[0]).toHaveProperty('id')
        expect(typeof response.body.data[0].id).toBe('number')
    })
    it ('Verificar si cada elemento del response es un objeto que tiene la propiedad plate', async()=>{
        const response= await request(app).get('/taxis');
        expect(typeof response.body.data[0]).toBe('object')
        expect(response.body.data[0]).toHaveProperty('plate')
        expect(typeof response.body.data[0].plate).toBe('string')
    })
    it ('Deberia responder status code 404 cuando la URL es erronea', async()=>{
        const response= await request(app).get('/taxi');
        expect(response.status).toBe(404)
    })
    
}) 