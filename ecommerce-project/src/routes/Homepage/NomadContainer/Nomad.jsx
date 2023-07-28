import style from './style.module.scss';
import grids from '../../../shared/grid.module.scss';
import typos from './../../../shared/typography.module.scss';
import image from './../../../assets/sofa_container.png';
import { Link } from 'react-router-dom';

export default function NomadContainer() {

    return (
        <section className={`${style.nomad} ${grids["container__fluid"]}`}>
            <div className={style.nomad__group}>
                <p className={`${style.nomad__group__title} ${typos["label"]}`}>NOMAD</p>
                <p className={`${style.nomad__group__text} ${typos["label"]}`}><span className={`${style.bold}`}>The Ambid</span> system works beautifully. It's comfortable, absolutely solid, and looks great.</p>
                <Link className={`${style.nomad__group__link} ${typos["label"]}`} linkTo="/product">SHOP NOW</Link>
            </div>
            <img className={style.nomad__img} src={image}/>
        </section>
    );
}
