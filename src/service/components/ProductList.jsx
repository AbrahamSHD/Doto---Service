import { ProductCard } from "./ProductCard"

export const ProductList = ({ results = [] }) => {
  return (
    <main className="product-card-container">
      {
        results.map(product => (
            <ProductCard key={product.id} product={product} />
          )
        )
      }
    </main>
  )
}
