import { useState } from "react";
import { useProductContext } from "../../context";
import './NavBar.css';

export const NavBar = () => {

  const { setQuery } = useProductContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm); // Actualiza el query en el contexto
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <picture className="navbar-logo">
          <img className="logo" src="https://doto.vteximg.com.br/arquivos/asset-brand-doto.png" alt="Doto Logo" />
        </picture>
        <form className="navbar-search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="navbar-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="navbar-search-toggle">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
          
        </form>
      </div>
    </nav>
  );
};

