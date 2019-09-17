import React from 'react';
import { CHARIZARD_QUERY } from '../../data/pokemonQueries';
import { useQuery } from '@apollo/react-hooks';

interface IPokemonQueryProps {
}

const PokemonQuery: React.FC<IPokemonQueryProps> = (props) => {

    console.log()
    const { loading, error, data, refetch, networkStatus } = useQuery(CHARIZARD_QUERY);

    if (loading) {
      console.log(loading)
      return <p> Loading... {networkStatus}<button onClick={() => refetch()}>REFETCH</button></p>;
    }
    if (error) {
      // console.log(error.message + error.stack)
      return <p> Error...</p>;
    }

    const result = data.getCharizard;

    

    return (
        <div>
          HERE IS SOME INFO ON THE POKEMON:<br/>
            PokeDex Index: {result.pokeDexID}<br/>
            <img src={result.spriteURL} alt="CHARIZARD"></img>
        </div>

    );
}
export default PokemonQuery;
