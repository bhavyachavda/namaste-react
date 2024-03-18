import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    props?.resData?.info;
  const deliveryTimeString = props?.data?.sla?.slaString;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      {/* <h4>{cuisines.toString().split("")}</h4> */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTimeString}</h4>
    </div>
  );
};

export default RestaurantCard;
