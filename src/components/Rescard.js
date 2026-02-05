import { CDN_URL } from "../utlis/constants";

const FALLBACK_IMG =
  "https://via.placeholder.com/508x320?text=No+Image";

const Rescard = ({ resdata }) => {
    const {
        name,
        cuisines = [],
        avgRating,
        sla = {},
        cloudinaryImageId,
    } = resdata?.info || {};

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt={name}
                src={CDN_URL + cloudinaryImageId}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = FALLBACK_IMG;
                }}
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    );
};

export default Rescard;
