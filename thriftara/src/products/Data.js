import MPant1 from '../images/menpants1.jpeg'
import MPant2 from '../images/menpants2.webp'
import MTop1 from '../images/mentop1.webp'
import MTop2 from '../images/mentop2.webp'
import WPant1 from '../images/womenpant1.webp'
import WPant2 from '../images/womenpant2.webp'
import WTop1 from '../images/womenstop1.jpeg'
import WSkirt from '../images/skirt.avif'
// import WTop2 from '../images/womenstop2.jpeg'
import WTop3 from '../images/womentop3.jpeg'

const data = {
    mproducts: [
        {
            id: 1,
            title: "Men's Jeans Black",
            image: MPant1,
            price: 25.00,
            description: "Men's jeans in black. Comfortable and stylish."
        },
        {
            id: 2,
            title: "Men's Green Jogger",
            image: MPant2,
            price: 25.00,
            description: "Green joggers. Good fitting, comfortable, great for exercise!"
        },
        {
            id: 3,
            title: "Collard Shirt",
            image: MTop1,
            price: 15.00,
            description: "Comfortable and stylish. Good for everyday wear."
        },
        {
            id: 4,
            title: "Men's Stripped Shirt",
            image: MTop2,
            price: 15.00,
            description: "Stripped shirt. Not too worn."
        }
    ],

    wproducts: [
        {
            id: 6,
            title: "Women's Jeans Black",
            image: WPant1,
            price: 25.00,
            description: "Women's jeans in black. Comfortable and stylish."
        },
        {
            id: 7,
            title: "Green Cargos",
            image: WPant2,
            price: 25.00,
            description: "Cargos. Barely worn."
        },
        {
            id: 8,
            title: "Red Stripped Shirt",
            image: WTop1,
            price: 15.00,
            description: "Has some wear and tear."
        },
        // {
        //     id: 9,
        //     title: "White Cropped Sweatshirt",
        //     image: WTop2,
        //     price: 15.00
        // },
        {
            id: 10,
            title: "Corduroy Beige Jacket",
            image: WTop3,
            price: 15.00,
            description: "New and untouched. Great for the spring/fall seasons."
        }
        // {
        //     id: 11,
        //     title: "Long Skirt",
        //     image: WSkirt,
        //     price: 20.99
        // }
    ]
}

export default data;