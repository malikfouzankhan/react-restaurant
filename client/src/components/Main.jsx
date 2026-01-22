import Card from "./Card";

const Main = ({res, setRes}) => {
    


    return (
        <div className="res-cards px-30 flex flex-wrap gap-x-25 gap-y-5 mb-5">
            {
                res.map((res, index) => (
                    <Card key={index} name={res.name} src={res.cloudinaryImageId} rating={res.avgRating} costForTwo={res.costForTwoMessage}/>
                ))
            }
        </div>
    )
}

export default Main;