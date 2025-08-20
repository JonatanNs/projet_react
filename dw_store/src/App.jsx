import './App.css'
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar';

function App() {
  
  const router = createBrowserRouter([
    {path: "",
      element: <Root/>,
      errorElement : <p>Erreur de chargement...</p>,
      children: [
        {path : "", element: <h1>Page d'accueil</h1> },
        {path : "/produits", element: <h1>Mes produits</h1> },
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

/* return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="" element={<h1>Page d'accueil</h1>}></Route>
          <Route path="/produits" element={<h1>Mes produits</h1>} />
        </Routes>
      </BrowserRouter>
  ) */