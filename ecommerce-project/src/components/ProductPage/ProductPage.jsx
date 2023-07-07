import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function ProductPage() {
    document.title = "Nomad Sofa";

    return (
        <body>
            <NavBar className='nav' />

            <Footer className='footer container__fluid' />            
        </body>
    );
}