import style from './style.module.scss';
import typos from './../../shared/typography.module.scss';
import { Link } from 'react-router-dom';

import logo from './../../assets/edit-extended-logo.png';

export default function NavBar() {
    return (
        <nav className={`${style.nav}`}>
        <div className={`${style.nav__logo}`}>
            <div className={`${style.nav__logo__thumbnail}`}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
        </div>
        <div className={`${style.nav__menu}`}>
            <ul className={`${style.nav__menu__items}`}>
                <li className={`${style.nav__menu__items__list}`}>
                    <Link to="/seatings" className={`${style.nav__menu__items__list__title} ${typos["text"]}`}>Seating</Link>
                </li>
                <li className={`${style.nav__menu__items__list}`}>
                    <Link to="" className={`${style.nav__menu__items__list__title} ${typos["text"]}`}>Living</Link>
                </li>
                <li className={`${style.nav__menu__items__list}`}>
                    <Link to="" className={`${style.nav__menu__items__list__title} ${typos["text"]}`}>Outdoor</Link>
                </li>
                <li className={`${style.nav__menu__items__list}`}>
                    <Link to="" className={`${style.nav__menu__items__list__title} ${typos["text"]}`}>Bedroom</Link>
                </li>
                <li className={`${style.nav__menu__items__list}`}>
                    <Link to="" className={`${style.nav__menu__items__list__title} ${typos["text"]}`}>Storage</Link>
                </li>
                <li className={`${style.nav__menu__items__list}`}>
                    <Link to="" className={`${style.nav__menu__items__list__title} ${typos["text"]}`}>Rugs</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}