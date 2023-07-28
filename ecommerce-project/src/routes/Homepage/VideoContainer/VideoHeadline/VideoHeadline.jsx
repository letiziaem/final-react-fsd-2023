import style from './../style.module.scss';
import grids from './../../../../shared/grid.module.scss';
import typos from './../../../../shared/typography.module.scss'

export default function VideoHeadline() {

    return (
        <div className={`${grids["row"]}`}>
            <div className={`${grids["col-lg-12"]}`}>
                <h2 className={`${style.video__title} ${typos["headline"]}`}>
                    Modular, easy-to-move design
                </h2>
            </div>
        </div> 
    )
}