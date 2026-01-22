import axios from "axios";
import { useState, useEffect } from "react";

const Search = ({ res, setRes }) => {

    const [search, setSearch] = useState("Biryani");
    const [resSearch, setResSearch] = useState("");
    async function apiCall() {
        try {
            let response = await axios.get(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.3974397&lng=78.4489062&str=${search}&trackingId=undefined&submitAction=ENTER&queryUniqueId=28a781b7-c1f3-18fe-481d-d7de175d92ad&selectedPLTab=RESTAURANT`);

            let cards = response.data.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
            // console.log("This is cards");
            // console.log(cards)
            // console.log("This is cards");
            let finalRes = cards.map((x) => x.card.card.info)
            // console.log("This is final");
            // console.log(finalRes)
            // console.log("This is final");
            setRes(finalRes);
        } catch (error) {
            console.log(error)
        }
    }

    function resFilter() {
        try {
            let finalRes = res.filter((x) => x.name.toLowerCase().includes(resSearch));
            // console.log(finalRes)
            setRes(finalRes);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        apiCall();
    }, []);

    return (
        <div className="search p-5 flex flex-col justify-center items-center gap-2">

            {/* Food Search */}
            <div>
                <input
                    className="border p-2 rounded-md"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Enter food name"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }} />
                <button
                    className="p-2 bg-orange-400 cursor-pointer rounded-md"
                    onClick={apiCall}
                >Search</button>
            </div>



            {/* Restaurant search filter */}
            <div>
                <input
                    className="border p-2 rounded-md"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Enter restaurant name"
                    onChange={(e) => {
                        setResSearch(e.target.value);
                    }} />
                <button
                    className="p-2 bg-orange-400 cursor-pointer rounded-md"
                    onClick={resFilter}
                >Search</button>
            </div>
        </div>
    );
};

export default Search;