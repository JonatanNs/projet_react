import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { ProductDetails } from './pages/ProductDetails';

function App() {
  
  const router = createBrowserRouter([
    {path: "",
      element: <Root/>,
      errorElement : <p>Erreur de chargement...</p>,
      children: [
        // Afficher les produits sur la page d'accueil
        { path: "", element: <HomePage /> },
        { path: "/produits", element: <h1>Mes produits</h1> },
        { path: "/produits/:id", element: <ProductDetails /> },
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