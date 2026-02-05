import Rescard from "./Rescard";
import { useState, useEffect } from "react";

const Body = () => {
    const [ListofRestaurant, setListofRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2237635&lng=75.8809701&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        const restaurants =
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || [];

        const validRestaurants = restaurants.filter(
            (res) => res?.info?.id
        );

        setListofRestaurant(validRestaurants);
    };

    return (
        <div className="body">
            <button
                className="filter-btn"
                onClick={() => {
                    setListofRestaurant(
                        ListofRestaurant.filter(
                            (res) => res?.info?.avgRating > 4
                        )
                    );
                }}
            >
                Top Rated Restaurant
            </button>

            <div className="res-container">
                {ListofRestaurant.map((restaurants) => (
                    <Rescard
                        key={restaurants.info.id}
                        resdata={restaurants}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
