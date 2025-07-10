import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FlashSale from "./components/FlashSale";
import "./App.css";
import TodayProduct from "./components/TodayProduct";
import TodayCategories from "./components/TodayCategories";
import BestSelling from "./components/BestSelling";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto px-10 py-5 w-full y-500 rounded-md">
      <Header />
      <Hero />
      <Categories />
      <FlashSale />
      <TodayCategories />
      <TodayProduct />
      <BestSelling />
      <Footer />
    </div>
  );
}

export default App;
