import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector, useDispatch } from "react-redux"
import Productslist from "../data/ProductList.json"
import Navbar from "./Navbar"
import cartSlice from "../data/cartSlice"

const Cart = () => {
    const cartProductIds = useSelector(state => state.cartProductIds)
    const cartProducts = Productslist.products.filter(product => cartProductIds.includes(product.id))
    const {removeFromCart, clearCart} = cartSlice.actions
    const dispatch = useDispatch()
    
    return (
        <div className="w-screen h-screen bg-gray-200 overflow-y-auto">
            <Navbar />

            <div className="w-full flex justify-center p-6">
                <div className="w-3/4">
                    <h4 className="font-semibold mb-4">Items in Cart</h4>
                    
                    {cartProducts.length > 0 && (<div className="">
                        {cartProducts.map((product, index) => (
                            <div key={index} className="flex gap-10 border shadow bg-white rounded p-4 mb-3 w-full">
                                <img src={product.imageUrl} alt={product.name} className="w-40 h-40 object-contain" />

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="text-left font-semibold mb-2">{product.name}</p>
                                        <p className="text-left mb-2">{product.detail}</p>
                                        <p className="font-light">${product.price}</p>
                                    </div>

                                    <button className="bg-cyan-600 text-white px-6 py-1.5 rounded w-full hover:bg-cyan-700" onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>
                                </div>
                            </div>
                        ))}

                        <div align={'center'}>
                            <button className="bg-green-600 text-white px-6 py-1.5 rounded w-44 hover:bg-green-700" onClick={() => dispatch(clearCart())}>Checkout</button>
                        </div>
                    </div>)}

                    {cartProducts.length === 0 && (<div className="bg-white shadow rounded p-4 flex flex-col items-center gap-3">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p>Cart is empty</p>
                        
                        <a href="/" className="w-44 bg-cyan-600 text-white px-6 py-1.5 rounded w-44 hover:bg-cyan-700">Go back to shop</a>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Cart