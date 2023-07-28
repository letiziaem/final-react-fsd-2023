import style from './../style.module.scss';
import typo from './../../../shared/typography.module.scss';

export default function FooterMenu() {

    return (
        <div className={style.footer__row}>
                <div className={style.footer__row__menu}>
                    <div className={style.footer__row__menu__items}>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text} ${typo.bold}`} href="">Shopping Services</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Schedule Consultation</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Showrooms</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Trade Program</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Outlet</a>
                    </div>
                    <div className={style.footer__row__menu__items}>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text} ${typo.bold}`} href="">About</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Our Story</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Reviews</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Careers</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Financing</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Financing</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Our Blog</a>
                    </div>
                    <div className={style.footer__row__menu__items}>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text} ${typo.bold}`} href="">Resources</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Look Up Order Status</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Assembly Instructions</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Returns</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Shipping & Delivery</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">FAQ</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Refer a Friend</a> 
                    </div>
                    <div className={style.footer__row__menu__items}>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text} ${typo.bold}`} href="">Contact Customer Experience</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Email: support@template.com</a>
                        <a className={`${style.footer__row__menu__items__text} ${typo.text}`} href="">Phone: 224-628-7769</a>
                        <p className={`${style.footer__row__menu__items__text} ${typo.text}`}>Hours:</p>
                        <p className={`${style.footer__row__menu__items__text} ${typo.text}`}>Monday to Friday — 10a to 8p EST</p>
                        <p className={`${style.footer__row__menu__items__text} ${typo.text}`}>Saturday to Sunday — 10a to 2p EST</p>
                    </div>
                </div>
                <div className={style.footer__row__terms}>
                    <div className={style.footer__row__terms__copyright}>
                        <p className={typo.smalltext}>© 2023 Template<br></br>
                        Terms - Accessibility - Sitemap - Privacy</p>
                    </div>
                    <div className={style.footer__row__terms__address}>
                        <p className={typo.smalltext}>15 W 27th Street, 9th Floor New York, NY, 10001</p>
                    </div>
                </div>
            </div>
    )
}