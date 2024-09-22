
export const ProductPage = ({ product }) => {
  // Formatear el precio
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(product.price);

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p><strong>Meli ID:</strong> {product.id}</p>
      <p><strong>Site ID:</strong> {product.site_id}</p>
      <p><strong>Título de la publicación:</strong> {product.title}</p>
      <p><strong>Seller ID:</strong> {product.seller.id}</p>
      <p><strong>Seller Name:</strong> {product.seller.nickname}</p>
      <p><strong>Precio de Venta:</strong> {formattedPrice}</p>
      <p><strong>Cantidad Disponible:</strong> {product.available_quantity}</p>
      <p><strong>Link de la publicación:</strong> <a href={product.permalink} target="_blank" rel="noopener noreferrer">Ver producto</a></p>
      <p><strong>Dirección del Seller:</strong> (No disponible en los datos proporcionados)</p>
      <p><strong>Envio Gratis:</strong> {product.shipping.free_shipping ? 'Sí' : 'No'}</p>
      <p><strong>Tipo de Logística:</strong> {product.shipping.logistic_type}</p>
      <h4>Atributos:</h4>
      <ul>
        {product.attributes.map((attribute) => (
          <li key={attribute.id}>
            <strong>{attribute.name}:</strong> {attribute.value_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
