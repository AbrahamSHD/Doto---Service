import { ProductProvider } from "./context"
import { AppRouter } from "./router/AppRouter"

export const MeliApp = () => {
  return (
    <>
      <ProductProvider>
        <AppRouter />
      </ProductProvider>
    </>
  )
}

