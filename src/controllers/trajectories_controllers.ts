import { Handler } from "express"
import { PrismaClient } from '@prisma/client'
import { isNull } from "util";

const prisma = new PrismaClient()


export const getLocationById: Handler = async(req, res) => {
     

    try{
        // Obtener el número de página de la solicitud o usar 1 como predeterminado
        const page = parseInt(req.query.page as string) || 1; 
        
        // Tamaño de la página
        const pageSize = 10;
        const  taxiId = req.params.taxiId;
        const  date  = req.query.date as string;

        
        // Parsear la fecha de la consulta para asegurar que esté en el formato correcto
        const parsedDate = date ? new Date(date as string) : undefined;
        const nextDay = parsedDate ? new Date(parsedDate.getTime() + 24 * 60 * 60 * 1000) : undefined;

        const location = await prisma.trajectories.findMany({
            select:{
                latitude: true,
                longitude: true,
                date: true,
                taxi_id: true,
                id: true
            },
            where: {
                taxi_id: taxiId ? parseInt(taxiId) : undefined,
                date: parsedDate ? {
                    gte: parsedDate,
                    lt: nextDay
                } : undefined

            },
            // Saltar los taxis anteriores a la página actual
            skip: (page - 1) * pageSize, 
            // Tomar solo el número especificado de taxis
            take: pageSize,
             
        })
        console.log(location);
        console.log(`page: ${page}`);        
        console.log(`Taxi ID: ${taxiId}`);
        console.log(`Date: ${date}`);
        console.log(`Parsed Date: ${parsedDate}`);
        console.log(`Next Day: ${nextDay}`);

        return res.status(200).json({data: location});
    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Error del servidor'});

    }
    
}

export const getLastLocation: Handler = async(req, res) => {
    try{
        const lastLocation = await prisma.taxis.findMany({
            select:{
                id: true,
                plate:true,
                trajectories:{
                    orderBy:{
                        date: 'desc',
                    },
                    take: 1,
                    select:{
                        taxi_id: true,
                        latitude: true,
                        longitude: true,
                        date: true
                    },
                },
            },  
        });
        

        const formattedTaxis = lastLocation.map((taxi) => {
            const lastTrajectory = taxi.trajectories[0];
            return lastTrajectory
              ? {
                  taxiId: lastTrajectory.taxi_id,
                  plate: taxi.plate,
                  date: lastTrajectory.date,
                  latitude: lastTrajectory.latitude,
                  longitude: lastTrajectory.longitude,
                }
              : null;
        });
        
        const arraySinNulls = formattedTaxis.filter((taxi) => taxi !== null);
        
        console.log('nukk', arraySinNulls);

        return res.status(200).json({data: arraySinNulls});

    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Error del servidor'})
    }

}