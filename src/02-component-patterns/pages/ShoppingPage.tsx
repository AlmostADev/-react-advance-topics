import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

const ShoppingPage = () => {
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
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard className="bg-dark text-white" product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          className="bg-dark text-white"
          product={product}
          style={{ backgroundColor: '#70D1F8' }}
        >
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            className="custom-image"
          />
          <ProductTitle style={{ fontWeight: 'bold' }} className="text-bold" />
          <ProductButtons
            style={{ display: 'flex', justifyContent: 'flex-end' }}
            className="custom-buttons"
          />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
