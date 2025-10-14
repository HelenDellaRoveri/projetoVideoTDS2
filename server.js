import fastify  from "fastify";                                 
import { DatabasePostgres } from "./databasePostgres.js";
import cors from "@fastify/cors";                                 
import fastifyStatic from "@fastify/static";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = fastify();

//Serve arquivos estáticos da pasta 'public'
await server.register(fastifyStatic, { 
    root: join(__dirname, "public"),
    prefix: "/", //para acessar os arquivos
});

//configura CORS
await server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});

const database = new DatabasePostgres();
