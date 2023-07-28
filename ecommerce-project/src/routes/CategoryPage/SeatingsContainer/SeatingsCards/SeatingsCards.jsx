import grids from "../../../../shared/grid.module.scss";
import ProductsThumbnail from "./ProductsThumbnail/ProductsThumbnail";
import { useEffect, useState } from "react";

export default function SeatingsCards() {
    const [seatings, setSeatings] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5173/api/assets.json")
        .then((res) => res.json())
        .then((json) => setSeatings(json.seatings))
    }, []);

    return (
        <div className={`${grids["row"]}`}>
            {seatings.map((seating) => (
                <ProductsThumbnail key={seating.id} linkTo="/product" seating={seating}/>
            ))}
        </div>
    )
}