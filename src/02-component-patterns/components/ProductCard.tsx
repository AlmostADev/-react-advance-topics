import { ProductContext } from '../context/Contexts';
import { ProductCardProps } from '../interfaces/interfaces';

import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value
}: ProductCardProps) => {
  const { Provider } = ProductContext;
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
