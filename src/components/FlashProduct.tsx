import type {IFlashSale} from "../types/IFlashSale"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';


const FlashProduct:React.FC<IFlashSale> = ({image,description,price,oldPrice,numberRemain,totalNumber}) =>{

return (
    
    <div className="flex flex-col text-center w-100  border  rounded-xl">
        <div className={`bg-gray-300 w-[100%] h-[300px] h-96 mb-4 w-96 mr-3 rounded-t-xl`} 
        style={{backgroundImage: `url('${image}')`, backgroundSize: "cover"}}>
        </div>
        <FontAwesomeIcon icon={faHeart} className='font-3xl relative p-7 w-5 h-2 text-grey-900 rounded-full bottom-75 left-80'/> 
        
        
        <p className="text-lg text-center font-bold capitalize text-justify px-3">{description}</p>   
        
        <span className="flex">
            <h2 className="text-2xl text-capitalize font-bold mb-4 px-3"> {price}</h2>
            <h3 className="text-xl ml-2 text-red-300 font-bold line-through">Rp{oldPrice}</h3>
        </span> 
        <span className="flex text-grey-300 text-lg">
            <h3 className="flex text-grey-300 text-2xl font-bold mr-2 px-3">{numberRemain}</h3>/
            <h3 className="flex text-gray-700 text-2xl font-bold px-3">{totalNumber}</h3>
        </span>
    </div>
);
}

export default FlashProduct;