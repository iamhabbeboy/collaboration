import Category from "./Category"
import type { ICategory } from "../types/ICategory";


const Categories = () => {
  
  const categories = [
    {
      name: "T-Shirt",
      image: "./images/btshitrt.jpg",
    },
    {
      name: "Jacket",
      image: "./images/bjack.jpg",
    },
    {
      name: "Jean",
      image: "images/32.jpg",
    },
    {
      name: "Skirt",
      image: "images/bjack.jpg",
    },
    {
      name: "Bags",
      image: "images/bbag.jpg",
    },
    {
      name: "Watches",
      image: "images/bwatches.jpg",
    },
    {
      name: "Shoes",
      image: "images/bshoe.jpg",
    },
    {
      name: "Caps",
      image: "images/bcap.jpg",
    },
  ];
      const categories: ICategory[] =[
        {
        name: "T-Shirt",
        image: "./images/btshitrt.jpg",
    }, {
        name: "Jacket",
        image: "./images/bjack.jpg",
    },
     {
        name: "Jean",
         image: "images/32.jpg",
    },
     {
        name: "Skirt",
        image: "images/bjack.jpg",
    },{
        name: "Bags",
         image: "images/bbag.jpg",
    },{
        name: "Watches",
         image: "images/bwatches.jpg",
    }
    ,{
        name: "Shoes",
        image:"images/bshoe.jpg",
    }
    ,{
        name: "Caps",
         image: "images/bcap.jpg"
    },]


export default Categories;

