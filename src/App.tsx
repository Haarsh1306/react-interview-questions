import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Search } from './pages/Search'
import { InfiniteScroll } from './pages/InfiniteScroll'
import { GridLight } from './pages/GridLight'
import { DragNotes } from './pages/DragNotes'
import { Stepper } from './pages/Stepper'
import { PasswordGenerator } from './pages/PasswordGenerator'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/infinite-scroll' element={<InfiniteScroll/>}></Route>
          <Route path='/grid-light' element={<GridLight/>}></Route>
          <Route path='/drag-notes' element={<DragNotes/>}></Route>
          <Route path='/stepper' element={<Stepper/>}></Route>
          <Route path='/password-generator' element={<PasswordGenerator/>}></Route>


        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
