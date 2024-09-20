import React from 'react'
import connect from '../data/connect.gif'
const Fourth_hero = () => {
    return (
        <section className=" flex md:flex-row   flex-col    ">
            <div className=' flex items-center justify-center  md:w-[60%]  '>
                <img src={connect} alt='img' className=' md:w-[70%] w-[75%]' />

            </div>

            <div className="md:w-[50%]  container p-12 flex  flex-col items-ce text-center gap-8   ">
                <p className="text-2xl mt-4 text-left font-sans ">
                For print producers
                </p>
                <h1 className="text-6xl    text-left font-sans font-medium">
                GelatoConnect
                </h1>


                <p className=' text-2xl text-left font-medium font-sans '>Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</p>
                <div className=' flex gap-6 md:flex-row flex-col'>
                    <a href="#services" className="bg-black text-white px-4 py-2 rounded-3xl hover:text-gray-400  font-bold  w-[140px]">
                        Learn more
                    </a>

                </div>


                <div>

                </div>



            </div>

        </section>
    )
}

export default Fourth_hero