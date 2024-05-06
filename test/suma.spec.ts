import  request from "supertest";
import app from "../src/app";

describe ('Probando mi crud GET', ()=>{
    it ('Obtener el listado de taxis', async()=>{
        const response= await request(app).get('/taxis');
        expect(response.status).toBe(200)
    })
}) 