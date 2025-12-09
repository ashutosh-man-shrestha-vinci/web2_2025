import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import  MovieList  from './components/MovieList'
import  Cinema  from './components/Cinema/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinema",
        element: <Cinema />,
      },
      {
        path: "movie-list",
        element: <MovieList />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router}/>      
  </StrictMode>,
)
