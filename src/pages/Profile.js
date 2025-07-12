import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sidebar from '../components/Sidebar';
import SettingTopbar from '../components/SettingTopbar';
import Settings from '../components/Settings';
export default function App() {
    return (_jsxs("div", { className: "flex pt-3 mt-0 bg-gray-100 in-h-screen", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "flex-1 flex flex-col", children: [_jsx(SettingTopbar, {}), _jsx("div", { className: "p-4", children: _jsx(Settings, {}) })] })] }));
}
