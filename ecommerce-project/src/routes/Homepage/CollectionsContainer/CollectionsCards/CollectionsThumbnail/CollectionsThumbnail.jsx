import style from './../../style.module.scss';
import grids from './../../../../../shared/grid.module.scss';
import typos from './../../../../../shared/typography.module.scss';

export default function CollectionsThumbnail({collection, linkTo}) {

    return (
        <div className={`${grids["col-lg-3"]}`}>
            <div className={`${style.collections__thumbnail}`}>
                <img src={collection.image} />
                <p className={`${style.collections__thumbnail__text} ${typos["label"]}`}>{collection.title}</p>
            </div>
        </div>
    )
}