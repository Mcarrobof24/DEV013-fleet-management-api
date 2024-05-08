import { Handler } from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const getLocationById: Handler = async(req, res) => {
     // Obtener el número de página de la solicitud o usar 1 como predeterminado
     const page = parseInt(req.query.page as string) || 1; 
     // Tamaño de la página
     const pageSize = 10;

    try{
        const { taxiId } = req.query;
        const location = await prisma.trajectories.findMany({
            select:{
                latitude: true,
                longitude: true,
                date: true,
                taxi_id: true
            },
            where: {
                taxi_id: taxiId ? parseInt(taxiId as string) : undefined
            },
             // Saltar los taxis anteriores a la página actual
             skip: (page - 1) * pageSize, 
             // Tomar solo el número especificado de taxis
             take: pageSize,
             
        })
        console.log(location);
        return res.status(200).json({data: location});
    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Error del servidor'});

    }
    
}