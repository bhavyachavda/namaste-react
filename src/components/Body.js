import { useEffect, useState } from "react";
// import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, SetSearchText] = useState("");

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the components) is called state variable

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0245701&lng=72.5069855&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(
      "josn",
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurant(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection
      </h1>
    )
  }

  console.log("filter",filterRestaurant)

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => SetSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              //Filter the restraunt cards and update the UI
              //SearchText

              //   console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase())
              );
              setFilterRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterListOfRestaurant = listOfRestaurant.filter(
              (res) => res?.info.avgRating >= 4.4
            );
            setListOfRestaurant(filterListOfRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
