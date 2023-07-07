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
        id: 1,
        icons: <BsFilter/>,
        name: "Filters"
    },
    {
        id: 2,
        icons: <AiOutlineSearch/>,
        name: "Search"
    },
    {
        id: 3,
        icons: <MdModeEditOutline/>,
        name: "Edit"
    },
    {
        id: 4,
        icons: <MdDelete/>,
        name: "Delete"
    },
]


const products = [
    {
        id: 1,
        image: "/assets/product1.png",
        name: "Apple Air Pods 2",
        price: "$600"
    }, {
        id: 2,
        image: "/assets/product2.png",
        name: "Samsung Smart Watch",
        price: "$600"
    }, {
        id: 3,
        image: "/assets/product3.png",
        name: "Apple Monitor Pro",
        price: "$600"
    }, {
        id: 4,
        image: "/assets/product4.png",
        name: "Apple Watch Series 4",
        price: "$600"
    }, {
        id: 5,
        image: "/assets/product5.png",
        name: "Google Pixel 4 XL",
        price: "$600"
    }, {
        id: 6,
        image: "/assets/product6.png",
        name: "Amazon Smart Speaker",
        price: "$600"
    }, {
        id: 7,
        image: "/assets/product7.png",
        name: "Apple MacBook Pro 16",
        price: "$600"
    }, {
        id: 8,
        image: "/assets/product8.png",
        name: "Apple iPad 10.2",
        price: "$600"
    }, {
        id: 9,
        image: "/assets/product9.png",
        name: "Microsoft Surface Book",
        price: "$600"
    }, {
        id: 10,
        image: "/assets/product10.png",
        name: "Google Nest",
        price: "$600"
    }, {
        id: 11,
        image: "/assets/product11.png",
        name: "Apple iMac Pro ",
        price: "$600"
    }, {
        id: 12,
        image: "/assets/product12.png",
        name: "Samsung Smart Watch",
        price: "$600"
    },
]


const graphCardData = [
    {
        text1: "Total Sales",
        text2: "$281.90",
        img: "/assets/Chart.svg",
        text3: "6 total orders",
        text4: "View report",
        btnText: "",
    },
    {
        text1: "Total Sessions",
        text2: "456",
        img: "/assets/Chart 2.svg",
        text3: "6 total orders",
        text4: "View report",
        btnText: "Live",
    },
    {
        text1: "Customer rate",
        text2: "5.43%",
        img: "/assets/Chart 3.svg",
        text3: "First Time",
        text4: "Returning",
        btnText: "",
    },
]


const delivaryData = [
    {
        id: 1,
        time: "11:32",
        text1: "New Category Added",
        text2: "«Mobile phones»",
    }, {
        id: 2,
        time: "11:21",
        text1: "New Product Added",
        text2: "«Apple iPhone 9»",
    }, {
        id: 3,
        time: "10:54",
        text1: "New Product Added",
        text2: "«Apple iPad Pro 12.9»",
    }, {
        id: 4,
        time: "09:45",
        text1: "New Product Added",
        text2: "«Apple iPad Pro 12.9»",
    }, {
        id: 5,
        time: "09:45",
        text1: "New Category Added",
        text2: "«Smart Watches»",
    }, {
        id: 6,
        time: "09:45",
        text1: "New Category Added",
        text2: "«Smart Watches»",
    },
]

export {popularProducts, headerIcons, products, graphCardData,delivaryData}