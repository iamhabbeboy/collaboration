import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';

function Topbar() {
  return (
    <div className="text-sm text-gray-600 flex justify-between px-2 py-3">
        <div className='ftDownload flex justify-between'>
            <FontAwesomeIcon icon={faUser} className='tuser text-grey-400 font-2xl'/>
            <h3 className='text-gray-400 font-bold text-3xl pl-5'>Download Belibeli App</h3>
        </div>

        <div className='flex align-between gap-5'>
              <div className="space-x-3 ">
                    <a href="#" className="hover:underline text-gray-600 text-2xl  font-semibold font-hairline">Mitra BeliBeli</a>
                    <a href="#" className="hover:underline text-gray-600 text-2xl  font-semibold font-hairline">About BeliBeli</a>
                    <a href="#" className="hover:underline text-gray-600 text-2xl  font-semibold font-hairline">Promo</a>
                    <a href="#" className="hover:underline text-gray-600 text-2xl  font-semibold font-hairline">Beli Cano</a>
                </div>
                 <div className='tbsl'>
                        <a href="http://" className='signin text-2xl font-bold pr-5'>sign Up</a> 
                         <a href="http://" className='signin text-2xl font-bold '>Login</a> 
                </div>
        </div>
      
    </div>
  );
}

export default Topbar