import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';
import RecommendedHeadline from './RecommendedHeadline/RecommendedHeadline';
import RecommendedCards from './RecommendedCards/RecommendedCards';

export default function RecommendedContainer() {

    return (
        <section className={`${style.recommended} ${grids["container"]}`}>
            <RecommendedHeadline />
            <RecommendedCards />
        </section>
    );
}
