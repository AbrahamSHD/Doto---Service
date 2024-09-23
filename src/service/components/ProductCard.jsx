import { Link } from 'react-router-dom';
import './ProductCard.css'

export const ProductCard = ({ product = {} }) => {

  const { attributes = [] } = product;
  const brandAttribute = attributes.find(attr => attr.name === 'Marca');
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',  
    currency: 'MXN',
  }).format(product.price);

  return (
    <div className="products-container">
      <div className="product-card" key={ product.id }>
        <div className="product-image">
          <img src={ product.thumbnail } alt={ product.title } />
        </div>
        <div className="product-details">
          <h3>
          <Link
            to={ `/product/${ product.id }` }
          >
              { product.title }
            </Link>
          </h3>
          <a href=''></a>
          <p>
            <strong>Seller:</strong> { product.seller.nickname } - { product.seller.id }
          </p>
          <p>
            { brandAttribute ? brandAttribute.value_name : 'No disponible'  }
          </p>
          <p>
            <strong>{ product.shipping.free_shipping ? 'Envío Gratis' : '' }</strong>
          </p>
          <p>
            <strong>Tipo de Logística:</strong> { product.shipping.logistic_type || 'No disponible' }
          </p>
          <p>
            <strong>Lugar de operación del Seller: </strong> 
            { product.seller.address ? product.seller.address.city : 'No disponible' }
          </p>
          <p>
            <strong>Condición del artículo:</strong> { product.condition === 'new' ?'Nuevo' : 'Usado' }
          </p>
          <p>
            <strong>Precio de venta:</strong> { formattedPrice }
          </p>
          </div>
        </div>
    </div>
  );
};
