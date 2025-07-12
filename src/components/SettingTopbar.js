import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function SettingTopbar() {
    return (_jsxs("header", { className: "flex justify-between items-center p-4 bg-white", children: [_jsx("input", { type: "text", placeholder: "Search", className: "p-2 w-3/4 border-gray-300 border rounded" }), _jsxs("div", { className: "flex items-center gap-4 ml-10 w-1/3", children: [_jsxs("span", { className: "w-4 h-4 bg-white rounded-full", children: [" ", _jsx(FontAwesomeIcon, { icon: faEnvelope, className: "mr-2 text-gray-600" })] }), _jsxs("span", { className: "w-4 h-4 bg-white rounded-full", children: [" ", _jsx(FontAwesomeIcon, { icon: faBell, className: "mr-2 text-gray-600" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("img", { src: "https://i.pravatar.cc/40", className: "w-8 h-8 rounded-full" }), _jsx("span", { className: "text-sm font-semibold", children: "Ola Wale" })] })] })] }));
}
