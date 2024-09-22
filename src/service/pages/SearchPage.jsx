import { useEffect } from "react";
import { NavBar } from "../../ui";
import { LoadingMessage, ProductList } from "../components";
import { useFetch } from "../../hooks";
import { useProductContext } from "../../context";

export const SearchPage = () => {
  const { results, setResults, query } = useProductContext();
  const url = `https://api.mercadolibre.com/sites/MLM/search?q=${query}&limit=50`;
  // const url = `https://api.mercadolibre.com/sites/MLM/search?q=${query}&limit=50&sort=price_asc`;
  
  const { data, isLoading, hasError } = useFetch(query ? url : null);

  useEffect(() => {
    if (data) {
      setResults(data.results);
    }
  }, [data, setResults]);

  return (
    <>
      <NavBar />
      
      {isLoading ? (
        <LoadingMessage />
      ) : hasError ? (
        <p>Error al cargar los productos.</p>
      ) : (
        <ProductList results={results} />
      )}
    </>
  );
};
