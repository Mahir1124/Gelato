import React from 'react';
import hero_section_image from '../data/hero_section_image.webp';
import hero_small from '../data/hero_small.webp'
import shopify from '../data/shopify_monotone_black.svg'
import star from '../data/star.svg'
const HeroSection = () => {
  return (
    <section className=" pt-[100px] flex md:flex-row  flex-col-reverse md:pt-44 bg-[#faf6ef] md:bg-white">

      <div className="md:w-[50%]  container p-12 flex flex-col items-start text-center gap-6 lg:ml-[100px]  ">
        <h1 className="text-6xl    text-left font-sans font-medium">
          Print on demand <br /> for your
          <br />ecommerce
          <br /> business
        </h1>
        <p className="text-2xl mt-4 text-left font-sans ">
          Sign up for free and only pay for what you sell
        </p>

        <p className=' text-md text-left font-thin font-sans '>Turn your passion into profit with the world's largest print on demand network.</p>
        <div className=' flex gap-6 md:flex-row flex-col'>
          <a href="#services" className="bg-black text-white px-4 py-2 rounded-3xl hover:text-gray-400  font-bold  w-[180px]">
            Get started for free
          </a>
          <a href="#services" className="bg-white text-black border-2 px-4 py-2 rounded-3xl hover:bg-gray-300 font-bold  w-[180px]">
            See out products
          </a>
        </div>
        <div className='flex flex-col  items-start gap-3 justify-start'>
          <img src={shopify} alt='img' width={200} />
          <div className=' flex gap-1.5'> 
            <img src={star} alt='img' width={22} />
            <img src={star} alt='img' width={22} />
            <img src={star} alt='img' width={22} />
            <img src={star} alt='img' width={22} />
            <img src={star} alt='img' width={22} />
            <p className=' text-lg ml-[5px]'>
              4.8 / 5
            </p>
            
          </div>
          <p className='text-md font-thin font-sans'>based on 910 reviews</p>
         
        </div>

        <div>

        </div>



      </div>
      <div className=' flex items-center justify-center  '>
        <img src={hero_section_image} width={554} height={480} alt='img' className=' hidden md:block' />
        <img src={hero_small} width={554} height={480} alt='img' className='md:hidden ' />
      </div>
      
    </section>
  );
};

export default HeroSection;
