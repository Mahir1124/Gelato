import React from 'react'
import wcg from '../data/wcg.webp'
const Wcg = () => {
    return (
        <div className=' mb-14'>
            <h1 className=' md:text-6xl text-4xl font-bold font-sans tracking-normal place-content-center flex mt-14 '>Why choose Gelato</h1>
            <div className=' flex items-center  md:mt-20 mt-5 md:flex-row flex-col'>
                <div className=' items-center justify-center flex md:w-[50%] '>
                    <img src={wcg} width={554} className=' flex self-center ' />
                </div>
                <div className='  md:w-[50%]  w-[70%] font-light md:mt-auto mt-[70px] '>
                    <div className='flex flex-col gap-1.5 md:w-[60%] w-full '>
                        <h1 className=' text-2xl font-normal font-s '>▻ World's largest print-on-demand network</h1>
                        <p className='text-lg font-light'>140+ print partners in 32 countries. Gelato is a truly global service.
                        </p>
                        <h1 className=' text-2xl font-normal font-s '>▻ Sell globally, produce locally</h1>
                        <p className='text-lg font-light'>Your products are produced close to your customers, wherever they are.
                        </p>
                        <h1 className=' text-2xl font-normal font-s '>▻ 100% free editing tools</h1>
                        <p className='text-lg font-light'>Create your custom products using our suite of free tools.</p>
                        <h1 className=' text-2xl font-normal font-s '>▻ 60+logistics partners</h1>
                        <p className='text-lg font-light'>Our global network of logistics partners ensures your products are delivered fast.

                        </p>
                        <h1 className=' text-2xl font-normal font-s '>▻ High-quality products</h1>
                        <p className='text-lg font-light'>We partner with the world's leading brands to ensure the best quality products.</p>
                        <h1 className=' text-2xl font-normal font-s '>▻ Endless creativity with Shutterstock Images</h1>
                        <p className='text-lg font-light'>Access millions of images and graphics to create unique products you can sell in your store.</p>
                        <h1 className=' text-2xl font-normal font-s '>▻ 1-click integration to the leading ecommerce platforms</h1>
                        <p className='text-lg font-light'>Connect your store to Gelato using our integrations with Shopify, Etsy and more.</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wcg