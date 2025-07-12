import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import TodaysProducts from "./TodaysProducts";
function TodayProduct() {
    const productsToday = [
        {
            image: "./images/shoegrey.jpg",
            description: "Comfortable, stylish everyday shoes with a durable sole and sleek design.",
            ratings: "5.9",
            numberSold: "2090.0",
            price: "30000.0",
            oldPrice: "40000",
        },
        {
            image: "./images/greshirt.jpg",
            description: "Soft, breathable grey shirt with a clean, versatile look for any occasion.",
            ratings: "5.9",
            numberSold: "2090.0",
            price: "30000.0",
            oldPrice: "40000",
        },
        {
            image: "./images/hooddgrey.jpg",
            description: "Comfy, lightweight hoodie for everyday chill and style.",
            ratings: "5.9",
            numberSold: "2090.0",
            price: "200.0",
            oldPrice: "40000",
        },
        {
            image: "./images/capgrey.jpg",
            description: "Classic, adjustable cap for everyday wear and sun protection.",
            ratings: "5.9",
            numberSold: "2090.0",
            price: "30000.0",
            oldPrice: "40000",
        },
        {
            image: "./images/grsk.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings: "5.9",
            numberSold: "2090.0",
            price: "30000.0",
            oldPrice: "40000",
        },
        {
            image: "./images/greyhiighheel.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings: "5.9",
            numberSold: "2090.0",
            price: "30000.0",
            oldPrice: "40000",
        },
        {
            image: "./images/grsk.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings: "5.9",
            numberSold: "2090.0",
            price: "30000.0",
            oldPrice: "40000",
        },
        {
            image: "./images/greybag.jpg",
            description: "lorem 20 kdndkdknd jdnkdkdnkd ndndkdmkdn",
            ratings: "5.9",
            numberSold: "2090.0",
            price: "30000.0",
            oldPrice: "40000",
        },
    ];
    return (_jsx("section", { children: _jsx("div", { className: "flex justify-between grid grid-cols-4 gap-6 mt-5 p-4", children: productsToday.map((ptoday, key) => (_createElement(TodaysProducts, { ...ptoday, key: key }))) }) }));
}
export default TodayProduct;
