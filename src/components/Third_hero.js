import React from 'react'
import Third_her from '../data/Third_her.gif'
const Third_hero = () => {
    return (
        <section className=" flex md:flex-row  flex-col-reverse  bg-[#faf6ef]  ">

            <div className="md:w-[40%]  container p-12 flex flex-col items-start text-center gap-8 lg:ml-[100px]  ">
                <p className="text-2xl mt-4 text-left font-sans ">
                    For print on demand sellers
                </p>
                <h1 className="md:text-6xl text-gray-800  text-4xl text-left font-sans font-medium">
                    Accelerate business growth with innovative design tools and apps
                </h1>


                <p className=' text-2xl text-left text-gray-800  font-medium font-sans '>Turn See how our cutting-edge solutions can help you reach new customers and maximize your profits..</p>
                <div className=' flex gap-6 md:flex-row flex-col'>
                    <a href="#services" className="bg-black text-white px-4 py-2 rounded-3xl hover:text-gray-400  font-bold  w-[140px]">
                        Get started
                    </a>

                </div>


                <div>

                </div>



            </div>
            <div className=' flex items-center justify-center  '>
                <img src={Third_her} width={654}  alt='img' className=' ' />

            </div>
        </section>
    )
}

export default Third_hero