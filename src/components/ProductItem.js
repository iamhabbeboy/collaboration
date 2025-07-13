import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ProductItem = ({ image, price }) => (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("img", { src: image, alt: "product", className: "w-16 h-16 object-cover rounded-md" }), _jsx("p", { className: "text-xs font-semibold text-gray-700", children: price })] }));
export default ProductItem;
