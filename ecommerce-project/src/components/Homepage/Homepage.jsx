import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SplashContainer from './SplashContainer/Splash';
import CategoriesContainer from './CategoriesContainer/Categories';
import AditionalInfoContainer from './AditionalInfoContainer/AditionalInfo';
import CollectionsContainer from './CollectionsContainer/Collections';
import NomadContainer from './NomadContainer/Nomad';
import CarouselContainer from './CarouselContainer/Carousel';
import VideoHomepage from './VideoContainer/Video';

export default function Homepage() {
    document.title = "Homepage";

    return (
        <>
            <NavBar />

            <SplashContainer />

            <CategoriesContainer />

            <AditionalInfoContainer />

            <CollectionsContainer />

            <NomadContainer />

            <CarouselContainer />

            <VideoHomepage />

            <Footer />
        </>
    );
}