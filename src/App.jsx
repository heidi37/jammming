import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import Tracklist from './components/Tracklist'
import Track from './components/Track'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
      <button>Save to Spotify</button> <button>Search</button>
    </>
  )
}

export default App
