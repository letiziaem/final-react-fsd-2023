import style from './../style.module.scss';
import grids from './../../../../shared/grid.module.scss';
import typos from './../../../../shared/typography.module.scss'

export default function CarouselHeadline() {

    return (
        <div className={`${grids["row"]}`}>
            <div className={`${grids["col-lg-12"]}`}>
                <h2 className={`${style.carousel__title} ${typos["headline"]}`}>
                Shop these real-life spaces
                </h2>
            </div>
        </div> 
    )
}