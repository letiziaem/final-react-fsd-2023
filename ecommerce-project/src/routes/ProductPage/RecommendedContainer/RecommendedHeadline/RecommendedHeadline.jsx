import style from './../style.module.scss';
import grids from '../../../../shared/grid.module.scss';
import typos from '../../../../shared/typography.module.scss'

export default function RecommendedHeadline() {

    return (
        <div className={`${grids["row"]}`}>
            <div className={`${grids["col-lg-12"]}`}>
                <h2 className={`${style.recommended__title} ${typos["headline"]}`}>
                    Here's what else our designers recommend
                </h2>
            </div>
        </div>
    )
}