import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  // console.log("resId",resId)

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // console.log("url",MENU_API_URL + resId)

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API_URL + resId);
  //   const json = await data.json();

  //   console.log("josn", json);
  //   setResInfo(json?.data);
  // };

  if (resInfo === null) return <Shimmer />;

  console.log("resInfo",resInfo);
  // return;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log("itemcard", itemCards);
  // console.log("itemcard", itemCards?.length);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {"Rs."}
            {item?.card?.info?.price / 100 ||  item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
