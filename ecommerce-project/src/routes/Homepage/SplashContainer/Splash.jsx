import style from './style.module.scss';
import grids from '../../../shared/grid.module.scss';
import buttons from '../../../shared/button.module.scss';
import image from './../../../assets/splash-screen.webp'

export default function SplashContainer() {

    return (
        <section className={`${style.splash} ${grids["container__fluid"]}`}>
            <img src={image} className={style.img}/>
            <div className={style.splash__group}>
                <p className={style.splash__group__text}>Clever designs, delivered free</p>
                <button className={`${buttons.button}`}>SHOP SEATING</button>
            </div>
        </section>
    );
}
