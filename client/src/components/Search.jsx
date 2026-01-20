const Search = ({res, setRes}) => {
    function handleFilter(num) {
        let newRes = res.filter(res => res.avgRating > num);
        setRes(newRes);
    }
    return (
        <div className="search p-5 flex flex-col justify-center items-center ">
            <h3>Search</h3>
            <button className="p-2 bg-orange-400 cursor-pointer rounded-md" onClick={() => handleFilter(4)}>Top Rated Restaurants</button>
        </div>
    );
};

export default Search;