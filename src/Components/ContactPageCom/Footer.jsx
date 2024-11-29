// import React from 'react'

// const Footer = () => {
//     return (
//         <div className='w-full '>
//             <div className='border-t-2 border-[#000000] opacity-[17%]'></div>
//             <div className='flex pt-16 pl-12 gap-44 w-[1240px] h-[430px] '>
//                 <div>
//                     <h1 className='font-poppins font-[700] text-[24px] text-[#000000] '>Funiro.</h1>
//                     <p className='font-poppins font-[400] text-[16px] text-[#9F9F9F] w-[210px] mt-16 '>400 University Drive Suite 200 Coral Gables,
//                         FL 33134 USA</p>
//                 </div>

//                 <div className='flex gap-36 w-[710px] h-[312px] '>
//                     <div className='w-[70px] h-[312px] mt-2 '>
//                         <p className='font-poppins font-[500] text-[16px] text-[#9F9F9F] '>Links</p>
//                         <ul className='mt-[70px] space-y-6'>
//                             <li>Home</li>
//                             <li>Shop</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </div>

//                     <div className='w-[70px] h-[312px] '>
//                         <p className='font-poppins font-[500] text-[16px] text-[#9F9F9F] '>Help</p>
//                         <ul className='mt-[75px] space-y-6'>
//                             <li className='flex whitespace-nowrap'>Payment Options</li>
//                             <li>Returns</li>
//                             <li className='flex whitespace-nowrap'> Privacy Policies</li>

//                         </ul>
//                     </div>

//                     <div className='w-[290px] h-[100px]'>
//                         <p className='font-poppins font-[500] text-[16px] text-[#9F9F9F] '>Newsletter</p>

//                         <div className='flex justify-between mt-[75px]'>
//                             <div>
//                                 <span className='font-poppins font-[500] text-[16px] text-[#9F9F9F] '>Enter Your Email Address</span>
//                                 <div className='border-b-2 border-black w-[200px]'></div>
//                             </div>
//                             <div>
//                                 <span className='font-poppins font-[500] text-[14px]'>SUBSCRIBE</span>
//                                 <div className='border-b-2 border-black w-[70px]'></div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <div className='border-[1px] w-[1200px] ml-6 border-[#000000] opacity-[17%]'></div>

//             <p className='font-poppins font-[400] text-[16px] p-6 '>2023 furino. All rights reverved</p>

//         </div>
//     )
// }

// export default Footer

import React from 'react';

const Footer = () => {
    return (
        <div className="w-full">
            <div className="border-t-2 border-[#000000] opacity-[17%]"></div>
            <div className="flex flex-col sm:flex-row sm:gap-44 pt-16 px-12 w-full max-w-[1240px] mx-auto h-auto sm:h-[430px]">
                {/* कंपनी जानकारी */}
                <div className="sm:w-[300px] mb-8 sm:mb-0">
                    <h1 className="font-poppins font-[700] text-[24px] text-[#000000]">Funiro.</h1>
                    <p className="font-poppins font-[400] text-[16px] text-[#9F9F9F] w-[210px] mt-16 sm:mt-4">
                        400 University Drive Suite 200 Coral Gables, FL 33134 USA
                    </p>
                </div>

                {/* लिंक्स और हेल्प सेक्शन */}
                <div className="flex flex-col sm:flex-row sm:w-[710px] gap-12 sm:gap-36 mb-8 sm:mb-0">
                    <div className="w-full sm:w-[70px]">
                        <p className="font-poppins font-[500] text-[16px] text-[#9F9F9F]">Links</p>
                        <ul className="mt-6 sm:mt-[70px] space-y-6">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-[70px]">
                        <p className="font-poppins font-[500] text-[16px] text-[#9F9F9F]">Help</p>
                        <ul className="mt-6 sm:mt-[75px] space-y-6">
                            <li className="flex whitespace-nowrap">Payment Options</li>
                            <li>Returns</li>
                            <li className="flex whitespace-nowrap">Privacy Policies</li>
                        </ul>
                    </div>

                    {/* न्यूज़लेटर सेक्शन */}
                    <div className="w-full sm:w-[290px] h-auto sm:h-[100px]">
                        <p className="font-poppins font-[500] text-[16px] text-[#9F9F9F]">Newsletter</p>
                        <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-[75px]">
                            <div>
                                <span className="font-poppins font-[500] text-[16px] text-[#9F9F9F]">
                                    Enter Your Email Address
                                </span>
                                <div className="border-b-2 border-black w-[200px]"></div>
                            </div>
                            <div>
                                <span className="font-poppins font-[500] text-[14px]">SUBSCRIBE</span>
                                <div className="border-b-2 border-black w-[70px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* फूटर डिवाइडर */}
            <div className="border-[1px] w-full sm:w-[1200px] ml-6 border-[#000000] opacity-[17%]"></div>

            <p className="font-poppins font-[400] text-[16px] p-6 text-center sm:text-left">
                2023 Funiro. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
