import React, { useState } from 'react';
import Card from '../Card/Card';


const CardList = () => {
    const [products, setProducts] = useState([]);
    const [error,setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        const reponse = await fetch("")
    }

    return (
        <div>
            {/* <Card imageUrl={"abc"} name={"abc"} quantity={"abc"}  /> */}
            
        </div>
    );
};

export default CardList;