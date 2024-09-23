import { useContext, useState } from "react";
import { ProductContext } from './productContext'

export const ProductProvider = ({ children }) => {
  
  const [query, setQuery] = useState("samsung");
  const [data, setData] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ 
      query, setQuery,
      data, setData, 
      isLoading, setIsLoading, 
      results, setResults,
      topProducts, setTopProducts,
    }}>
      { children }
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext( ProductContext );