//import Products from './components/Products';
import CartItem from './components/CartItem';
import "./App.css"


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
      <div className='mx-auto mt-10 rounded-md container p-10'> 
      <CartItem />
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
