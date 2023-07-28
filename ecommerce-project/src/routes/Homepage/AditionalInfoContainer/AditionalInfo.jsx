import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';
import icon6 from "./../../../assets/icons/icon-6.png";
import icon7 from "./../../../assets/icons/icon-7.png";
import icon8 from "./../../../assets/icons/icon-8.png";

export default function AditionalInfoContainer() {

    return (
        <section className={`${style.aditional__info} ${grids["container__fluid"]}`}>
            <div className={`${style.aditional__info__row} ${grids["row"]}`}>
                <div className={`${style.aditional__info__group}`}>
                    <img className={`${style.aditional__info__group__img}`} src={icon6} />
                    <p className={`${style.aditional__info__group__text}`}>Fast & free shipping<br></br>
                        Every single order ships for free. No minimums, no tiers, no fine print whatsoever.</p>
                </div>
                <div className={`${style.aditional__info__group}`}>
                    <img className={`${style.aditional__info__group__img}`} src={icon7} />
                    <p className={`${style.aditional__info__group__text}`}>Modular, easy-to-move design<br></br>
                        Our innovative modular design is driven by the belief that furniture should fit this home, and
                        the next one.</p>
                </div>
                <div className={`${style.aditional__info__group}`}>
                    <img className={`${style.aditional__info__group__img}`} src={icon8} />
                    <p className={`${style.aditional__info__group__text}`}>Durable, premium materials<br></br>
                        We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain
                        Italian leather.</p>
                </div>
            </div>
        </section>
    );
}
