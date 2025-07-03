import "./checkout.css"
import logo from "../../assets/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBox, faCheck, faCircle, faLock, faTag, faTruck } from "@fortawesome/free-solid-svg-icons"

const Checkout = () => {
    return (
        <section>
             <section className="container">
        <nav className="navbar">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="lin">
                <div className="c1">
                    <FontAwesomeIcon  icon={faCheck} /> Cart </div>
                <div className="c2">
                    <FontAwesomeIcon  icon={faCheck} />Review</div>
                <div className="c3"> <FontAwesomeIcon  icon={faCircle} /> Checkout
                </div>
            </div>
        </nav>
    </section>
    <div className="item">
        <div className="item1">
            <main className="checkout-content">
                <section className="shipping-info">
                    <h2>Checkout </h2>
                    <h3>Shipping Information</h3>

                    <div className="delivery-options">
                        <button className="delivery-option active">
                         <FontAwesomeIcon  icon={faTruck} /> Delivery
                    </button>
                        <button className="delivery-option">
                         <FontAwesomeIcon  icon={faBox} /> Pick up
                    </button>
                    </div>

                    <form className="shipping-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full name *</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Enter full name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address *</label>
                            <input type="email" id="email" name="email" placeholder="Enter email address" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone number *</label>
                            <div className="phone-input">
                                <span className="country-code">🇳🇬 +234</span>
                                <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">Country *</label>
                            <select id="country" name="country" required>
                            <option value="">Choose country</option>
                            <option value="nigeria">Nigeria</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="state">State *</label>
                            <select id="state" name="state" required>
                            <option value="">Choose state</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <div className="form-group half-width">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" placeholder="Enter city" />
                            </div>
                            <div className="form-group half-width">
                                <label htmlFor="zipCode">ZIP Code</label>
                                <input type="text" id="zipCode" name="zipCode" placeholder="Enter ZIP code" />
                            </div>
                        </div>

                        <div className="htmlForm-group checkbox-group">
                            <input type="checkbox" id="terms" name="terms" required />
                            <label htmlFor="terms">I have read and agree to the Terms and Conditions.</label>
                        </div>
                    </form>
                </section>
</main>

        </div>

        <div className="item2">
            <section className="review-cart">
                <h3>Review your cart</h3>

                <div className="cart-item">
                    <img src="https://img.kwcdn.com/product/fancy/cad20e75-5430-49ce-b5e7-a394225423f6.jpg?imageView2/2/w/800/q/70/format/webp" alt="DuoComfort Sofa Premium" />
                    <div className="item-details">
                        <p className="item-name">DuoComfort Sofa Premium</p>
                        <p className="item-quantity">1x</p>
                    </div>
                    <p className="item-price">$20.00</p>
                </div>

                <div className="cart-item">
                    <img src="https://media.istockphoto.com/id/517381328/photo/folding-brazier-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=_rNgKwmaH-gICM2ZppiI6OzCfVn2_TFCFcVjYvIXNdA=" alt="" />
                    <div className="item-details ">
                        <p className="item-name ">IronOne Desk</p>
                        <p className="item-quantity ">1x</p>
                    </div>
                    <p className="item-price ">$25.00</p>
                </div>

                <div className="discount-code ">
                   <FontAwesomeIcon  icon={faTag} /> Discount code
                    <a href="# " className="apply-link ">Apply</a>
                </div>

                <div className="order-summary ">
                    <div className="summary-row ">
                        <span>Subtotal</span>
                        <span>$45.00</span>
                    </div>
                    <div className="summary-row ">
                        <span>Shipping</span>
                        <span>$5.00</span>
                    </div>
                    <div className="summary-row ">
                        <span>Discount</span>
                        <span>-$10.00</span>
                    </div>
                    <div className="summary-row total ">
                        <span>Total</span>
                        <span>$40.00</span>
                    </div>
                </div>

                <button className="pay-now-btn ">Pay Now</button>

                <div className="secure-checkout ">
                    <FontAwesomeIcon  icon={faLock} /> Secure Checkout - SSL Encrypted
                    <p>Ensuring your financial and personal details are secure during every transaction.</p>
                </div>
            </section>
        </div>
        </div>
        </section>
    )
}
export default Checkout;