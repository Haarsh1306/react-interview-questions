import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Search } from './pages/Search'
import { InfiniteScroll } from './pages/InfiniteScroll'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/infinite-scroll' element={<InfiniteScroll/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
