// import TopFooter from "./TopFooter";
// import BottomFooter from "./BottomFooter";

function Footer(){
    return(
        <section className="bg-gray-900 text-white p-6">
            <div className="text-center mb-6">
                <h2 className="italic text-lg">“Let’s Shop Beyond Boundaries”</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm max-w-6xl mx-auto">
                <div>
                     <h3 className="font-bold mb-2">BeliBeli.com</h3>
                      <p className="mb-4">"Let's Shop Beyond Boundaries"</p>
                </div>
                <div>
                     <h4 className="font-semibold mb-2">BeliBeli</h4>
                        <ul className="space-y-1 text-gray-400">
                            <li>About BeliBeli</li>
                            <li>Career</li>
                            <li>Mitra Blog</li>
                            <li>B2B Digital</li>
                        </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Buy</h4>
                    <ul className="space-y-1 text-gray-400">
                        <li>Bill & Top Up</li>
                        <li>BeliBeli COD</li>
                        <li>Mitra Blog</li>
                        <li>Promo</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Sell</h4>
                    <ul className="space-y-1 text-gray-400">
                        <li>Seller Education Center</li>
                        <li>Brand Index</li>
                        <li>Register Official Store</li>
                    </ul>
                </div>
                <div>
                     <h4 className="font-semibold mb-2">Guide and Help</h4>
                        <ul className="space-y-1 text-gray-400">
                            <li>BeliBeli Care</li>
                            <li>Term and Condition</li>
                            <li>Privacy</li>
                        <li>Mitra</li>
                        </ul>
                </div>
            </div>
                <div className="text-center mt-6 text-xs text-gray-400">
                  © 2001 - 2023, BeliBeli.com
                 </div>
        </section>
    )
}

export default Footer;

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-solid-svg-icons';

// function Footer(){
//   return (

    // <footer >
    //   {/* Tagline */}
    

    //   {/* Footer Content */}
    //   <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm max-w-6xl mx-auto">
    //     <div>
    //       <h3 className="font-bold mb-2">BeliBeli.com</h3>
    //       <p className="mb-4">"Let's Shop Beyond Boundaries"</p>
    //       <div className="flex space-x-3 text-lg">
    //         <FontAwesomeIcon icon={faFacebookF} />
    //         <FontAwesomeIcon icon={faTwitter} />
    //         <FontAwesomeIcon icon={faInstagram} />
    //         <FontAwesomeIcon icon={faYoutube} />
    //       </div>
    //     </div>

    //     <div>
    //       <h4 className="font-semibold mb-2">BeliBeli</h4>
    //       <ul className="space-y-1 text-gray-400">
    //         <li>About BeliBeli</li>
    //         <li>Career</li>
    //         <li>Mitra Blog</li>
    //         <li>B2B Digital</li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h4 className="font-semibold mb-2">Buy</h4>
    //       <ul className="space-y-1 text-gray-400">
    //         <li>Bill & Top Up</li>
    //         <li>BeliBeli COD</li>
    //         <li>Mitra Blog</li>
    //         <li>Promo</li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h4 className="font-semibold mb-2">Sell</h4>
    //       <ul className="space-y-1 text-gray-400">
    //         <li>Seller Education Center</li>
    //         <li>Brand Index</li>
    //         <li>Register Official Store</li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h4 className="font-semibold mb-2">Guide and Help</h4>
    //       <ul className="space-y-1 text-gray-400">
    //         <li>BeliBeli Care</li>
    //         <li>Term and Condition</li>
    //         <li>Privacy</li>
    //         <li>Mitra</li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Footer Bottom */}
    //   <div className="text-center mt-6 text-xs text-gray-400">
    //     © 2001 - 2023, BeliBeli.com
    //   </div>
    // </footer>
