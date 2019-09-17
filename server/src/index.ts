import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import ProjectResolver from './resolvers/ProjectResolver';
import TaskResolver from './resolvers/TaskResolver';
import { printSchema } from 'graphql';
import { PokemonAPI } from './datasources/pokemon-api';
import PokemonResolver from './resolvers/PokemonResolver';
import cors from 'cors';
import bodyParser = require('body-parser');




async function bootstrap() {

    const host = '0.0.0.0';
    const port = 5000;
    const graphqlPath = '/graphql'

    const app = express();
    console.log("THIS IS A LIVE UPDATE")

    // var allowCrossDomain = function(req: any, res: any, next: any) {
    //     res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //     res.header('Access-Control-Allow-Headers', 'Content-Type');
    //     next();
    // }


    // app.use(allowCrossDomain);
    
    const schema = await buildSchema({
        resolvers:[ProjectResolver, TaskResolver, PokemonResolver],
        emitSchemaFile: true,
    });

    const corsOptions = {
        origin: "http://localhost:3000",
        credentials: true
      };
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    const server = new ApolloServer({
        schema,
        playground: true,
        dataSources: () => {
           return {
            pokemonAPI: new PokemonAPI()
           };
        },
        

    });

    
    server.applyMiddleware({app, path: graphqlPath})
    console.log('THE SCHEMA GENERATED LOOKS LIKE THIS: ' + printSchema(schema));
    // console.log("THAT WAS THE SCHEMA, AND THATS ALL FOLKS!")
    app.listen({host, port},() => {
        console.log(`Server is listening at https://localhost:${port}${server.graphqlPath}`);
    })
}

bootstrap();
