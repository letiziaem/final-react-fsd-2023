import style from './../style.module.scss';
import grids from './../../../../shared/grid.module.scss';
import typos from './../../../../shared/typography.module.scss'

export default function CollectionsHeadline() {

    return (
        <div className={`${grids["row"]}`}>
            <div className={`${grids["col-lg-12"]}`}>
                <h2 className={`${style.categories__title} ${typos["headline"]}`}>
                    Clever designs, delivered free
                </h2>
            </div>
        </div> 
    )
}