import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Search from './components/Search'
import { useState } from 'react'
import restaurants from "./data/restaurants.js"

function App() {
    const [res, setRes] = useState(restaurants);

    return (
        <div className='text-[#1C1C1C]'>
            <Header />
            <div className="main bg-[#F8F8F8]">
                <Search res={res} setRes={setRes}/>
                <Main res={res} setRes={setRes}/>
            </div>
        </div>
    )
}

export default App