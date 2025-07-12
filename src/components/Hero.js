// import type { IHero } from "../types/IHero";
// const Hero: React.FC<IHero> = ({ heroTitle, heroMain, heroSlogan }) => {
//   console.log("Received props:", { heroTitle, heroMain, heroSlogan });
// function Hero(){
//   return (
//     <div className="my-7">
//       {/* <!-- 2. Hero Banner Section --> */}
//       <section className="hero-banner  flex justify-between flex-col md:flex-row items-center">
//         <div className="antialiased w-1/2 flex align-center justify-center flex-col">
//           <h3 className="text-2xl font-semibold text-gray-400 pt-12">
//             #Big Fashion Sale
//           </h3>
//           <h2 className="limited text-[4.2em]/27 mt-3 fonts-serif font-bold">
//             Limited Time Offer! <br />
//             Up to <span className="italic">50%</span> OFF!
//           </h2>
//           <p className="text-2xl font-bold text-gray-500 mt-5">
//             Redefine Your Everyday Style
//           </p>
//         </div>
//         <div className="hero-images w-1/2 bg-blue-500">
//           <img
//             src="/images/333.jpg"
//             className="h-120 object-fill w-full object-cover object-center"
//             alt="banner"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Hero;
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Hero = () => {
    return (_jsx("div", { className: "w-full max-w-full mx-auto my-7", children: _jsxs(Swiper, { pagination: { clickable: true }, modules: [Pagination, Autoplay], autoplay: { delay: 3000 }, loop: true, children: [_jsx(SwiperSlide, { children: _jsx("div", { className: "my-7 w-full", children: _jsxs("section", { className: "hero-banner  flex justify-between flex-col md:flex-row items-center w-full h-full", children: [_jsxs("div", { className: "antialiased w-1/2 flex align-center justify-center` flex-col", children: [_jsx("h3", { className: "text-2xl font-semibold text-gray-400 pt-12 text-center", children: "#Big Fashion Sale" }), _jsx("h2", { className: "limited text-[4.2em]/27 mt-3 fonts-serif font-bold text-center", children: "Fashion Finds Under $50" }), _jsx("p", { className: "text-2xl font-bold  text-center text-gray-500 mt-5", children: "Upgrade Your Gaming Gear" })] }), _jsx("div", { className: "hero-images w-1/2 bg-blue-500", children: _jsx("img", { src: "/images/333.jpg", className: "h-134 object-fill w-full object-cover object-center", alt: "banner" }) })] }) }) }), _jsx(SwiperSlide, { children: _jsx("div", { className: "my-7 w-full", children: _jsxs("section", { className: "hero-banner  flex justify-between flex-col md:flex-row items-center w-full h-full", children: [_jsxs("div", { className: "antialiased w-1/2 flex align-center justify-center flex-col", children: [_jsx("h3", { className: "text-2xl font-semibold text-gray-400 pt-12", children: "#Big Fashion Sale" }), _jsxs("h2", { className: "limited text-[4.2em]/27 mt-3 fonts-serif font-bold ", children: ["Limited Time Offer! ", _jsx("br", {}), "Up to ", _jsx("span", { className: "italic", children: "50%" }), " OFF!"] }), _jsx("p", { className: "text-2xl font-bold text-gray-500 mt-5", children: "Redefine Your Everyday Style" })] }), _jsx("div", { className: "hero-images w-1/2 bg-blue-500", children: _jsx("img", { src: "/images/zoe.jpg", className: "h-134 object-fill w-full object-cover object-center", alt: "banner" }) })] }) }) }), _jsx(SwiperSlide, { children: _jsx("div", { className: "my-7 w-full", children: _jsxs("section", { className: "hero-banner  flex justify-between flex-col md:flex-row items-center w-full h-full", children: [_jsxs("div", { className: "antialiased w-1/2 flex align-center justify-center flex-col text-center", children: [_jsx("h3", { className: "text-2xl font-semibold text-gray-400 pt-12", children: "#Big Fashion Sale" }), _jsxs("h2", { className: "limited text-[4.2em]/27 mt-3 fonts-serif font-bold text-center", children: ["Get more! ", _jsx("br", {}), _jsx("span", { className: "italic", children: "Pay Less" })] }), _jsx("p", { className: "text-2xl font-bold text-gray-500 mt-5 text-center", children: "Redefine Your Everyday Style" })] }), _jsx("div", { className: "hero-images w-1/2 bg-blue-500", children: _jsx("img", { src: "/images/32.jpg", className: "h-134 object-fill w-full object-cover object-center", alt: "banner" }) })] }) }) })] }) }));
};
export default Hero;
