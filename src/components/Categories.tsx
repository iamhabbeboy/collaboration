import Category from "./Category"
import type { ICategory } from "../types/ICategory";
// import AllCategories  from "./AllCategories";

const Categories = () =>{

    // const categories: ICategories[] =[
      const categories: ICategory[] =[
        {
        name: "T-Shirt",
        image: "./images/btshitrt.jpg",
    }, {
        name: "Jacket",
        image: "./images/bjack.jpg",
    },
     {
        name: "Jean",
         image: "images/32.jpg",
    },
     {
        name: "Skirt",
        image: "images/bjack.jpg",
    },{
        name: "Bags",
         image: "images/bbag.jpg",
    },{
        name: "Watches",
         image: "images/bwatches.jpg",
    }
    ,{
        name: "Shoes",
        image:"images/bshoe.jpg",
    }
    ,{
        name: "Caps",
         image: "images/bcap.jpg"
    },]

    return(
        <section className="flex justify-between">
            <div className="flex justify-between w-[90%] p-4">
                   {categories.map((category, key) => (
                    <Category {...category} key={key} />
                ))}
            </div>
            {/* <h1>Product</h1> */}
            {/* <div className='w-[10%] rounded-full border-1'> */}
                <a href="http://" className="rounded-full border-gray-300 w-[80px] h-[80px]  mt-10 ">
                      <img src="./images/4dots.png" className="mt-4 ml-3 w-[60px] h-[60px]  border-gray-300 "/>
                </a>
            {/* </div> */}
            
        </section>
    )
}

export default Categories