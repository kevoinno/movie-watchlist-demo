import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from "./components/MovieCard";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>🎬 My Movie Watchlist</h1>
        <MovieCard name = "Wicked" genre = "Musical"/>
        <MovieCard name = "Iron Man" genre = "Action"/>
      </div>
    </>
  )
}

export default App
