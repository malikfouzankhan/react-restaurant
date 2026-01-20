const Card = ({ name, src, rating, costForTwo }) => {
    return (
        <div className="border-2 border-[#E5E5E5] shadow-2xl shadow-[#E5E5E5] w-60 max-h-90 pb-2 flex flex-col justify-top items-center rounded-lg gap-2 bg-[#FFFFFF]  hover:cursor-pointer ">
            <h3 className="p-2 text-xl w-full text-center font-semibold border-b-2 min-h-20 ">{name}</h3>
            <img className="object-cover w-48 h-45 rounded-md" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${src}`} />
            <div className="w-full pl-5 flex flex-wrap items-center text-yellow-500 text-sm mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
            ))}
            <span className="pl-6 font-semibold self-start">{rating} stars</span>
            </div>
            <h4 className="pl-6 font-semibold self-start">{costForTwo}</h4>
        </div>
    )
};

export default Card;