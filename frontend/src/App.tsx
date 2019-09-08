import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CHARIZARD_QUERY} from './data/pokemonQueries';
import { useQuery } from '@apollo/react-hooks'

const App: React.FC = () => {

  console.log()
  const { loading, error, data } = useQuery(CHARIZARD_QUERY);

  if (loading) {
    console.log()
    return <p> Loading...</p>;
  }
  if (error) {
    // console.log(error.message + error.stack)
    return <p> Error...</p>;
  }

  

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{data.pokeDexID}</p>
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
  );
}

export default App;
