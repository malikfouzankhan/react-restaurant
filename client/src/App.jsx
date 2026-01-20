import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Search from './components/Search'

function App() {

    return (
        <div className='text-[#1C1C1C]'>
            <Header />
            <div className="main bg-[#F8F8F8]">
                <Search />
                <Main />
            </div>
        </div>
    )
}

export default App