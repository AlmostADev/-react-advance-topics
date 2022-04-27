import { useCallback, useContext } from 'react';
import { ProductContext } from '../context/Contexts';
import { ProductButtonsProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { counter, maxCount, increaseBy } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => {
      return counter === maxCount ? true : false;
    },
    [counter, maxCount]
  )

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
