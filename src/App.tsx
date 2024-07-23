import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Search } from './pages/Search'
import { InfiniteScroll } from './pages/InfiniteScroll'
import { GridLight } from './pages/GridLight'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/infinite-scroll' element={<InfiniteScroll/>}></Route>
          <Route path='/grid-light' element={<GridLight/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
