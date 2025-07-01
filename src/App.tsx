//import Products from './components/Products';
//import CartItem from './components/CartItem';
import "./App.css"
import CartItems from "./components/CartItems"



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
      <div className='container mx-auto mt-10 p-10 rounded-md'> 
      <CartItems/>
        {/* <h1 className='text-indigo-400 text-2xl'> Posts </h1>
        <div className='mt-5'>
          {posts.map((post, key) => (
          <Post {...post} key={key} />
          ))} 
        </div> */}
      </div>
  )
}

export default App
