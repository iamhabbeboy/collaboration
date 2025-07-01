import type { CartItemProps } from "../types/Icart"
import CartItem from "./CartItem"

const CartItems = () => {
    const cartitems: CartItemProps[] = [{
        title: "Solid Shorts",
        image: "https://images.unsplash.com/photo-1598971861924-c78132a87443?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$9.99"
    }, {
        title: "Solid Mini Skirt",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/07/white-denim-jacket-jean-shorts-outfit.jpg?fit=728%2C921",
        price: "$9.99"
    }, {
        title: "Short Male Jean",
        image: "https://i.pinimg.com/736x/86/1f/9d/861f9de75c6d830dd019557c9cea1252.jpg",
        price: "$99.99"
    }, 
 {
        title: "Vintage Fashion",
        image: "https://images.unsplash.com/photo-1598971861924-c78132a87443?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$99.99"
    }]
    return (
        <section> 
            <h1> Product </h1>
            <div className="flex justify-between">
                {cartitems.map((cartitem, key) => (
                <CartItem {...cartitem} key={key} />
                ))}
            </div>
        </section>
    )
}
export default CartItems