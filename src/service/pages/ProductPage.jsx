import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import { LoadingMessage } from "../components";
import './ProductPage.css';

export const ProductPage = () => {

  const { productId } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
      navigate(-1)
  };

  const url = `https://api.mercadolibre.com/items/${ productId }`;
  const { data: product, isLoading, hasError, error } = useFetch( url );

  if (isLoading) {
    return <LoadingMessage />
  }

  if (hasError || !product) {
    return <Navigate to='/' />;
  }

  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format( product.price );

  // console.log({ product })

  return (
    <>
      <button
        onClick={ onNavigateBack }
        className="navbar-button button-back"
      >
        Regresar
      </button>
      <article className="product-details-container">
        <section className="product-details-page">
          <div className="product-details-image">
            <img src={ product.thumbnail } alt={ product.title } />
          </div>
          <section className="product-data" >
            <h2>Detalles del Producto - { product.title }</h2>
            <p><strong>Meli ID:</strong> { product.id }</p>
            <p><strong>Site ID:</strong> { product.site_id }</p>
            <p><strong>Seller ID:</strong> { product.seller_id }</p>
            <p><strong>{ formattedPrice }</strong></p>
            <p><strong>Cantidad Disponible:</strong> { product.available_quantity }</p>
            <p><strong>Link de la publicación: </strong> 
              <a href={ product.permalink } target="_blank" rel="noopener noreferrer">Ver producto</a>
            </p>
            <p><strong>Dirección del Seller:</strong> { product.seller_address.state.id } - { product.seller_address.city.name }</p>
            <p><strong>Envio Gratis:</strong> {product.shipping.free_shipping ? 'Sí' : 'No'}</p>
            <p><strong>Tipo de Logística:</strong> {product.shipping.logistic_type}</p>
          </section>
        </section>
        <section className="product-specs">
          <h4>Especificaciones:</h4>
            <table className="product-attributes">
              <thead>
                <tr>
                  <th>Atributo</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {product.attributes.map((attribute) => (
                  <tr key={attribute.id}>
                    <td>{attribute.name}</td>
                    <td>{attribute.value_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </section>
      </article>
    </>

  );
};
