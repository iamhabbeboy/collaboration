function Hero () {

        return (
          <div className="my-7">
            {/* <!-- 2. Hero Banner Section --> */}
            <section className="hero-banner  flex justify-between">
              <div className="antialiased w-1/2 flex align-center justify-center flex-col">
                <h3 className="text-2xl font-semibold text-gray-400 pt-15">
                  #Big Fashion Sale
                </h3>
                <h2 className="limited text-[4.5em]/27 mt-3 font-bold">
                  Limited Time Offer! <br />
                  Up to <span className="italic">50%</span> OFF!
                </h2>
                <p className="text-2xl font-bold text-gray-500 mt-5">
                  Redefine Your Everyday Style
                </p>
              </div>

              <div className="hero-images w-1/2 bg-blue-500">
                <img
                  src="/images/333.jpg"
                  className="h-120 object-fill w-full object-cover object-center"
                  alt="banner"
                />
              </div>
            </section>
          </div>
        );
}

export default Hero;