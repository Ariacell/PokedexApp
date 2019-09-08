import gql from 'graphql-tag';

// export const POKEMON_BY_NAME_QUERY = gql`
//     query GetPokemonByName($name: String!) {
//       getPokemonByName (name: $name) {
//       {
//         pokeDexID
//         type
//         spriteURL
//       }
//     }
//   }
// `;

export const CHARIZARD_QUERY = gql`
{
    getCharizard {
      pokeDexID
      spriteURL
    }
}`;

// onst ListCalculations = gql`
//     query ListCalculations($uid: String!){
//         listCalculations(uid: $uid){
//             details {
//                 customer
//                 part
//             }
//             selectedUnit {
//                 imgSrc
//             }
//         }
//     }
// `;