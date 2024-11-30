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
        <span className="font-poppins font-[400] text-[16px] line-through pl-2 text-[#B0B0B0]">
          {props.productPrps.original}
        </span></Link>
      </div>
    );
  };
  
export default OurProduct

// import React from "react";

// const OurProduct = (props) => {
//   return (
//     <div className="relative bg-[#F4F5F7] w-[270px] h-[446px] sm:w-[300px] sm:h-[480px] md:w-[320px] md:h-[500px] lg:w-[350px] lg:h-[520px] xl:w-[380px] xl:h-[540px]">
//       <div className="overflow-hidden">
//         <img
//           src={props.img}
//           alt={props.heading || "Product Image"}
//           className="w-full h-[300px] sm:h-[320px] md:h-[340px] object-cover transition-transform duration-500 hover:scale-110"
//         />
//       </div>
//       <div
//         className="absolute top-4 right-4 sm:right-6"
//         dangerouslySetInnerHTML={{ __html: props.svg }}
//       ></div>
//       <h1 className="font-poppins font-[600] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#3A3A3A] pl-4 pt-4">
//         {props.heading}
//       </h1>
//       <p className="font-poppins font-[500] text-[14px] sm:text-[15px] md:text-[16px] text-[#898989] pl-4 pt-1">
//         {props.para}
//       </p>
//       <div className="pl-4 flex items-center space-x-2">
//         <span className="font-poppins font-[600] text-[18px] sm:text-[20px] md:text-[22px] text-[#3A3A3A]">
//           {props.span}
//         </span>
//         <span className="font-poppins font-[400] text-[14px] sm:text-[16px] line-through text-[#B0B0B0]">
//           {props.span1}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default OurProduct;
