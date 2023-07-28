import grids from './../../../../shared/grid.module.scss';
import CategoriesThumbnail from './CategoriesThumbnail/CategoriesThumbnail';
import { useEffect, useState } from "react";

export default function CategoriesCards() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5173/api/assets.json")
        .then((res) => res.json())
        .then((json) => setCategories(json.categories))
    }, []);

    return (
        <div className={`${grids["row"]}`}>
            {categories.map((category) => (
                <CategoriesThumbnail key={category.id} linkTo="/seatings" category={category}/>
            ))}
        </div>
    )
}