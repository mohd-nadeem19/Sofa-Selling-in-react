import React from 'react'

const Hero = () => {
    return (
        <div className='relative mt-8'>
            <div className="w-full">
                <img
                    className="w-full h-full object-cover"
                    src="https://s3-alpha-sig.figma.com/img/98fb/219f/a11f805aade2224f1d6658764a2395df?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z8EkfJ4HNnNFDcpx7OLJtIMdguamZVdr8emyeIr0awvbiNdKEJ0Fgkb0~Vfu8PPH5whViWyX7YKuzmvyaSH09Ov8Y0h5AXieH0iYyc5ZvIwl3ZdeepCAg6Mru-22jhKhmM4lkyPS8E3EEACfOFAjQ9VJ~T~-92wFNT0~iAwS-icb60Toyg1Pq783ZCQp5vzqRUjTz7vQH~6RNuv~GALSntlX5XCTOz4K9uuZRGt-5V5awqUDCtSDb1gNAu7X0UTMCOqljcO-60H4C9VaND52QZT3vmBdwkj1yJVhrz-e1bvIOPPASziBDlSDCODSJ~64AUxlMKukZ8EBLhbGYTXUkg__"
                    alt=""
                />
            </div>
            <div className='absolute top-[400px] left-[720px] p-6 w-[500px] h-[380px] rounded-lg bg-[#FFF3E3]'>
                <p className='font-Poppins font-[600] text-[16px] text-[#333333]'>New Arrival</p>
                <h1 className='font-poppins font-[700] text-[52px] text-[#B88E2F] w-[400px]'>Discover Our New Collection</h1>
                <p className='font-poppins font-[500] text-[18px] text-[#333333] w-[430px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <div className='bg-[#B88E2F] mt-6 w-[130px] h-[60px]  text-white font-poppins font-[400] text-center pt-4 uppercase'>
                    BUY Now
                </div>
            </div>
        </div>
    )
}

export default Hero