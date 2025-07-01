import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faSearch,faBell} from '@fortawesome/free-solid-svg-icons';

function Navigationbar() {

    return(
        <div className="navbar flex justify-between py-4 mt-4" >
            <img src="./images/bblogo-removebg-preview (1).png" className='w-1/8' />
            <form action="\" className='mt-3'>
                <input type="text" className='inputText w-300 h-15 pl-25 rounded-lg capitalize text-2xl' name="" placeholder="find product on trade here" id="" />
                 <FontAwesomeIcon icon={faSearch} className='tuser text-grey-400 font-2xl relative right-290'/>
            </form>
            <div className=''>
                <FontAwesomeIcon icon={faShoppingCart} className='tuser pr-9 pt-6 text-grey-400 font-2xl'/>
                <FontAwesomeIcon icon={faBell} className='tuser text-grey-400 font-2xl'/>
            </div>
        </div>
    )
    
}

export default Navigationbar