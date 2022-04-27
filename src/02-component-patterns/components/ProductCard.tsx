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
  value,
  initialValues
}: ProductCardProps) => {
  const { Provider } = ProductContext;
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          })
        }
      </div>
    </Provider>
  );
};

export default ProductCard;
