const Header = () => {
    return (
        <div className="header flex justify-between border-2 bg-amber-300">
            <div className="logo-container">
                <img className="logo w-40" src="../../public/logo-1.png " alt="Restaurant logo" />
            </div>
            <div className="nav-items px-5">
                <ul className="flex px-5 h-full items-center">
                    <li className="p-2.5 m-2.5">Home</li>
                    <li className="p-2.5 m-2.5">About</li>
                    <li className="p-2.5 m-2.5">Contact us</li>
                    <li className="p-2.5 m-2.5">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;