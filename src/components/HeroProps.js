import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import Hero from "./Hero";
function HeroProps() {
    const heroTexts = [
        {
            id: 1,
            heroTitle: "#shop with hapiness",
            heroMain: "Giving discounts on every items",
            heroSlogan: "the best online eshop",
        },
        // {
        //   hero_title: "#shop your favourite gifts",
        //   hero_main: "Giving you and your family unending satisfaction",
        //   hero_slogan: "the best online eshop"
        // },
        // {
        //   hero_title: "#Children gifts",
        //   hero_main: "Experince the childish in you",
        //   hero_slogan: "the best online eshop",
        // },
    ];
    return (_jsx("div", { children: heroTexts.map((heroText) => (_createElement(Hero, { ...heroText, key: heroText.id }))) }));
}
export default HeroProps;
