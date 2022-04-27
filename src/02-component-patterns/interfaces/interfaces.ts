import { CSSProperties, ReactElement } from 'react';
import { increasedBy } from '../types/types';

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: increasedBy;
    product: Product;
    maxCount?: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface ProductCardProps {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export interface ProductButtonsProps {
    className?: string;
    style?: CSSProperties;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}