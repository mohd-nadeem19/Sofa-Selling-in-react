import React from 'react'
import { Link } from 'react-router-dom';

const OurProduct = (props) => {
  console.log(props.productPrps)
    return (
      <div className="relative bg-[#F4F5F7] w-[270px] h-[446px]">
        <Link to={`/${props.productPrps.id}`}>
        <div className="overflow-hidden">
          <img
            src={props.productPrps.img}
            className="w-[270px] h-[300px] object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <h1 className="font-poppins font-[600] text-[24px] text-[#3A3A3A] pl-4 pt-4">
          {props.productPrps.heading}
        </h1>
        <p className="font-poppins font-[500] text-[16px] text-[#898989] pl-4 pt-1">
          {props.productPrps.para}
        </p>
        <span className="font-poppins font-[600] text-[20px] text-[#3A3A3A] pl-4">
          {props.productPrps.current}
        </span>
        <span className="font-poppins font-[400] text-[16px]  pl-2 text-[#B0B0B0] ">
          {props.productPrps.original}
        </span></Link>
      </div>
    );
  };
  
export default OurProduct

