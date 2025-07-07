import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faSearch,faBell} from '@fortawesome/free-solid-svg-icons';

function Navigationbar() {

    return(
        <div className="navbar flex justify-between w-full mb-5 py-5" >
            <img src="./images/bblogo-removebg-preview (1).png" className='w-1/8' />
            <form action="\" className='mt-3'>
                <input type="text" className='inputText w-250 h-10 pl-25 rounded-lg capitalize text-sm' name="" placeholder="find product on trade here" id="" />
                 <FontAwesomeIcon icon={faSearch} className='tuser text-grey-400 font-md relative text-md right-240'/>
            </form>
            <div className=''>
                <FontAwesomeIcon icon={faShoppingCart} className='tuser pr-9 pt-6 text-xl text-gray-500'/>
                <FontAwesomeIcon icon={faBell} className='tuser text-grey-400 text-xl text-gray-500'/>
            </div>
        </div>
    )
    
}

export default Navigationbar