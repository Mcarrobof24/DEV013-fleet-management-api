import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const getAllTrajectories = async(taxi_id: string, page:number, parsedDate:string, nextDay: string): Promise<any> =>{
    const location = await prisma.trajectories.findMany({
        skip: (page-1) * 10,
        take: 10,
        where:{
            taxi_id: parseInt(taxi_id),
            date:{
                gte: parsedDate,
                lt: nextDay,
            }
        },
        select:{
            latitude: true,
            longitude: true,
            date: true,
            taxi_id: true,
        }
    });
    return location;
}