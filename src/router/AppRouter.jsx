import { Route, Routes } from "react-router"
import { SearchPage } from "../service/pages/SearchPage"
import { ProductPage, TopProductsPage } from "../service"


export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route
          path="/*" 
          element={
            <SearchPage />
          }
        />

        <Route 
          path="/top-products"
          element={ <TopProductsPage /> }
        />

        <Route
          path="/product/:productId"
          element={ <ProductPage /> }
        />
        
      </Routes>
    </>
  )
}
