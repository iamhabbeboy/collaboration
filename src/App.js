import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Categories from "./components/Categories";
import FlashSale from "./components/FlashSale";
import "./App.css";
import TodayCategories from "./components/TodayCategories";
import BestSelling from "./components/BestSelling";
import Footer from "./components/Footer";
function App() {
    return (_jsxs("div", { className: "container mx-auto px-10 py-5 w-full y-500 rounded-md", children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(FlashSale, {}), _jsx(TodayCategories, {}), _jsx(BestSelling, {}), _jsx(Footer, {})] }));
}
export default App;
