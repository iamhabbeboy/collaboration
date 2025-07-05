import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBolt,faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import FlashProdcts from './FlashProducts'
function FlashSale(){
    return(
      <>
      <div className="p-4 flex justify-between bg=blue-400">

        <div className='flex gap-4 align-between'>

           <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faBolt} className="bg-gray-900 p-2 rounded-full text-white" />
                <h2 className="ml-3 font-bold text-lg">Flash Sale</h2>
              </div>
            </div>

          {/* Countdown Timer */}
            <div className="flex gap-6">
              {/* Hours */}
              <div className="flex items-center gap-1">
                <h3 className="font-extrabold bg-red-400 text-white p-2 rounded-full w-10 text-center">08</h3>
                <span className="font-bold text-xl">:</span>
              </div>

              {/* Minutes */}
              <div className="flex items-center gap-1">
                <h3 className="font-extrabold bg-red-400 text-white p-2 rounded-full w-10 text-center">17</h3>
                <span className="font-bold text-xl">:</span>
              </div>

              {/* Seconds */}
              <div className="flex items-center gap-1">
                <h3 className="font-extrabold bg-red-400 text-white p-2 rounded-full w-10 text-center">56</h3>
              </div>
            </div>
          </div>

            <div className="arrows">
                    <span className='bg-black text-white mr-3 p-2 rounded-md'>
                      <a href="http://"><FontAwesomeIcon icon={faArrowLeft} className='w-8 '/></a>
                      </span>
                    <span className='bg-black text-white p-2 rounded-md'>
                      <a href="http://"><FontAwesomeIcon icon={faArrowRight} className='w-15 text-lg'/></a>
                    </span>
            </div>
       </div>
       <FlashProdcts/>
       </>


    )
}

export default FlashSale