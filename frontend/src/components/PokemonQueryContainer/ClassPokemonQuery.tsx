import React from 'react';
import {Query} from 'react-apollo';
import { CHARIZARD_QUERY } from '../../data/pokemonQueries';

class ClassPokemonQuery extends React.Component {
    render() {
      return (
        <Query query={CHARIZARD_QUERY}>
          {({ loading, error, data }: any) => {
            if (loading) return <div>Class component Fetching</div>
            if (error) return <div>Class component Error</div>
      
            return (
              <div>
                  {data.pokeDexID}
              </div>
            )
          }}
        </Query>
      )
    }
  }
export default ClassPokemonQuery;