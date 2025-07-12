import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const BestSellings = ({ name, slogan, image1, image2, image3, price1, price2, price3, }) => {
    return (_jsx("div", { className: "gap-4 rounded-4xl shadow-md", children: _jsxs("div", { className: "mx-auto w-[100%] p-4 gap-6", children: [_jsxs("div", { className: "flex flex-col text-center p-5", children: [_jsx("h1", { className: "font-bold text-2xl", children: name }), _jsx("h3", { className: "text-gray-400 text-xl font-semibold", children: slogan })] }), _jsxs("div", { className: "", children: [_jsxs("div", { className: "flex flex-row gap-4 p-5", children: [_jsx("div", { className: `h-[130px] w-[30%] px-8  mx-auto rounded-3xl`, style: {
                                        backgroundImage: `url('${image1}')`,
                                        backgroundSize: "cover",
                                    } }), _jsx("div", { className: `h-[120px] px-8 w-[30%] mx-auto rounded-3xl`, style: {
                                        backgroundImage: `url('${image2}')`,
                                        backgroundSize: "cover",
                                    } }), _jsx("div", { className: `h-[120px] px-8  w-[30%] mx-auto rounded-3xl`, style: {
                                        backgroundImage: `url('${image3}')`,
                                        backgroundSize: "cover",
                                    } })] }), _jsxs("div", { className: "flex justify-around text-center", children: [_jsx("div", { children: _jsxs("h3", { className: "text-center text-md font-bold", children: ["Rp ", price1] }) }), _jsx("div", { children: _jsxs("h3", { className: "text-center text-md font-bold", children: ["Rp ", price2] }) }), _jsx("div", { children: _jsxs("h3", { className: "text-center text-md font-bold", children: ["Rp ", price3] }) })] })] })] }) }));
};
export default BestSellings;
