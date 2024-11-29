// import React from 'react'

// const BrowserTheRange = () => {
//   return (
//     <div className="w-[1200px] h-[700px]">
//       <div className="flex justify-center items-center flex-col m-auto w-[560px] h-[77px] mt-10">
//         <h1 className="font-poppins font-[700] text-[32px] leading-[48px] hover:text-[#B88E2F]">Browse The Range</h1>
//         <p className="font-poppins font-[400] text-[20px] leading-[30px] text-[#666666]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//       </div>
//       <div className="flex gap-6 w-full justify-center items-center ml-8 mt-20">
//         <div className="flex flex-col justify-center items-center">
//           <div className="image-container rounded-lg overflow-hidden">
//             <img
//               className="w-[380px] h-[480px] object-cover  transition-transform duration-500 hover:scale-110"
//               src="https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pRdsHHCDsiaMTtPNZw60aI7WEoMXndlSZBolD6wIbZ20~UfqLHXd2bjeySQSRzKtSMvBu1q9jlS1Ii4jSi66sZRgK6YAo3xj5EF2K1kQKIp1Ty56BesMdoa1HKwUDLiL8p5eA0ICUkt5e9WRY6X5bZAApGhzzaMUbnALLAh9NqCOwmiFeVsfdOMhjeELx~kNhDMGBY4dS~Ce78TsoyzROOx13mLoh8Zfz14VY25QCo6kDq5D3czxCVttV2W0FoQB6mk~EoeExh2NJ6xlB-8bf2dxNJMKLxIak6q06DAYGFSleb4Rf1eD7cvWGJpO0ssjO8wTFesa2oRmmbZA4DoKbw__"
//               alt="Dining"
//             />
//           </div>
//           <span className="font-poppins font-[600] text-[24px] mt-5">Dining</span>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <div className="image-container rounded-lg overflow-hidden">
//             <img
//               className="w-[380px] h-[480px] object-cover transition-transform duration-500 hover:scale-110"
//               src="https://s3-alpha-sig.figma.com/img/b7e3/92a7/f3961ca2b1edab00f7a7640b3c2ed666?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XbOa9IEpcnnZOKF176g0EMPXAEananFATgFADWzKkUkXl9YmBAT3blYueL1d-hALOoBWM5-qQ5QnT8eWS48cNtqgwOV~PPR6QK0-8gzhGXCSvSJpHYJGrz~B-hLiwMC1ghgbw~rdXwGzhhODk3mKmkFSuihsYs6~WI6UmfxDSvNAMJpommuNoR9s61OltH~FoUmLIe2gubUqKuvEWqr9caqqOanS8gGpt7VLhNd7FDPceD6Xw8Wl6ugnmJto9WNOwIv~Tg2DZnjcGCo1zPDx-9s4Vp1Lnuuz4E1tYq7ZDd4SqzsxkW7FoGwC5glvw0SbsjtSgl00axt8REWG6mhbGg__"
//               alt="Living"
//             />
//           </div>
//           <span className="font-poppins font-[600] text-[24px] mt-5">Living</span>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <div className="image-container rounded-lg overflow-hidden">
//             <img
//               className="w-[380px] h-[480px] object-cover transition-transform duration-500 hover:scale-110"
//               src="https://s3-alpha-sig.figma.com/img/77e4/946e/ec6e291e21c9694ce22e6c5b50d777fe?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3ToY58XW95akubSp23EXUEvMdG48mg7lTV9RQ7dFyIFKZH3BOO74z5w1Jjnex8Oc-0DjDkzh4zCnyHXtS3NX-BJ0xSh39Gtl~DOXUAVEIoy3GtSpbY6X1Yc6JX5aVOS7Efo2p~hFrzRuuNpUkTDZ6ZndyVdsirds-JBc7LXAiyFyXXxJt39-hV5VX~GNgJ~Zs0GC-omK1qEfYwr0eJ9rY2Hfjvucl6yKu-6pGZIOoTQUKlYtOS9AWQkiX05u1r09uN0ddSgV2mv9BdC8EAQ89TOu5CZEnoqA-1qzaTLWRu5t9yq~hqS1fSuZsELpxKq3ry-4GM2KHLJX1ZJt4oSew__"
//               alt="Bedroom"
//             />
//           </div>
//           <span className="font-poppins font-[600] text-[24px] mt-5">Bedroom</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowserTheRange

