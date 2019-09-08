import { Arg, Query, Resolver } from "type-graphql";
import Pokemon from "../schemas/Pokemon";
import { RESTDataSource } from 'apollo-datasource-rest';
import axios from 'axios';

interface IPokeMonAPIReturnObj {
    pokeDexID: string;
    type: string
    spriteURL: string;
    speciesName: string;
}

class PokemonAPI {
    // constructor() {
    //     super();
    //     console.log("CONSTRUCTOR RAN FOR POKEMON API" + this.get)
    //     this.baseURL = 'https://pokeapi.co/api/v2/'
    // }

    didReceiveResponse(response: any) {
        return response
    }

    async getPokemonDetails(name: string) {
        const queryString = 'https://pokeapi.co/api/v2/pokemon/' + name;
        console.log(queryString);
        try {
            console.log("WE STARTED THE REQUEST TRY BODY with string " + queryString + ' with env ' + process.env.http_proxy )
            const response = await axios.get(queryString);
            const res = await response.data;

            console.log("WE MADE IT TO A RESULT OF SOME KIND! >>>>>" + res + "<<<<<");

            const result: any = {
                pokeDexID: res.order,
                type: res.types[0],
                spriteURL: res.sprites.front_default,
                speciesName: res.species.name
            }
            console.log(result)

            return result;

        } catch (e) {
            console.log("ERROR IN POKEMON DATASOURCE API with name " + name + ' and ERROR >>>>> ' + e);
            console.log("String queried: " + queryString)
        }
    }
}

@Resolver(of => Pokemon)
export default class PokemonResolver {

    private PokemonAPIInst = new PokemonAPI();

    @Query(returns => Pokemon, { nullable: true })
    getPokemonByName(@Arg("name") name: string) {
        console.log("WE MADE IT TO THE GETPOKEMONBYNAMERESOLVER")
        return this.PokemonAPIInst.getPokemonDetails(name);
    }

    @Query(returns => Pokemon)
    getCharizard() {
        console.log("CHARIZARD RESOLVER INVOKED");
        return this.PokemonAPIInst.getPokemonDetails("charizard");
    }
}