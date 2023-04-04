import MPant1 from '../images/menpants1.jpeg'
import MPant2 from '../images/menpants2.webp'
import MTop1 from '../images/mentop1.webp'
import MTop2 from '../images/mentop2.webp'
import WPant1 from '../images/womenpant1.webp'
import WPant2 from '../images/womenpant2.webp'
import WTop1 from '../images/womenstop1.jpeg'
// import WTop2 from '../images/womenstop2.jpeg'
import WTop3 from '../images/womentop3.jpeg'

const data = {
    mproducts: [
        {
            id: 1,
            title: "Men's Jeans Black",
            image: MPant1,
            unitPrice: 25.00
        },
        {
            id: 2,
            title: "Men's Green Jogger",
            image: MPant2,
            unitPrice: 25.00
        },
        {
            id: 3,
            title: "Collard Shirt",
            image: MTop1,
            unitPrice: 15.00
        },
        {
            id: 4,
            title: "Men's Stripped Shirt",
            image: MTop2,
            unitPrice: 15.00
        }
    ],

    wproducts: [
        {
            id: 6,
            title: "Women's Jeans Black",
            image: WPant1,
            unitPrice: 25.00
        },
        {
            id: 7,
            title: "Green Cargos",
            image: WPant2,
            unitPrice: 25.00
        },
        {
            id: 8,
            title: "Red Stripped Shirt",
            image: WTop1,
            unitPrice: 15.00
        },
        // {
        //     id: 9,
        //     title: "White Cropped Sweatshirt",
        //     image: WTop2,
        //     unitPrice: 15.00
        // },
        {
            id: 10,
            title: "Corduroy Beige Jacket",
            image: WTop3,
            unitPrice: 15.00
        }
    ]
}

export default data;