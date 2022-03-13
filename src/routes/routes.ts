//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent ;
    children?: Route[];
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LayoutComponent'));

export const routes: Route[] = [
    {
        path: '/lazyload',
        Component: LazyLayout,
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy Loading'
    }
]
/* export const routes: Route[] = [
    {
        path: '/lazy1',
        Component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        Component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/lazy3',
        Component: LazyPage3,
        name: 'LazyPage-3'
    },
] */