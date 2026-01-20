import Card from "./Card";
import restaurants from "../data/restaurants.js";

const Main = () => {
    return (
        <div className="res-cards px-30 flex flex-wrap gap-x-25 gap-y-5 mb-5">
            {
                restaurants.map((res, index) => (
                    <Card name={res.name} src={res.cloudinaryImageId} rating={res.avgRating} costForTwo={res.costForTwoMessage}/>
                ))
            }
        </div>
    )
}

export default Main;