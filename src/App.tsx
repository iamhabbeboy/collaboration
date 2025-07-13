import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FlashSale from "./components/FlashSale";
import "./App.css";
// import ForYou from './components/ForYouTop';
// import TodayProduct from "./components/TodayProduct";
import TodayCategories from "./components/TodayCategories";
import BestSelling from "./components/BestSelling";
import Footer from "./components/Footer";

function App() {
  // const [posts, setPosts] = useState<IPost[]>([]);
  // const fetchPosts = async () => {
  //   try {
  //     const response = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts?_limit=10");
  //     setPosts(response.data)
  //   } catch(e) {
  //     console.error(e)
  //   }
  // }
  // useEffect(() => {
  //   if(!posts.length) {
  //   fetchPosts()
  //   }
  // }, [posts])
  return (
    // <div className='container mx-auto mt-10 p-10 rounded-md'>
    // <CartItems/>

    <div className="container mx-auto px-10 py-5 w-full y-500 rounded-md">
      <Header />
      <Hero />
      <Categories />
      <FlashSale />
      <TodayCategories />
      <BestSelling />
      <Footer />
    </div>
  );
}

export default App;
