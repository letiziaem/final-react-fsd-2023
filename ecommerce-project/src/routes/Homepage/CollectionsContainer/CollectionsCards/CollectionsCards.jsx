import grids from './../../../../shared/grid.module.scss';
import CollectionsThumbnail from './CollectionsThumbnail/CollectionsThumbnail';
import { useEffect, useState } from "react";

export default function CollectionsCards() {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5173/api/assets.json")
        .then((res) => res.json())
        .then((json) => setCollections(json.collections))
    }, []);

    return (
        <div className={`${grids["row"]}`}>
            {collections.map((collection) => (
                <CollectionsThumbnail key={collection.id} collection={collection}/>
            ))}
        </div>
    )
}