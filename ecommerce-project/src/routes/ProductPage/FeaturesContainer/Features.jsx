import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';
import typos from './../../../shared/typography.module.scss';

import icon1 from './../../../assets/icons/icon-2.webp';
import icon2 from './../../../assets/icons/icon-3.webp';
import icon3 from './../../../assets/icons/icon-4.webp';
import icon4 from './../../../assets/icons/icon-1.webp';
import icon5 from './../../../assets/icons/icon-5.webp';


export default function FeaturesContainer() {

    return (
        <section className={`${style.features} ${grids["container"]}`}>
            <div className={`${grids["row"]}`}>
                <div className={`${grids["col-lg-12"]}`}>
                    <p className={`${typos["mediumtext"]}`}>Key features</p>
                </div>
            </div>
            <div className={`${grids["row"]}`}>
                <div className={`${grids["col-lg-2"]} ${style.features__thumbnail}`}>
                    <img className={`${style.features__thumbnail__img}`} src={icon1} />
                        <p className={`${typos["text"]} ${typos["bold"]}`}>Customizable</p>
                </div>
                <div className={`${grids["col-lg-2"]} ${style.features__thumbnail}`}>
                    <img className={`${style.features__thumbnail__img}`} src={icon2} />
                        <p className={`${typos["text"]} ${typos["bold"]}`}>Frame</p>
                </div>
                <div className={`${grids["col-lg-2"]} ${style.features__thumbnail}`}>
                    <img className={`${style.features__thumbnail__img}`} src={icon3} />
                        <p className={`${typos["text"]} ${typos["bold"]}`}>Hardware</p>
                </div>
                <div className={`${grids["col-lg-2"]} ${style.features__thumbnail}`}>
                    <img className={`${style.features__thumbnail__img}`} src={icon4} />
                        <p className={`${typos["text"]} ${typos["bold"]}`}>Charger</p>
                </div>
                <div className={`${grids["col-lg-2"]} ${style.features__thumbnail}`}>
                    <img className={`${style.features__thumbnail__img}`} src={icon5} />
                        <p className={`${typos["text"]} ${typos["bold"]}`}>Legs</p>
                </div>
            </div>
        </section>
    );
}
