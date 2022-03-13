import { ProductContext } from '../context/Contexts';
import { ProductCardProps } from '../interfaces/interfaces';

import useProduct from '../hooks/useProduct';
import styles from "../styles/styles.module.css";

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { Provider } = ProductContext;
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={styles.productCard}>
        { children }
      </div>
    </Provider>
  );
};

export default ProductCard;