import style from './../style.module.scss';
import typo from './../../../shared/typography.module.scss';

export default function FooterContainer() {

    return (
        <div className={style.footer__container}>
            <form className={style.footer__container__form} action="" id="newsletter">
                <input className={`${style.footer__container__form__text} ${typo.label}`} type="email" placeholder="Sign up for enthralling couch reads" />
                <button className={`${style.footer__container__form__btn} ${typo.text}`} type="submit">SUBSCRIBE</button>
            </form>
            <div className={style.footer__container__icons}>
                <img src="/src/assets/socials/icons8-youtube.svg" alt="" />
                <img src="/src/assets/socials/icons8-instagram.svg" alt="" />
                <img src="/src/assets/socials/icons8-facebook.svg" alt="" />
            </div>
        </div>
    )
}