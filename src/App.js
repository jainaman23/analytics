import { useEffect } from 'react'
import Analytics from './analytics'
import CharactersListing from './components/CharactersListing';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  useEffect(() => {
    Analytics.send("Characters App Loaded")
  }, [])

  return (
    <div className="App">
      <Typography gutterBottom variant="h1" component="div">
          Characters List
        </Typography>
      <CharactersListing />
    </div>
  );
}

export default App;
