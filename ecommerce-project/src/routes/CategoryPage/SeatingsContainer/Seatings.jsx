import style from "./style.module.scss";
import grids from "../../../shared/grid.module.scss"
import SeatingsHeadline from "./SeatingsHeadline/SeatingsHeadline";
import SeatingsProducts from "./SeatingsProducts/SeatingsProducts";

export default function SeatingsContainer() {

    return (
        <section className={`${style.seatings} ${grids["container"]}`}>
            <SeatingsHeadline />
            <SeatingsProducts />
        </section>
    );
}