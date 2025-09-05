import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { SearchMoviePage } from "./Pages/SearchMoviePage/SearchMoviePage"
import './App.css';

function App() {

  const router = createBrowserRouter([
    {path:'/', element:<SearchMoviePage />}
  ])


  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
