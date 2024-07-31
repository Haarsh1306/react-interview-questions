import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Search } from "../pages/Search"
import { InfiniteScroll } from "../pages/InfiniteScroll"
import { GridLight } from "../pages/GridLight"
import { DragNotes } from "../pages/DragNotes"
import { Stepper } from "../pages/Stepper"
import { PasswordGenerator } from "../pages/PasswordGenerator"
import { Error } from "../pages/Error"
import { Quiz } from "../pages/Quiz"

export const AppRoute = () =>{
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/infinite-scroll" element={<InfiniteScroll />}></Route>
          <Route path="/grid-light" element={<GridLight />}></Route>
          <Route path="/drag-notes" element={<DragNotes />}></Route>
          <Route path="/stepper" element={<Stepper />}></Route>
          <Route
            path="/password-generator"
            element={<PasswordGenerator />}
          ></Route>
          <Route
            path="/password-generator"
            element={<PasswordGenerator />}
          ></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    )
}