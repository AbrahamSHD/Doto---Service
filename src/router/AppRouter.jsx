import { Route, Routes } from "react-router"
import { SearchPage } from "../service/pages/SearchPage"


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
        
      </Routes>
    </>
  )
}

