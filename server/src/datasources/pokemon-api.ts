import {RESTDataSource} from 'apollo-datasource-rest';
import { type } from 'os';

interface IPokeMonAPIReturnObj {
    pokeDexID: number;
    type: string
    spriteURL: string;
    speciesName: string;
}

export class PokemonAPI extends RESTDataSource {
    async getPokemonDetails(name : string) {
        try {
            const response = await this.get(`https://pokeapi.co.api/v2/pokemon/${name}`);
            const res = await response.json();

            const result: IPokeMonAPIReturnObj = {
                pokeDexID: res.order,
                type: res.types[0],
                spriteURL: res.sprites.front_default,
                speciesName: res.species.name
            }

        } catch (e) {
            console.log("ERROR IN POKEMON DATASOURCE API");
        }
    }
}