import style from './../style.module.scss';
import grids from './../../../../shared/grid.module.scss';
import typos from './../../../../shared/typography.module.scss';
import buttons from './../../../../shared/button.module.scss';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import ProductStyle from './ProductStyle/ProductStyle';
import ProductUpgrade from './ProductUpgrade/ProductUpgrade';

export default function ProductInformations() {

    return (
        <div className={`${grids["row"]}`}>
            <div className={`${style.product__images} ${grids["col-lg-8"]}`}>
                <ProductThumbnail />
            </div>
            <div className={`${style.product__description} ${grids["col-lg-4"]}`}>
                <div className={`${style.product__description__title}`}>
                    <p className={`${typos["mediumtext"]}`}>Block Nomad Sofa</p>
                    <p className={`${typos["body_2"]}`}>$1599 + Free Shipping</p>
                </div>
                <div className={`${style.product__description__color}`}>
                    <p className={`${typos["text"]}`}><span className={`${typos["bold"]}`}>Fabric Color - </span>Crushed Gravel</p>
                    <div id="color_grey" className={`${style.gravel}`}></div>
                    <div id="color_red" className={`${style.red}`}></div>
                    <div id="color_blue" className={`${style.blue}`}></div>
                    <div id="color_black" className={`${style.charcoal}`}></div>
                </div>
                <div className={`${style.product__description__style}`}>
                    <ProductStyle />
                </div>
                <div className={`${style.product__description__upgrade}`}>
                    <ProductUpgrade />
                </div>
                <div className={`${style.product__description__btn}`}>
                    <button className={`${typos["text"]} ${buttons.button}`}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}