import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieList from './components/MovieList'
import SongList from './components/SongList'
import { reset } from './store'

function App() {
  const dispatch = useDispatch()
  const handleReset = () => {
    dispatch(reset())
    // dispatch(resetSong())
  }
  return (
    <>
      <button onClick={handleReset}>Reset both Playlist</button>
      <MovieList/>
      <SongList/>
    </>
  )
}

export default App




// import { useState, useEffect, useRef, useCallback } from 'react'
// import Child from './components/Child';
// function App() {
//   const [count, setCount] = useState(0)
//   const [click, setClick] = useState(0)

//   const handleClick = useCallback(() => {
//     console.log("Inside handle click")
//     setClick(prev => prev + 1)
//   },[])

//   return (
//     <>
//       <p>parent COUNT - {count}</p>
//       <button onClick={() => setCount((c) => c+1)}>Add +</button>
//       {/* <p>Total click - {click}</p> */}
//       {/* <button onClick={handleClick}>Click Me</button>       */}
//       <Child onClick={handleClick} />
//     </>
//   )
// }

// export default App
