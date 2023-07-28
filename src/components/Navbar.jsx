import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"

const Navbar = () => {
    const cartProductIds = useSelector(state => state.cartProductIds)
    
    return(
        <div className="w-screen flex items-center justify-between bg-white shadow px-10 py-4">
            <a href={"/"} className="font-bold text-2xl text-cyan-700">Redux Shop</a>

            <a href={"/cart"} className="relative">
                <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
                <span className="bg-cyan-600 text-white text-xs rounded-full py-0.5 px-1.5 absolute -top-2 -right-3 shadow">{cartProductIds.length}</span>
            </a>
        </div>
    )
}

export default Navbar