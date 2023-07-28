import grids from "../../../../shared/grid.module.scss";
import ProductsCards from "./ProductsCard/ProductsCards";

export default function SeatingsProducts() {

    return (
        <div className={`${grids["row"]}`}>
            <ProductsCards />
        </div>
    )
}