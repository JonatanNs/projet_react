import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';

function App() {
  
  const router = createBrowserRouter([
    {path: "",
      element: <Root/>,
      errorElement : <p>Erreur de chargement...</p>,
      children: [
        {path : "", element: <h1>Page d'accueil</h1> },
        {path : "/produits", element: <HomePage/> },
      ],
    },
  ]);
  
  function Root(){
    return(
      <>
        <NavBar/>
        <Outlet/>
      </>
    )
  }
  return <RouterProvider router={router} />;
}

export default App