import style from './../../style.module.scss';
import grids from './../../../../../shared/grid.module.scss';
import typos from './../../../../../shared/typography.module.scss'
import { Link } from 'react-router-dom';

export default function SeatingsThumbnail({seating, linkTo}) {

    return (
        <div className={`${grids["col-lg-4"]}`}>
            <div className={`${style.seating__thumbnail}`}>
                <Link to={linkTo}>
                    <img className={`${style.seating__thumbnail__img}`} src={seating.image} />
                    <img className={`${style.seating__thumbnail__hover}`} src={seating.hover} />
                </Link>
                <p className={`${style.seating__thumbnail__text} ${typos["text"]} ${typos["bold"]}`}>{seating.title}</p>
                <p className={`${style.seating__thumbnail__text} ${typos["label"]}`}>{seating.price}</p>
            </div>
        </div>
    );
}