import style from './style.module.scss';
import grids from './../../../shared/grid.module.scss';
import typos from './../../../shared/typography.module.scss';

export default function AboutContainer() {

    return (
        <section className={`${style.about} ${grids["container"]}`}>
            <div className={`${grids["row"]}`}>
                <div className={`${grids["col-lg-12"]}`}>
                    <p className={`${typos["mediumtext"]}`}>About this piece</p>
                </div>
                <div className={`${grids["col-lg-12"]}`}>
                    <p className={`${typos["body"]}`}>The ideal three-seat sofa featuring one seat with a chaise lounge addition, one seat with an ottoman, and one seat for the chiropractor who loves to sit upright with their feet on the floor. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger.</p>
                </div>
            </div>
            <div className={`${grids["row"]}`}>
                <div className={`${grids["col-lg-4"]} ${style.about__col}`}>
                    <p className={`${typos["text"]} ${typos["bold"]}`}>Customizable</p>
                    <p className={`${typos["text"]}`}>Create your ideal sectional sofa with five fabric colors, six leg finishes, and three armrest heights. You can even swap the reversible back cushions: one side is tufted for a classic look, the other smooth and contemporary.</p>
                </div>
                <div className={`${grids["col-lg-4"]} ${style.about__col}`}>
                    <p className={`${typos["text"]} ${typos["bold"]}`}>Adaptable</p>
                    <p className={`${typos["text"]}`}>Rest easy with the knowledge that your new furniture can grow and expand with your life, thanks to the universal, modular design of our Nomad Collection.</p>
                </div>
                <div className={`${grids["col-lg-4"]} ${style.about__col}`}>
                    <p className={`${typos["text"]} ${typos["bold"]}`}>Comfortable</p>
                    <p className={`${typos["text"]}`}>The cushions are formulated for lasting comfort with our proprietary three-layer foam and fiber architecture, and feature a plush crown for a soft initial sit.</p>
                </div>
            </div>
        </section>
    );
}
