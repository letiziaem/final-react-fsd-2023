//import footer from 'footer.module.scss';

export default function Footer() {
    
    return (
        <footer className="footer container__fluid">
            <div className="footer__items">
                <form className="footer__items__form" action="" id="newsletter">
                    <input className="footer__items__form__text label" type="email" name="email" placeholder="Sign up for enthralling couch reads" />
                    <button className="footer__items__form__btn text" type="submit">SUBSCRIBE</button>
                </form>
                <div className="footer__items__icons">
                    <img src="assets/socials/icons8-youtube.svg" alt="" />
                    <img src="assets/socials/icons8-instagram.svg" alt="" />
                    <img src="assets/socials/icons8-facebook.svg" alt="" />
                </div>
            </div>
            <div className="footer__row">
                <div className="footer__row__menu">
                    <div className="footer__row__menu__items">
                        <a className="footer__row__menu__items__text text bold" href="">Shopping Services</a>
                        <a className="footer__row__menu__items__text text" href="">Schedule Consultation</a>
                        <a className="footer__row__menu__items__text text" href="">Showrooms</a>
                        <a className="footer__row__menu__items__text text" href="">Trade Program</a>
                        <a className="footer__row__menu__items__text text" href="">Outlet</a>
                    </div>
                    <div className="footer__row__menu__items">
                        <a className="footer__row__menu__items__text text bold" href="">About</a>
                        <a className="footer__row__menu__items__text text" href="">Our Story</a>
                        <a className="footer__row__menu__items__text text" href="">Reviews</a>
                        <a className="footer__row__menu__items__text text" href="">Careers</a>
                        <a className="footer__row__menu__items__text text" href="">Financing</a>
                        <a className="footer__row__menu__items__text text" href="">Financing</a>
                        <a className="footer__row__menu__items__text text" href="">Our Blog</a>
                    </div>
                    <div className="footer__row__menu__items">
                        <a className="footer__row__menu__items__text text bold" href="">Resources</a>
                        <a className="footer__row__menu__items__text text" href="">Look Up Order Status</a>
                        <a className="footer__row__menu__items__text text" href="">Assembly Instructions</a>
                        <a className="footer__row__menu__items__text text" href="">Returns</a>
                        <a className="footer__row__menu__items__text text" href="">Shipping & Delivery</a>
                        <a className="footer__row__menu__items__text text" href="">FAQ</a>
                        <a className="footer__row__menu__items__text text" href="">Refer a Friend</a> 
                    </div>
                    <div className="footer__row__menu__items">
                        <a className="footer__row__menu__items__text text bold" href="">Contact Customer Experience</a>
                        <a className="footer__row__menu__items__text text" href="">Email: support@template.com</a>
                        <a className="footer__row__menu__items__text text" href="">Phone: 224-628-7769</a>
                        <p className="footer__row__menu__items__text text">Hours:</p>
                        <p className="footer__row__menu__items__text text">Monday to Friday — 10a to 8p EST</p>
                        <p className="footer__row__menu__items__text text">Saturday to Sunday — 10a to 2p EST</p>
                    </div>
                </div>
                <div className="footer__row__terms">
                    <div className="footer__row__terms__copyright">
                        <p className="smalltext">© 2023 Template</p>
                        <p className="smalltext">Terms - Accessibility - Sitemap - Privacy</p>
                    </div>
                    <div className="footer__row__terms__address">
                        <p className="smalltext">15 W 27th Street, 9th Floor New York, NY, 10001</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}