import React from 'react';

const BrowserTheRange = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <div className="text-center m-auto mt-10">
        <h1 className="font-poppins font-[700] text-[32px] leading-[48px] hover:text-[#B88E2F]">Browse The Range</h1>
        <p className="font-poppins font-[400] text-[20px] leading-[30px] text-[#666666] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="image-container  rounded-lg overflow-hidden">
            <img
              className="w-[380px] h-[480px] object-cover transition-transform duration-500 hover:scale-110"
              src="https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pRdsHHCDsiaMTtPNZw60aI7WEoMXndlSZBolD6wIbZ20~UfqLHXd2bjeySQSRzKtSMvBu1q9jlS1Ii4jSi66sZRgK6YAo3xj5EF2K1kQKIp1Ty56BesMdoa1HKwUDLiL8p5eA0ICUkt5e9WRY6X5bZAApGhzzaMUbnALLAh9NqCOwmiFeVsfdOMhjeELx~kNhDMGBY4dS~Ce78TsoyzROOx13mLoh8Zfz14VY25QCo6kDq5D3czxCVttV2W0FoQB6mk~EoeExh2NJ6xlB-8bf2dxNJMKLxIak6q06DAYGFSleb4Rf1eD7cvWGJpO0ssjO8wTFesa2oRmmbZA4DoKbw__"
              alt="Dining"
            />
          </div>
          <span className="font-poppins font-[600] text-[24px] mt-5">Dining</span>
        </div>

        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="image-container rounded-lg overflow-hidden">
            <img
              className="w-[380px] h-[480px] object-cover transition-transform duration-500 hover:scale-110"
              src="https://s3-alpha-sig.figma.com/img/b7e3/92a7/f3961ca2b1edab00f7a7640b3c2ed666?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XbOa9IEpcnnZOKF176g0EMPXAEananFATgFADWzKkUkXl9YmBAT3blYueL1d-hALOoBWM5-qQ5QnT8eWS48cNtqgwOV~PPR6QK0-8gzhGXCSvSJpHYJGrz~B-hLiwMC1ghgbw~rdXwGzhhODk3mKmkFSuihsYs6~WI6UmfxDSvNAMJpommuNoR9s61OltH~FoUmLIe2gubUqKuvEWqr9caqqOanS8gGpt7VLhNd7FDPceD6Xw8Wl6ugnmJto9WNOwIv~Tg2DZnjcGCo1zPDx-9s4Vp1Lnuuz4E1tYq7ZDd4SqzsxkW7FoGwC5glvw0SbsjtSgl00axt8REWG6mhbGg__"
              alt="Living"
            />
          </div>
          <span className="font-poppins font-[600] text-[24px] mt-5">Living</span>
        </div>

        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="image-container rounded-lg overflow-hidden">
            <img
              className="w-[380px] h-[480px] object-cover transition-transform duration-500 hover:scale-110"
              src="https://s3-alpha-sig.figma.com/img/77e4/946e/ec6e291e21c9694ce22e6c5b50d777fe?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3ToY58XW95akubSp23EXUEvMdG48mg7lTV9RQ7dFyIFKZH3BOO74z5w1Jjnex8Oc-0DjDkzh4zCnyHXtS3NX-BJ0xSh39Gtl~DOXUAVEIoy3GtSpbY6X1Yc6JX5aVOS7Efo2p~hFrzRuuNpUkTDZ6ZndyVdsirds-JBc7LXAiyFyXXxJt39-hV5VX~GNgJ~Zs0GC-omK1qEfYwr0eJ9rY2Hfjvucl6yKu-6pGZIOoTQUKlYtOS9AWQkiX05u1r09uN0ddSgV2mv9BdC8EAQ89TOu5CZEnoqA-1qzaTLWRu5t9yq~hqS1fSuZsELpxKq3ry-4GM2KHLJX1ZJt4oSew__"
              alt="Bedroom"
            />
          </div>
          <span className="font-poppins font-[600] text-[24px] mt-5">Bedroom</span>
        </div>
      </div>
    </div>
  );
};

export default BrowserTheRange;
