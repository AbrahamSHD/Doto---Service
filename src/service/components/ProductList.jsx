import { ProductCard } from "./ProductCard"

export const ProductList = ({ results = [] }) => {
  return (
    <main>
      {
        results.map(product => (
            <ProductCard key={product.id} product={product} />
          )
        )
      }
    </main>
  )
}
