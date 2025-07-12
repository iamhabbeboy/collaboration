import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, // Dashboard
faEnvelope, // Message
faChartLine, // Analytics
faWallet, // Wallet
faExchangeAlt, // Transaction
faUserFriends, // Recipient
faCog, // Settings
faQuestionCircle, // Help
faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
export default function Sidebar() {
    return (_jsx("div", { className: "pl-3 pr-1", children: _jsxs("aside", { className: "pl-3 pr-0 w-64 leading-relaxed bg-white rounded-t-lg shadow-md space-y-6", children: [_jsxs("div", { className: "p-0 m-0", children: [_jsx("div", { className: "mt-0 mb-0 h-12 bg-white border-0 rounded-t-lg border-b border-gray-300", children: _jsx("h1", { className: "pt-2 text-2xl text-gray-600 text-center -font-bold", children: "WAYLINE" }) }), _jsxs("nav", { className: "px-5 pl-10 text-sm font-medium text-gray-700 bg-white space-y-2", children: [_jsx("br", {}), _jsxs("a", { href: "#", className: "block mb-5 mt-5 hover:text-blue-600", children: [_jsx(FontAwesomeIcon, { icon: faTachometerAlt, className: "mr-2 text-gray-600" }), "Dashboard"] }), _jsxs("a", { href: "#", className: "block mb-5 hover:text-blue-600", children: [_jsx(FontAwesomeIcon, { icon: faEnvelope, className: "mr-2 text-gray-600" }), "Message"] }), _jsxs("a", { href: "#", className: "block mb-5 hover:text-blue-600", children: [_jsx(FontAwesomeIcon, { icon: faWallet, className: "mr-2 text-gray-600" }), "My Wallets"] }), _jsxs("a", { href: "#", className: "block mb-5 hover:text-blue-600", children: [_jsx(FontAwesomeIcon, { icon: faExchangeAlt, className: "mr-2 text-gray-600" }), "Transactions"] }), _jsxs("a", { href: "#", className: "block mb-5 hover:text-blue-600", children: [_jsx(FontAwesomeIcon, { icon: faUserFriends, className: "mr-2 text-gray-600" }), "Recipients"] }), _jsxs("a", { href: "#", className: "block mb-5 hover:text-blue-600", children: [_jsx(FontAwesomeIcon, { icon: faChartLine, className: "mr-2 text-gray-600" }), "Analytics"] }), _jsxs("a", { href: "#", className: "block mb-5 text-blue-600 font-semibold", children: [_jsx(FontAwesomeIcon, { icon: faCog, className: "mr-2 text-gray-600" }), "Settings"] })] })] }), _jsxs("div", { className: "mt-55 p-5 text-sm text-gray-500 bg-white space-y-2", children: [_jsxs("a", { href: "#", className: "block mb-5 text-gray-500 \\text-xs", children: [_jsx(FontAwesomeIcon, { icon: faQuestionCircle, className: "mr-2 text-gray-600" }), "Get Help"] }), _jsxs("a", { href: "#", className: "block mb-5 text-xs text-gray-500", children: [_jsx(FontAwesomeIcon, { icon: faSignOutAlt, className: "mr-2 text-gray-600" }), "Logout"] })] })] }) }));
}
