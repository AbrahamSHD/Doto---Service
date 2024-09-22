import { Route, Routes } from "react-router"
import { MeliPage } from "../service"


export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route
          path="/*" 
          element={
            <MeliPage />
          }
        />
        
      </Routes>
    </>
  )
}

