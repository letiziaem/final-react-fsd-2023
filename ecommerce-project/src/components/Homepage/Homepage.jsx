import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SplashContainer from './SplashContainer/SplashContainer';

export default function Homepage() {
    document.title = "Homepage";

    return (
        <>
            <NavBar />

            <SplashContainer />

            <section className='categories container'>

            </section>

            <section className='aditional__info container__fluid'>

            </section>

            <section className='collections container'>

            </section>

            <section className='nomad container__fluid'>

            </section>

            <section className='carousel'>

            </section>

            <section className='video-1'>

            </section>

            <Footer className='footer container__fluid' />
        </>
    );
}