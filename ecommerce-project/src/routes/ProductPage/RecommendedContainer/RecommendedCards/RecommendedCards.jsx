import grids from "../../../../shared/grid.module.scss";
import RecommendedThumbnail from "./RecommendedThumbnail/RecommendedThumbnail";
import { useEffect, useState } from "react";

export default function RecommendedCards() {
    const [seatings, setSeatings] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5173/api/assets.json")
        .then((res) => res.json())
        .then((json) => setSeatings(json.seatings))
    }, []);

    return (
        <div className={`${grids["row"]}`}>
            {seatings.slice(1, 4).map((seating) => (
                <RecommendedThumbnail key={seating.id} linkTo="/product" seating={seating}/>
            ))}
        </div>
    )
}