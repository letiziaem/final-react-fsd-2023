import grids from "../../../../shared/grid.module.scss";

export default function SeatingsHeadline() {

    return (
        <div className={`${grids["row"]}`}>
            <div className="seating__title col-lg-12">
                <h2 className="seating__title__headline headline_2">
                    All Seating
                </h2>
                <p className="seating__title__subtitle text">The main feature of any living room is always going to be the seating. Pick and choose your seating styles to build the perfect place to relax. Unwind by yourself, spend time with your family, or entertain guests, all in ultimate comfort.</p>
            </div>
        </div>
    )
}