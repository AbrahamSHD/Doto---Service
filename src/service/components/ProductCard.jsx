import './ProductCard.css'

export const ProductCard = ({ results = [] }) => {
  return (
    <div className="products-container">
      {results.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        results.map((product) => {
          const brandAttribute = product.attributes.find(attr => attr.name === 'Marca');
          const formattedPrice = new Intl.NumberFormat('es-MX', {
            style: 'currency',  
            currency: 'MXN',
          }).format(product.price);

          return (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={ product.thumbnail } alt={ product.title } />
              </div>
              <div className="product-details">
                <h3>Título: { product.title }</h3>
                <p><strong>Seller:</strong> { product.seller.nickname } - { product.seller.id }</p>
                <p><strong>{ brandAttribute ? brandAttribute.value_name : 'No disponible' }</strong></p>
                <p><strong>{ product.shipping.free_shipping ? 'Envió Gratis' : 'Sin Envió Gratis' }</strong></p>
                <p><strong>Tipo de Logística:</strong> { product.shipping.logistic_type }</p>
                <p><strong>Lugar de operación del Seller:</strong> (No disponible en los datos proporcionados)</p>
                <p><strong>Condición del artículo:</strong> { product.condition }</p>
                <p><strong>Rango de Precios:</strong> Desde: { formattedPrice }</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
