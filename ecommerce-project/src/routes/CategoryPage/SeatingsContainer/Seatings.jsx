import style from "./style.module.scss";
import grids from "../../../shared/grid.module.scss"
import SeatingsHeadline from "./SeatingsHeadline/SeatingsHeadline";
import SeatingsCards from "./SeatingsCards/SeatingsCards";

export default function SeatingsContainer() {

    return (
        <section className={`${style.seatings} ${grids["container"]}`}>
            <SeatingsHeadline />
            <SeatingsCards />
        </section>
    );
}