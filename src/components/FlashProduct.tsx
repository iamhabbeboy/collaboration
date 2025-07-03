import type {IFlashSale} from "../types/IFlashSale"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';


const FlashProduct:React.FC<IFlashSale> = ({image,description,price,oldPrice,numberRemain,totalNumber}) =>{

return (
    
    <div className="border-b flex flex-col text-center w-100 bg-red py-5">
        <div className={`bg-gray-300 w-[100%] h-[300px] h-96 mb-4 w-96 mr-3 round`} style={{backgroundImage: `url('${image}')`, backgroundSize: "cover"}}>
        </div>
        {/* <FontAwesomeIcon icon={faHeart} className='tuser font-2xl relative p-3 w-8 h-1 bg-red-900 font-white-100 rounded-full left-5 bottom-20'/> */}
        
        
        <p className="text-2xl text-center font-medium capitalize text-justify">{description}</p>   
        
        <span className="flex">
            <h2 className="text-3xl text-capitalize font-bold mb-4"> {price}</h2>
            <h3 className="text-2xl ml-2 text-red-300 font-bold line-through">Rp{oldPrice}</h3>
        </span> 
        <span className="flex text-grey-300 text-lg">
            <h3 className="flex text-grey-300 text-2xl font-bold mr-2">{numberRemain}</h3>/
            <h3 className="flex text-gray-700 text-2xl font-bold ">{totalNumber}</h3>
        </span>
    </div>
);
}

export default FlashProduct;