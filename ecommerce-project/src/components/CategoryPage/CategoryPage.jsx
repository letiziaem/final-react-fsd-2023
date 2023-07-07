import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SeatingContainer from './SeatingContainer/Seating';

export default function CategoryPage() {
    document.title = "All Seating";

    return (
        <>
            <NavBar />

            <SeatingContainer />

            <Footer />
        </>
    );
}