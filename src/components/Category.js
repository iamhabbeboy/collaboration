import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Category = ({ name, image }) => {
    return (_jsxs("div", { className: "border-b border-gray-200 py-5", children: [_jsx("div", { className: `bg-gray-300 w-[80px] h-[80px] rounded-full mr-3 round object-center object-cover mx-auto`, style: { backgroundImage: `url('${image}')`, backgroundSize: "cover", border: "1px solid #000" } }), _jsx("h3", { className: "text-2xl text-center py-4 font-bold", children: name })] }));
};
export default Category;
