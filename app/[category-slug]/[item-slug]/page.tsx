import React from 'react'

const page = () => {
  return (
    <div className='flex 	  pt-[500px] bg-[#2A352D] opacity-90 overflow-hidden h-screen justify-center items-center'>
      <div className='grid  grid-cols-2'>
      <div>
        <img src="/logo.png" alt="" className='w-96 h-' />
      </div>
      <div className='flex flex-col w-fit h-[630px  ] justify-center bg-black text-white'>
        <div className='flex justify-between mx-5'>
          <h1>chit  chat’s  &  chicken</h1>
          <p>£32.95</p>
        </div>
        <div className='w-[443px] h-[88px] '>
          <h2>BONELESS - CHOOSE A FLAVOUR

Two grilled chicken breast, fried chicken tenders, two chicken
thighs. Served with two fries, jollof rice, rice ‘n peas and 
coleslaw</h2>
        </div>
        <div className='w-[443px] h-[88px] '>
          <h2>Ingredients:Chicken Breast, Chicken Thigh, Lemons, Spinach, Afrikana
Sauce, Chicken Marinade, Rainbow Slaw, Jollof Rice & Garnish</h2>
        </div>
        <div className='w-[443px] h-[88px] '>
          <h2>Allergens: Gluten: Wheat, Soya, Milk, Celery, Mustard</h2>
        </div>
        <div className='w-[443px] h-[88px] '>
          <h2>May contain: Eggs, Fish, Nuts, Nuts: Almond, Nuts: Hazelnut, Nuts:Walnut,
Nuts: Cashew, Nuts: Pecan, Nuts: Brazil, Nuts:Pistachio, Nuts:
Macadamia, Sulphur dioxide</h2>
        </div>
        <div className='w-[443px] h-[88px] '>
          <h2>May contain: Eggs, Fish, Nuts, Nuts: Almond, Nuts: Hazelnut, Nuts:Walnut,
Nuts: Cashew, Nuts: Pecan, Nuts: Brazil, Nuts:Pistachio, Nuts:
Macadamia, Sulphur dioxide</h2>
        </div>
      </div>
    </div>
      </div>
     
  )
}

export default page



// 'use client'
// import React, { useState } from 'react';

// const images = ["/logo.png", "/image2.png", "/image3.png"];

// const ImageSlider = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const showPreviousImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const showNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className='flex  bg-[#2A352D] opacity-90 overflow-hidden h-screen justify-center items-center relative'>
//       <div className='grid grid-cols-2'>
//         <div>
//           <img src={images[currentImageIndex]} alt="" className='w-96 h-auto' />
//         </div>
//         <div className='flex flex-col w-fit h-[630px] justify-center bg-black text-white'>
//           {/* Your image description content */}
//         </div>
//       </div>
//       <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded" onClick={showPreviousImage}>Previous</button>
//       <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded" onClick={showNextImage}>Next</button>
//     </div>
//   );
// };

// export default ImageSlider;
