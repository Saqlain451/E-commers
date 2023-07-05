import {BsFilter} from "react-icons/bs";
import React from "react";
import {AiOutlineSearch} from "react-icons/ai";
import {MdDelete, MdModeEditOutline} from "react-icons/md";

const popularProducts = [
    {
        id: 1,
        image: "/assets/popular-product-1.png",
        rating: "(11.6k Reviews)",
        name: "Nike Running shoe",
        price: "$100",
        discountPrice: "500 Sold Out",
    },
    {
        id: 2,
        image: "/assets/popular-product-2.png",
        rating: "(11.6k Reviews)",
        name: "Nike shoe Airmax",
        price: "$115",
        discountPrice: "100 Sold Out",
    },
    {
        id: 3,
        image: "/assets/popular-product-3.png",
        rating: "(11.6k Reviews)",
        name: "Jordan Sneaker",
        price: "$50",
        discountPrice: "1500 Sold Out",
    },
    {
        id: 4,
        image: "/assets/popular-product-4.png",
        rating: "(11.6k Reviews)",
        name: "Nike Running shoe 2",
        price: "$220",
        discountPrice: "210 Sold Out",
    }
]

const headerIcons = [
    {
        id : 1,
        icons : <BsFilter/>,
        name : "Filtres"
    },
    {
        id : 2,
        icons : <AiOutlineSearch/>,
        name : "Search"
    },
    {
        id : 2,
        icons : <MdModeEditOutline/>,
        name : "Edit"
    },
    {
        id : 4,
        icons : <MdDelete/>,
        name : "Delete"
    },
]


export {popularProducts,headerIcons}