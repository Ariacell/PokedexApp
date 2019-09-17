import {ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

export const client = new ApolloClient({
    // uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: 'http://localhost:5000/graphql'})
});

// import ApolloClient from 'apollo-boost';

// export const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
// });