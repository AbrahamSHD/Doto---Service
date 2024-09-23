import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../context";
import { useFetch } from "../../hooks";
import { LoadingMessage, ProductList } from "../components";
import './TopProductsPage.css';

const sellerId = 527927603

export const TopProductsPage = () => {

  const url = `https://api.mercadolibre.com/sites/MLM/search?seller_id=${ sellerId }&sort=price_asc`

  const { topProducts, setTopProducts } = useProductContext();
  const { data, isLoading } = useFetch( url );

  const navigate = useNavigate();

  const onNavigateBack = () => {
      navigate( -1 )
  };

  useEffect(() => {
    if (data && data.results) {
      setTopProducts(data.results); 
    }
  }, [data, setTopProducts]);


  return (
    <div className="top-products">
    <div className="navbar">
      <h2>Top 1000 Artículos con Menor Precio</h2>
      <button 
        onClick={ onNavigateBack }
        className="navbar-button button-back"
      >
        Regresar
      </button>
    </div>

    {
      isLoading 
      ? (
        <LoadingMessage />
      ) 
      : (
        <div>
          <ProductList results={ topProducts } />
        </div>
      )
    }
  </div>
  );
};
  