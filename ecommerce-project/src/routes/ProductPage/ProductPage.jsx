import ProductContainer from './ProductContainer/Product';
import DimensionsContainer from './DimensionsContainer/Dimensions';
import AboutContainer from './AboutContainer/About';
import FeaturesContainer from './FeaturesContainer/Features';
import VideoProductOne from './VideoContainer/VideoProduct1';
import VideoProductTwo from './VideoContainer/VideoProduct2';
import RecommendedContainer from './RecommendedContainer/Recommended';

export default function ProductPage() {
    document.title = "Nomad Sofa";

    return (
        <>
            <ProductContainer />

            <DimensionsContainer />

            <AboutContainer />

            <FeaturesContainer />

            <VideoProductOne />

            <VideoProductTwo />

            <RecommendedContainer />          
        </>
    );
}