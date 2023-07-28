import { useDispatch, useSelector } from "react-redux"
import ProductsList from "../data/ProductList.json"
import cartSlice from "../data/cartSlice"
import Navbar from "./Navbar"

const Home = () => {
    const cartProductIds = useSelector((state) => state.cartProductIds)
    const {addToCart, removeFromCart} = cartSlice.actions
    const dispatch = useDispatch()

    return (
        <div className="w-screen h-screen bg-gray-200 overflow-y-auto">
            <Navbar />

            <div className="w-full p-6">
                <div className="flex flex-wrap justify-center gap-6">
                    {ProductsList.products.map((product, index) => (
                        <div key={index} className="w-64 border shadow-md rounded py-2 px-3 bg-white">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-contain" />

                            <div className="flex items-center justify-between mb-4">
                                <div className="">
                                    <p className="text-left font-semibold">{product.name}</p>
                                    <p className="text-left">{product.detail}</p>
                                </div>

                                <p className="font-light">${product.price}</p>
                            </div>

                            {!cartProductIds.includes(product.id) && (<button className="bg-cyan-600 text-white px-6 py-1.5 rounded w-full mb-1 hover:bg-cyan-700" onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>)}

                            {cartProductIds.includes(product.id) && (<button className="bg-cyan-600 text-white px-6 py-1.5 rounded w-full mb-1 hover:bg-cyan-700" onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home