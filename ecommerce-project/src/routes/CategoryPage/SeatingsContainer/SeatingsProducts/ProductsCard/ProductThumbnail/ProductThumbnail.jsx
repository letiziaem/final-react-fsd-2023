import style from "../../../style.module.scss";

export default function ProductsThumbnail() {

    return (
            <div className={`${style["seating__thumbnail"]}`}>
                <a href="nomadsofa.html">
                    <img className="seating__thumbnail__img" src="assets/products/1/product.webp" alt="" />
                    <img className="seating__thumbnail__hover" src="assets/products/1/product-hover.webp" alt="" />
                </a>
                <p className="seating__thumbnail__text text bold">Nomad Sofa</p>
                <p className="seating__thumbnail__text label">$1595 or as low as $100/mo</p>
            </div>
    );
}