import { useState, useEffect, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState(initialValues?.count || value);
    let isMounted = useRef(false)

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    const increaseBy = (value: number) => {
        let newValueIncreased = Math.max(counter + value, 0)

        if (initialValues?.maxCount) {
            newValueIncreased = Math.min(newValueIncreased, initialValues.maxCount)
        }

        setCounter(newValueIncreased);
        onChange && onChange({ count: newValueIncreased, product });
    }

    const reset = () => setCounter(initialValues?.count || value);


    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}

export default useProduct;