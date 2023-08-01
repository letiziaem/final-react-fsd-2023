import style from './../../style.module.scss';

import thumbnail from './../../../../../assets/product-page/sofa-grey.webp';
import image1 from './../../../../../assets/product-page/sofa-grey-2.webp';
import image2 from './../../../../../assets/product-page/sofa-grey-3.webp';
import image3 from './../../../../../assets/product-page/sofa-img2.webp';
import image4 from './../../../../../assets/product-page/sofa-img3.webp';
import image5 from './../../../../../assets/product-page/sofa-img4.webp';

export default function ProductThumbnail() {

    return (
        <>
            <div className={`${style.product__images__thumbnail}`}>
                <img src={thumbnail} />
            </div>
            <div className={`${style.product__images__others}`}>
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
                <img src={image5} />
            </div>
        </>
    )
}