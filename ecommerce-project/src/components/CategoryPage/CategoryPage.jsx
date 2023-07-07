import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function CategoryPage() {
    document.title = "All Seating";

    return (
        <body>
            <NavBar className='nav' />

            <Footer className='footer container__fluid' />
        </body>
    );
}