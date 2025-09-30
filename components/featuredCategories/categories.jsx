import React from 'react'
import Image from 'next/image'


const CategoriesHearder = () => {

    const listCategories = [
        {
            id: 1,
            name: "Laptops",
            image: "/Featured-icon/file.svg"
        },
        {
            id: 2,
            name: "Phones",
            image: "/Featured-icon/phone.svg"
        },
        {
            id: 3,
            name: "HeadPhones",
            image: "/Featured-icon/headphone.svg"
        },
        {
            id: 4,
            name: "Mouse",
            image: "/Featured-icon/mouse.svg"
        },

        {
            id: 5,
            name: "keyboard",
            image: "/Featured-icon/keyboard.svg"
        },

    ];
    return (

        <div>
            <p className="text-2xl font-medium">Featured categories</p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mt-4'>
                {listCategories.map((category) => (
                    <div key={category.id} >
                        <div className='p-4 rounded-lg hover:shadow-lg cursor-pointer hover:text-orange-500 hover:scale-110 transition duration-300 flex flex-col items-center'>
                            <Image src={category.image}
                                alt={category.name}
                                width={150}
                                height={150}
                                className="mx-auto"
                            />
                            <p className='font-bold text-center'>{category.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoriesHearder
