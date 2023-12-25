import { CDN_URL } from "../utils/constant";
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality } =
    resData?.card?.card?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant image"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>cuisine: {cuisines.join(", ")}</h4>
      <h4>Cost For Two : {costForTwo}</h4>
      <h4>Location : {locality}</h4>
      <h4>Rating : {avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
