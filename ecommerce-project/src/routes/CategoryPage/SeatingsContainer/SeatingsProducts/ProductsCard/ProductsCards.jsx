import grids from "../../../../../shared/grid.module.scss";
import ProductsThumbnail from "./ProductThumbnail/ProductThumbnail";

export default function ProductsCards() {

    return (
        <div className={`${grids["col-lg-4"]}`}>
            <ProductsThumbnail />
        </div>
    );
}