import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { SearchMoviePage } from "./Pages/SearchMoviePage/SearchMoviePage"
import './App.css';
import { MovieInfoPage } from "./Pages/MovieInfoPage/MovieInfoPage";

function App() {

  const router = createBrowserRouter([
    {path:'/', element:<SearchMoviePage />},
    {path:'/movie/:search', element:<MovieInfoPage />}
  ])


  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
