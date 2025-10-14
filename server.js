import fastify  from "fastify";                                 
import { DatabasePostgres } from "./databasePostgres.js";
import cors from "@fastify/cors";                                 
import fastifyStatic from "@fastify/static";
import { fileURLToPath } from "url";
import { dirname, join } from "path";



