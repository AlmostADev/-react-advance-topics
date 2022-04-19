import { useShoppingCart } from '../hooks/useShoppingCart';
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map(product => (
          <ProductCard
            className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            className="bg-dark text-white"
            key={key}
            onChange={onProductCountChange}
            product={product}
            style={{ width: '100px' }}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
        
      </div>
    </div>
  );
};

export default ShoppingPage;
