import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import Products from './components/Products';
// import "./App.css"
// function App() {
//   // const [posts, setPosts] = useState<IPost[]>([]);
//   // const fetchPosts = async () => {
//   //   try {
//   //     const response = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts?_limit=10");
//   //     setPosts(response.data)
//   //   } catch(e) {
//   //     console.error(e)
//   //   }
//   // }
//   // useEffect(() => {
//   //   if(!posts.length) {
//   //   fetchPosts()
//   //   }
//   // }, [posts])
//   return (
//       <div className='container mx-auto mt-10 p-10 rounded-md'>
//       <Products />
//         {/* <h1 className='text-indigo-400 text-2xl'> Posts </h1>
//         <div className='mt-5'>
//           {posts.map((post, key) => (
//           <Post {...post} key={key} />
//           ))}
//         </div> */}
//       </div>
//   )
// }
// export default App
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
    _jsxs("div", { className: "container mx-auto px-10 py-5 w-full y-500 rounded-md", children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Categories, {}), _jsx(FlashSale, {}), _jsx(TodayCategories, {}), _jsx(BestSelling, {}), _jsx(Footer, {})] }));
}
export default App;
