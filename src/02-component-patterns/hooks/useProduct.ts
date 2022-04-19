import { useState, useEffect } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
        setCounter(value)
    }, [value])

    const increaseBy = (value: number) => {
        const newValueIncreased = Math.max(counter + value, 0)
        setCounter(newValueIncreased);

        onChange && onChange({ count: newValueIncreased, product });
    }

    return {
        counter,
        increaseBy
    }
}

export default useProduct;