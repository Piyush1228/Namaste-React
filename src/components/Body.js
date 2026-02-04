import Rescard from "./Rescard";
import { useState, useEffect, use } from "react";
import resObj from "../utlis/mockData";


const Body = () => {
    const [ListofRestaurant, setListofRestaurant] = useState(resObj);

    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2237635&lng=75.8809701&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        );
        const json = await data.json();
        console.log(json);
        // setListofRestaurant(json.data.cards[12].card.card);
    }
    return (
        <div className="body">
            <button className="filter-btn"
            
            onClick={() => {
                setListofRestaurant(ListofRestaurant.filter((res) => res.restaurant.rating.average > 4));
            }}
            >
                Top Rated Restaurant
            </button>
            <div className="res-container">
                {ListofRestaurant.map((res) => (
                    <Rescard 
                    key={res.restaurant.id}
                    resdata={res}/>
                ))}
            </div>
        </div>  
    )
}

export default Body;