import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import FlashProduct from "./FlashProduct";
function FlashProducts() {
    const fProducts = [
        {
            image: "./images/greshirt.jpg",
            description: "Soft, breathable 100% cotton tee with a classic fit.",
            price: "2090.0",
            oldPrice: "30000.0",
            numberRemain: "10",
            totalNumber: "10",
        },
        {
            image: "./images/grsk.jpg",
            description: "Flirty, lightweight short skirt with a comfy fit — perfect for day or night.",
            price: "199.0",
            oldPrice: "3067",
            numberRemain: "10",
            totalNumber: "10",
        },
        {
            image: "./images/bbag.jpg",
            description: "Minimal, everyday short bag for your must-haves — stylish and easy to carry.",
            price: "20.0",
            oldPrice: "400",
            numberRemain: "4",
            totalNumber: "10",
        },
        {
            image: "./images/greyhiighheel.jpg",
            description: "Elite shite performance male jackert",
            price: "20.0",
            oldPrice: "30.0",
            numberRemain: "10",
            totalNumber: "10",
        },
    ];
    return (_jsx("section", { children: _jsx("div", { className: "flex justify-around gap-6", children: fProducts.map((fproduct, key) => (_createElement(FlashProduct, { ...fproduct, key: key }))) }) }));
}
export default FlashProducts;
