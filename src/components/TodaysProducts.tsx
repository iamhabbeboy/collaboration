import type { IToday } from '../types/IToday'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const TodaysProducts:React.FC<IToday> = ({image,description,ratings,numberSold,price,oldPrice}) =>{
    return(
    <div className="border-b border-gray-200 rounded-3xl shadow-md">
    <div className={`bg-gray-300 h-[250px] px-8  w-[100%] mx-auto rounded-t-3xl`} style={{backgroundImage: `url('${image}')`, backgroundSize: "cover"}}>
      <FontAwesomeIcon icon={faHeart} className='tuser font-2xl relative p-3 w-8 h-1 bg-red-900 font-white-100 rounded-full left-70 mt-5'/> 
      </div>
        <h3 className="text-2xl text-justify px-4 font-md font-semibold capitalize">{description}</h3>
        <div className='flex'>
           <FontAwesomeIcon icon={faStar} className='font-3xl p-3 mt-3 text-yellow-400'/> 
           <h3 className="text-2xl text-left py-4 font-semibold">{ratings}</h3>
           <h4 className="text-2xl px-4 py-4 font-bold text-grey-200">{numberSold}k <span className='text-base'>sold</span> </h4>
        </div>
        <div className='flex'>
          <h3 className="text-2xl text-center py-4 font-bold ml-3">RP{price}</h3>
        <h4 className="text-md text-center py-4 font-md ml-3 text-red-700">RP{oldPrice}</h4>
        </div>
        
    </div>
    )
}

export default TodaysProducts;