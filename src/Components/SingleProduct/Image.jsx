import React from 'react'

const Image = (props) => {
  return (
    <div className="relative bg-[#F4F5F7] w-[270px] h-[446px] overflow-hidden">
      <img
        src={props.img}
        className="transition-transform duration-500 hover:scale-110 w-[270px] h-[300px] object-cover"
      />
      <div
        className="absolute top-4 left-48"
        dangerouslySetInnerHTML={{ __html: props.svg }}
      ></div>
      <h1 className="font-poppins font-[600] text-[24px] text-[#3A3A3A] pl-4 pt-4">
        {props.heading}
      </h1>
      <p className="font-poppins font-[500] text-[16px] text-[#898989] pl-4 pt-1">
        {props.para}
      </p>
      <span className="font-poppins font-[600] text-[20px] text-[#3A3A3A] pl-4">
        {props.span}
      </span>
      <span className="font-poppins font-[400] text-[16px] line-through pl-2 text-[#B0B0B0]">
        {props.span1}
      </span>
    </div>
  );
};

export default Image