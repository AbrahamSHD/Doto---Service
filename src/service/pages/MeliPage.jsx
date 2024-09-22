import { useFetch } from "../../hooks"
import { NavBar } from "../../ui"
import { LoadingMessage, ProductCard } from "../components"


export const MeliPage = () => {

  const url = 'https://api.mercadolibre.com/sites/MLM/search?q=Telefono%20G6'

  const { data, isLoading } = useFetch( `${ url }` )

  return (
    <>
      {/* <h1>MeliPage</h1> */}
      <NavBar />
      <hr />
                                                                
      {
        isLoading
        ? <LoadingMessage />
        : (
          <ProductCard 
            results={ data.results }
          />
        )
      }
    </>
  )
}

