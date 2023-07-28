import CollectionsCards from './CollectionsCards/CollectionsCards';
import CollectionsHeadline from './CollectionsHeadline/CollectionsHeadline';
import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';

export default function CollectionsContainer() {

    return (
        <section className={`${style.categories} ${grids["container"]}`}>
            <CollectionsHeadline />
            <CollectionsCards />
        </section>
    );
}
