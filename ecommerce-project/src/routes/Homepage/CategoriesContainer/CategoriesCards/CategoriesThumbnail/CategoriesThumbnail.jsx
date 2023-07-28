import style from './../../style.module.scss';
import grids from './../../../../../shared/grid.module.scss';
import typos from './../../../../../shared/typography.module.scss';
import { Link } from 'react-router-dom';

export default function CategoriesThumbnail({category, linkTo}) {

    return (
        <Link to={linkTo} className={`${style.categories__col} ${grids["col-lg-4"]}`}>
            <div className={`${style.categories__col__thumbnail}`}>
                <img src={category.image} />
                <p className={`${style.categories__col__thumbnail__text} ${typos["label"]}`}>{category.title}</p>
            </div>
        </Link>
    )
}