import grids from '../../../../shared/grid.module.scss';
import typos from '../../../../shared/typography.module.scss'

export default function ProductHeadline() {

    return (
        <div className={`${grids["row"]}`}>
            <div className={`${grids["col-lg-12"]}`}>
                <p className={`${typos["text"]} ${typos["bold"]}`}>Nomad Collection</p>
            </div>
        </div>
    )
}