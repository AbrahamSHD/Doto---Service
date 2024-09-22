
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <picture className="navbar-logo">
          <img className="logo" src="https://doto.vteximg.com.br/arquivos/asset-brand-doto.png" alt="Doto Logo" />
        </picture>
        <div className="navbar-search">
          <input type="text" className="navbar-input" placeholder="Search..." />
          <button type="button" className="navbar-search-toggle">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
