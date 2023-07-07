// import styles from 'splash.module.css';
// import typos from './../../../shared/typography.module.scss';
// import grids from './../../../shared/grid.module.css';
//import buttons from './../../../shared/buttons.module.scss';

export default function SplashContainer() {

    return (
        <section className=''>
            <img src="assets/splash-screen.webp" alt="Living room with a blue sofa" />
            <div className="splash__group">
                <p className="splash__group__text">Clever designs, delivered free</p>
                <button className="button group__btn">SHOP BEDROOM</button>
            </div>
        </section>
    )
}