import { useEffect } from "react";
import { NavBar } from "../../ui";
import { LoadingMessage, ProductList } from "../components";
import { useFetch } from "../../hooks";
import { useProductContext } from "../../context";

export const SearchPage = () => {

  const { query, results, setResults } = useProductContext();
  const url = `https://api.mercadolibre.com/sites/MLM/search?category=MLM1055&q=${ query }&limit=50`;

  const { data, isLoading, hasError } = useFetch(query ? url : null);

  useEffect(() => {
    if (data) {
      setResults(data.results);
    }
  }, [data, setResults]);

  console.log({
    data
  })

  useEffect(() => {
    console.log("Query actual en SearchPage: ", query);
    console.log("Resultados en SearchPage: ", results);
  }, [query, results]);

  return (
    <>
      <NavBar />

      {isLoading ? (
        <LoadingMessage />
      ) : hasError 
        ? (
        <p>Error al cargar los productos.</p>
      ) : (
        <ProductList results={ results } />
      )}
    </>
  );
};
