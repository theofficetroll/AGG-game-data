import React, { useState, useEffect } from 'react';
import Results from './results.jsx';

const App = (props) => {
  let [ input, setInput ] = useState('azul');
  let [ query, setQuery ] = useState(`https://www.boardgamegeek.com/xmlapi2/search?query=${input}`);
  let [ records, setRecords ] = useState([]);

  useEffect(() => {
    async function fetchGames () {
      const resp = await fetch(query);
      console.log('response from BGG', resp);
      // const xml = await resp.data();

      // setRecords(xml.results);
    }
    fetchGames();
  }, [query]);

  return(
    <div>
      <div className="searchBar">
        <form onSubmit={() => setQuery(`https://www.boardgamegeek.com/xmlapi2/search?query=${input}`)}>
          <input
            label="Name"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </form>
      </div>
      <Results data={records} />
    </div>
  )
}

export default App;
