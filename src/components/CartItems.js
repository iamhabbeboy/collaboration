import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CartItem from "./CartItem";
const CartItems = () => {
    const cartitems = [
        {
            title: "Solid Shorts",
            image: "https://images.unsplash.com/photo-1598971861924-c78132a87443?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "$9.99",
        },
        {
            title: "Solid Mini Skirt",
            image: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/07/white-denim-jacket-jean-shorts-outfit.jpg?fit=728%2C921",
            price: "$9.99",
        },
        {
            title: "Short Male Jean",
            image: "https://i.pinimg.com/736x/86/1f/9d/861f9de75c6d830dd019557c9cea1252.jpg",
            price: "$99.99",
        },
        {
            title: "Vintage Fashion",
            image: "https://images.unsplash.com/photo-1598971861924-c78132a87443?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "$99.99",
        },
    ];
    return (_jsxs("section", { className: "m-0 p-0 border-0", children: [_jsxs("div", { className: "flex", children: [_jsx("div", { className: "p-4 ml-20 w-1/2", children: _jsx("img", { src: "./image/logo.jpg", alt: "Example", className: "object-cover h-20 w-20 rounded-md" }) }), _jsx("div", { className: "p-4 w-1/2 text-right text-red-500", children: "x Clear Cart" })] }), _jsxs("div", { className: "container flex gap-1 mx-auto p-2 mt-5 w-3/4 rounded-x", children: [_jsxs("div", { className: "p-2 w-3/4 bg-white rounded-t-lg border-gray-300 border", children: [_jsxs("div", { className: "mb-1 h-10 bg-white rounded-t-lg border-b border-gray-300", children: ["Cart ", _jsx("span", { className: "text-gray-400", children: "(5 Products)" })] }), _jsxs("div", { children: [" ", _jsx("span", { className: "mr-37", children: "Product" }), " ", _jsx("span", { className: "mr-37", children: "Count" }), " ", _jsx("span", { children: "Price" }), " "] }), _jsx("div", { className: "p-2 bg-white", children: cartitems.map((cartitem, key) => (_createElement(CartItem, { ...cartitem, key: key }))) }), _jsx("div", { className: "h-30 bg-center bg-cover border rounded lg", style: { backgroundImage: "url('./image/fff.jpg')" }, children: "\u00A0" })] }), _jsx("div", { className: "p-4 w-2/4 bg-white rounded-t-lg rounded", children: _jsxs("div", { className: "p-4 bg-gray-50 rounded-xl shadow-sm", children: [_jsx("h3", { className: "mb-2 text-lg font-semibold", children: "Promo code" }), _jsxs("div", { className: "flex gap-2 mb-4", children: [_jsx("input", { type: "text", placeholder: "Type here...", value: "", className: "flex-1 p-2 border rounded" }), _jsx("button", { className: "px-4 py-2 text-white bg-black rounded", children: "Apply" })] }), _jsxs("div", { className: "text-sm text-gray-700 space-y-2", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Subtotal" }), _jsx("span", { children: "$" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Discount" }), _jsx("span", { children: "-$" })] }), _jsxs("div", { className: "flex justify-between font-semibold text-lg", children: [_jsx("span", { children: "Total" }), _jsx("span", { children: "$" })] })] }), _jsx("button", { className: "mt-4 py-2 w-full text-white bg-black rounded hover:opacity-90", children: "Continue to checkout" })] }) })] })] }));
};
export default CartItems;
