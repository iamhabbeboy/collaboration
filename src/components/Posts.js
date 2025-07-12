import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Post = ({ title, body }) => {
    return (_jsxs("div", { className: "border-b border-gray-200 py-5", children: [_jsx("h2", { className: "text-gray-700 text-xl font-bold", children: title }), _jsx("p", { className: "text-gray-600", children: body })] }));
};
export default Post;
