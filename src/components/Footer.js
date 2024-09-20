import React, { useState } from 'react';
import logo2 from '../data/logo2.svg';
import ig from '../data/ig.svg';
import fb from '../data/fb.svg';
import tt from '../data/tt.svg';
import li from '../data/li.svg';
import yt from '../data/yt.svg';
import as from '../data/as.svg';
import ps from '../data/ps.svg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for dropdown arrows
import '../footer.css';

const Footer = () => {
    // State for handling dropdowns in smaller screens
    const [dropdowns, setDropdowns] = useState({
        printOnDemand: false,
        integrations: false,
        startSelling: false,
        company: false,
    });

    // Toggle the dropdowns
    const toggleDropdown = (section) => {
        setDropdowns((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className='bg-black items-center px-36 text-sm text-gray-400 font-light'>
            <div className='flex w-full justify-between py-8 '>
                <div className='items-center justify-center flex'>
                    <img src={logo2} className='mr-20' width={200} />
                </div>
                <div className='md:flex gap-5 items-center justify-center hidden'>
                    <h2 className='text-white'>Find Gelato on:</h2>
                    <img src={ig} className='m-3' />
                    <img src={fb} className='m-3' />
                    <img src={tt} className='m-3' />
                    <img src={li} className='m-3' />
                    <img src={yt} className='m-3' />
                </div>
            </div>

            <div className='flex flex-wrap md:flex-row flex-col items-start justify-evenly'>
                {/* First Section */}
                <div className='md:w-[30%] flex flex-col gap-4 '>
                    <p className='text-white'>
                        Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
                    </p>
                    <a href="#services" className="bg-white text-black border-2 px-4 py-2 rounded-3xl text-sm hover:bg-gray-300 font-bold w-[120px]">
                        Get started
                    </a>
                    <p className='text-lg'>Get the app</p>
                    <div className='flex md:flex-col gap-4'>
                        <img src={ps} width={150} />
                        <img src={as} width={150} />
                    </div>
                </div>

                {/* Dropdown Sections */}
                {/* Print on Demand */}
                <div className='md:w-[15%] flex flex-col gap-1 my-4 md:my-0 w-[50%]'>
                    <div className="flex justify-between items-center md:block">
                        <h1 className="flex  font-bold text-xl items-center" onClick={() => toggleDropdown('printOnDemand')}>
                            Print on demand
                            <span className="ml-2 md:hidden">{dropdowns.printOnDemand ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </h1>
                    </div>
                    {/* Dropdown content */}
                    <div className={`${dropdowns.printOnDemand ? 'block' : 'hidden'} md:block`}>
                        <p>What is print on demand?</p>
                        <p>Product catalog</p>
                        <p>Shipping and delivery</p>
                        <p>Dropshipping products</p>
                        <p>Pro sellers</p>
                        <p>White label products</p>
                        <p>Returns policy</p>
                        <p>Global, yet local</p>
                        <p>Sustainability</p>
                        <p>Support</p>
                    </div>
                </div>

                {/* Integrations */}
                <div className='md:w-[15%] flex flex-col gap-1 my-4 md:my-0 w-[50%]'>
                    <div className="flex justify-between items-center md:block">
                        <h1 className="flex  font-bold text-xl items-center" onClick={() => toggleDropdown('integrations')}>
                            Integrations
                            <span className="ml-2 md:hidden">{dropdowns.integrations ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </h1>
                    </div>
                    {/* Dropdown content */}
                    <div className={`${dropdowns.integrations ? 'block' : 'hidden'} md:block`}>
                        <p>Shopify</p>
                        <p>Etsy</p>
                        <p>WooCommerce</p>
                        <p>Wix</p>
                        <p>Squarespace</p>
                        <p>BigCommerce</p>
                        <p>API</p>
                    </div>
                </div>

                {/* Start Selling */}
                <div className='md:w-[15%] flex flex-col gap-1 my-4 md:my-0 w-[50%]'>
                    <div className="flex justify-between items-center md:block">
                        <h1 className="flex  font-bold text-xl items-center" onClick={() => toggleDropdown('startSelling')}>
                            Start selling
                            <span className="ml-2 md:hidden">{dropdowns.startSelling ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </h1>
                    </div>
                    {/* Dropdown content */}
                    <div className={`${dropdowns.startSelling ? 'block' : 'hidden'} md:block`}>
                        <p>Embroidery</p>
                        <p>Print on demand t-shirts</p>
                        <p>Print on demand hoodies</p>
                        <p>Print on demand posters</p>
                        <p>Print on demand canvas</p>
                        <p>Print on demand calendars</p>
                        <p>Print on demand mugs</p>
                        <p>Custom products</p>
                        <p>Custom clothing</p>
                        <p>Custom merchandise</p>
                        <p>Custom phone cases</p>
                        <p>Print on demand Europe</p>
                        <p>Print on demand UK</p>
                        <p>Print on demand France</p>
                        <p>Print on demand Canada</p>
                        <p>Merch maker</p>
                    </div>
                </div>

                {/* Company */}
                <div className='md:w-[15%] flex flex-col gap-1 my-4 md:my-0 w-[50%]'>
                    <div className="flex justify-between items-center md:block">
                        <h1 className="flex  font-bold text-xl items-center" onClick={() => toggleDropdown('company')}>
                            Company
                            <span className="ml-2 md:hidden">{dropdowns.company ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </h1>
                    </div>
                    {/* Dropdown content */}
                    <div className={`${dropdowns.company ? 'block' : 'hidden'} md:block`}>
                        <p>GelatoConnect</p>
                        <p>About Gelato</p>
                        <p>Leadership team</p>
                        <p>Board & investors</p>
                        <p>Newsroom</p>
                        <p>Blog</p>
                        <p>Customer Stories</p>
                        <p>Partners</p>
                        <p>Careers</p>
                        <p>Affiliates program</p>
                    </div>

                   

                </div>
            </div>
            <div className=' flex  flex-col  gap-4  justify-between md:hidden'>
                        <div>
                            <h2 className='text-white text-xl'>Find Gelato on:</h2>
                        </div>
                        <div className=' flex gap-10 '>
                            <img src={ig} className='m-3' />
                            <img src={fb} className='m-3' />
                            <img src={tt} className='m-3' />
                            <img src={li} className='m-3' />
                            <img src={yt} className='m-3' />
                        </div>
                    </div>
        </div>
    );
};

export default Footer;
