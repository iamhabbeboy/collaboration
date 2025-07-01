function Hero () {

        return(
                <div>
                    {/* <!-- 2. Hero Banner Section --> */}
                        <section className="hero-banner flex justify-between">
                            <div className='w-1/2'>
                                <h2 className='text-5xl font-semibold text-gray-400 pt-18'>#Big Fashion  Sale</h2>
                                <h1 className='limited leading-snug'>Limited Time Offer! <br/>Up to 50% OFF!</h1>
                                <p className='text-6xl font-bold text-gray-500 mt-5'>Redefine Your Everyday Style</p>
                            </div>
           
                            <div className="hero-images w-1/2 bg-blue-500">
                            {/* <!-- Shirts and Shoes image --> */}
                            <img src='/images/333.jpg' className='h-120 object-fill w-full object-cover object-center' alt="banner" />
                            </div>
                        </section>
                </div>
            )
}

export default Hero;