import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonQuery from './components/PokemonQueryContainer/PokemonQuery';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './client';
import Counter from './components/Counter/Counter';

const App: React.FC = () => {

  console.log()


  // client
  // .query({
  //   query: gql`
  //     {
  //       rates(currency: "USD") {
  //         currency
  //       }
  //     }
  //   `
  // })
  // .then(result => console.log(result));


  return (<ApolloProvider client={client}>

    <div className="App">
      <Counter/>
      <PokemonQuery />
      {/* <ClassPokemonQuery></ClassPokemonQuery> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </ApolloProvider>
  );
}

export default App;
