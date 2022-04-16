import { CSSProperties, ReactElement } from 'react';
import { increasedBy } from '../types/types';

export interface ProductContextProps {
    counter: number;
    increaseBy: increasedBy;
    product: Product;
}

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
}

export interface Product {
    id: string;
    title: string;
    img?: string;
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