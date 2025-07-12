import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import Category from "./Category";
// import AllCategories  from "./AllCategories";
const Categories = () => {
    // const categories: ICategories[] =[
    const categories = [
        {
            name: "T-Shirt",
            image: "./images/btshitrt.jpg",
        }, {
            name: "Jacket",
            image: "./images/bjack.jpg",
        },
        {
            name: "Jean",
            image: "images/32.jpg",
        },
        {
            name: "Skirt",
            image: "images/bjack.jpg",
        }, {
            name: "Bags",
            image: "images/bbag.jpg",
        }, {
            name: "Watches",
            image: "images/bwatches.jpg",
        },
        {
            name: "Shoes",
            image: "images/bshoe.jpg",
        },
        {
            name: "Caps",
            image: "images/bcap.jpg"
        },
    ];
    return (_jsxs("section", { className: "flex justify-between", children: [_jsx("div", { className: "flex justify-between w-[90%] p-4", children: categories.map((category, key) => (_createElement(Category, { ...category, key: key }))) }), _jsx("a", { href: "http://", className: "rounded-full border-gray-300 w-[80px] h-[80px]  mt-10 ", children: _jsx("img", { src: "./images/4dots.png", className: "mt-4 ml-3 w-[60px] h-[60px]  border-gray-300 " }) })] }));
};
export default Categories;
