import React from 'react'

const second_hero = () => {
    return (
        <div className=' bg-[#faf6ef]  w-full md:flex hidden justify-evenly text-center  items-center place-self-center  '>
            <div className=' text-[30px] w-1/3 p-20 '>
                <h1 className=' md:w-full w-[60%]'> 90% <br />
                    of all orders are <br />produced locally
                </h1>
            </div>
            <div className=' text-[30px] w-1/3 p-20'>
                <h1  className=' md:w-full w-[60%]'>90% <br />
                    of orders arrive <br />within 5 days of ordering 
                </h1>
            </div>
            <div className=' text-[30px] w-1/3 p-20'>
                <h1  className=' md:w-full w-[60%]'>140+ <br />
                    print providers across <br />32 countries
                </h1>
            </div>
        </div>
    )
}

export default second_hero