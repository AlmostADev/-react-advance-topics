import { ReactElement } from 'react';
import { increasedBy } from '../types/types';

export interface ProductContextProps {
    counter: number;
    increaseBy: increasedBy;
    product: Product;
}

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[]
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductImageProps {
    img?: string;
}

export interface ProductTitleProps {
    title?: string;
}

export interface ProductCardHOCProps {
    ({ children, product}: ProductCardProps): JSX.Element,
    Title: ({ title }: ProductTitleProps) => JSX.Element,
    Image: ({ img }: ProductImageProps) => JSX.Element,
    Buttons: () => JSX.Element
}