import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { ProductDetails } from './pages/ProductDetails';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  
  const router = createBrowserRouter([
    {path: "",
      element: <Root/>,
      errorElement : <p>Erreur de chargement...</p>,
      children: [
        // Afficher les produits sur la page d'accueil
        { path: "", element: <HomePage /> },
        { path: "/produits", element: <ProductPage/> },
        { path: "/produits/:id", element: <ProductDetails /> },
        { path: "/cart", element: <CartPage/>},
        { path: "/connexion", element: <LoginPage/>},
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