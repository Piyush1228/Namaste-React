import { useState, useEffect } from "react";
import Shrimmer from "./Shimmer";
import resMenu from "../utlis/mockMenu.js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    setResInfo(resMenu[0].data);
    console.log(resMenu[0].data);
  }, []);

  const restaurantCard = resInfo?.cards?.find((c) => c?.card?.card?.info);

  const restaurantInfo = restaurantCard?.card?.card?.info;

  const regularCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = regularCards
    ?.map((card) => card?.card?.card?.itemCards)
    ?.filter(Boolean)
    ?.flat();

  return resInfo === null ? (
    <Shrimmer />
  ) : (
    <div className="menu">
      <h1>{restaurantInfo?.name}</h1>
      <p>
        {restaurantInfo?.cuisines?.join(", ")} -{" "}
        {restaurantInfo?.costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item, index) => {
          const info = item?.card?.info;
          const price = info?.price || info?.defaultPrice || 0;

          return (
            <li key={`${info?.id}-${index}`}>
              {info?.name} - Rs{price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
