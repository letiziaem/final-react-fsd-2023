import style from './../style.module.scss';
import grids from '../../../../shared/grid.module.scss';
import typos from '../../../../shared/typography.module.scss'

export default function SeatingsHeadline() {

    return (
        <div className={`${grids["row"]}`}>
            <div className={`${style.seating__title} ${grids["col-lg-12"]}`}>
                <h2 className={`${style.seating__title__headline} ${typos["headline_2"]}`}>
                    All Seating
                </h2>
                <p className={`${style.seating__title__subtitle} ${typos["text"]}`}>The main feature of any living room is always going to be the seating. Pick and choose your seating styles to build the perfect place to relax. Unwind by yourself, spend time with your family, or entertain guests, all in ultimate comfort.</p>
            </div>
        </div>
    )
}