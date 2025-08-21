import { HeaderItem } from "./HeaderItem";

export const NavBar = () => {
  return (
    <header className="navbar px-5 shadow-lg navbar bg-primary text-primary-content">
      <nav className="w-full">
        <div className="m-auto w-fit">
          <ul className="flex items-center gap-10">
            <li>
                <HeaderItem href="/">Accueil</HeaderItem>
            </li>
            <li>
                <HeaderItem href="/produits">Produits</HeaderItem>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}