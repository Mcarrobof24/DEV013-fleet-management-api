import { Handler } from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//export const getTaxis: Handler = (req, res) => res.send('Hola Cami Arrobo')

export const getAllTaxis: Handler = async(req, res) => {
    // Obtener el número de página de la solicitud o usar 1 como predeterminado
    const page = parseInt(req.query.page as string) || 1; 
    // Tamaño de la página
    const pageSize = 10; 

    try{
        
        const taxis = await prisma.taxis.findMany({
            // Saltar los taxis anteriores a la página actual
            skip: (page - 1) * pageSize, 
            // Tomar solo el número especificado de taxis
            take: pageSize,   
            orderBy: {
                id: 'asc',
              },
        })
        //console.log(taxis);
        return res.status(200).json({data: taxis});
    } catch(error){
        //console.log(error);
        res.status(500).json({error: 'Error del servidor'});

    }
    
}