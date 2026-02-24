import Rescard from "./Rescard";
import { useState, useEffect } from "react";
import Shrimmer from "./Shimmer";

const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);

  const [filteredRestaurent, setfilteredRestaurent] = useState([])

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2237635&lng=75.8809701&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log(json)

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    const validRestaurants = restaurants.filter((res) => res?.info?.id);

    setListofRestaurant(validRestaurants);
    setfilteredRestaurent(validRestaurants)
  };

  return ListofRestaurant.length === 0 ? (
    <Shrimmer />
  ) : (
    <div className="body">
      <div className="filter-wrapper">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const filteredRestaurentName = ListofRestaurant.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                
                setfilteredRestaurent(filteredRestaurentName);

              }}
            >
              {" "}
              Search
            </button>
          </div>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListofRestaurant(
              ListofRestaurant.filter((res) => res?.info?.avgRating > 4.3),
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurent.map((restaurants) => (
          <Rescard key={restaurants.info.id} resdata={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
