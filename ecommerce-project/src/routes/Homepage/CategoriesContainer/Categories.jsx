import CategoriesHeadline from './CategoriesHeadline/CategoriesHeadline';
import CategoriesCards from './CategoriesCards/CategoriesCards';
import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';

export default function CategoriesContainer() {

    return (
        <section className={`${style.categories} ${grids["container"]}`}>
            <CategoriesHeadline />
            <CategoriesCards />
        </section>
    );
}