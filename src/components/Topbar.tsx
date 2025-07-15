import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';

function Topbar() {
  return (
    <div className="flex w-full justify-between relative">
        <div className='ftDownload flex justify-between py-5 bg-yellow-400 h-[30px]'>
            <FontAwesomeIcon icon={faUser} className='tuser font-4xl text-grey-400 mb-5 font-2xl absolute top-2'/>
              <h3 className='text-gray-400 font-bold text-xl bg-400-green pl-9 mb-5 absolute top-1'>
                Download Belibeli App
              </h3>
        </div>
        <div className='flex align-between gap-5'>
                <div className="space-x-3 ">
                    <a href="#" className="hover:underline text-gray-400 text-sm  font-bold font-hairline tracking-wide">Mitra BeliBeli</a>
                    <a href="#" className="hover:underline text-gray-400 text-sm  font-bold font-hairline tracking-wide">About BeliBeli</a>
                    <a href="#" className="hover:underline text-gray-400 text-sm  font-bold font-hairline tracking-wide">Promo</a>
                    <a href="#" className="hover:underline text-gray-400 text-sm  font-bold font-hairline tracking-wide">Beli Cano</a>
                </div>
                 <div className='tbsl'>
                        <a href="http://" className='signin text-md font-bold pr-5'>signUp</a> 
                         <a href="http://" className='signin text-md font-bold '>Login</a> 
                </div>
>>>>>>>>> Temporary merge branch 2
        </div>
        <div className="tbsl">
          <Link to="cart" className="signin text-xl font-bold pr-5">Cart</Link>
          <Link to="profile" className="signin text-xl font-bold pr-2">
            Profile
          </Link>
          <Link to="checkout" className="signin text-xl font-bold pr-2">
            Checkout
          </Link>
          <Link to="sign-in" className="signin text-xl font-bold">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
