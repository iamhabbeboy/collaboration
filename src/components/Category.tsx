// import type { ICategory } from "../types/ICategory"


const Category:React.FC<any> = ({name,image}) =>{

return (
    <div className="border-b border-gray-200 py-5">
    <div className={`bg-gray-300 w-[100px] h-[100px] rounded-full h-96 w-96 mr-3 round`} style={{backgroundImage: `url('${image}')`, backgroundSize: "cover"}}>
     </div>
        <h3 className="text-2xl text-center py-4 font-bold">{name}</h3>
    </div>
);
}

export default Category;