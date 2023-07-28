import style from './style.module.scss';
import grid from './../../shared/grid.module.scss';
import FooterContainer from './FooterContainer/FooterContainer';
import FooterMenu from './FooterMenu/FooterMenu';

export default function Footer() {
    
    return (
        <footer className={`${style.footer} ${grid["container__fluid"]}`}>
            <FooterContainer />

            <FooterMenu />
        </footer>
    );
}