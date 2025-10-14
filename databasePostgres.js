import { randomUUID } from "node:crypto";
import { sql } from './sql.js';

export class DatabasePostgres{
    async list(search){
        let result;

        if(search){
            result =  await sql`SELECT * FROM videos WHERE title ILIKE ${'%' + search + '%'}`;
        }else{
            result = await sql`SELECT * FROM videos`; 
        }
    //garante que sempre retorne um array 
        return Array.isArray(result) ? result : result.rows || [];
    }

    async create(video){
        const videoId = randomUUID();
        const { title, description, duration } = video;

        await sql``
    }


}