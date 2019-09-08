import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import ProjectResolver from './resolvers/ProjectResolver';
import TaskResolver from './resolvers/TaskResolver';
import { printSchema } from 'graphql';
import { PokemonAPI } from './datasources/pokemon-api';
import PokemonResolver from './resolvers/PokemonResolver';



async function bootstrap() {

    const host = '0.0.0.0';
    const port = 5000;

    const app = express();

    const schema = await buildSchema({
        resolvers:[ProjectResolver, TaskResolver, PokemonResolver],
        emitSchemaFile: true,
    });

    const server = new ApolloServer({
        schema,
        playground: true,
        dataSources: () => {
           return {
            pokemonAPI: new PokemonAPI()
           };
        },

    });

    server.applyMiddleware({app})
    console.log('THE SCHEMA GENERATED LOOKS LIKE THIS: ' + printSchema(schema));

    app.listen({host, port},() => {
        console.log('Server is listening at https://localhost:' + port);
    })
}

bootstrap();
