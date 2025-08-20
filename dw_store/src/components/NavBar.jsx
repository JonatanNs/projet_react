import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="navbar px-5 shadow-lg navbar bg-primary txt-primary-content">
      <nav className="w-full">
        <div className="m-auto w-fit">
          <ul className="flex items-center gap-10">
            <li>
                <Link to="">Accueil</Link>
            </li>
            <li>
                <Link to="/produits">Produits</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}