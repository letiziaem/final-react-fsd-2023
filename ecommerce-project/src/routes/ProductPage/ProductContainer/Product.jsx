import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';
import ProductHeadline from './ProductHeadline/ProductHeadline';
import ProductInformations from './ProductInformations/ProductInformations';



export default function ProductContainer() {

    return (
        <section className={`${style.product} ${grids["container"]}`}>
            <ProductHeadline />
            <ProductInformations />
        </section>
    );
}
