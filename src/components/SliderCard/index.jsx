import ExcelPDF from '@/assets/ExcelPDF';
import React from 'react';

const SliderCard = ({ icon, title, description }) => {
  return (
    <div class="relative my-5 w-60 h-60 px-6 pb-4 pt-6 bg-white hover:shadow-lg rounded-2xl border border-gray-200">
      <div class="w-full h-full">
        <div class="flex flex-col justify-between h-full">
          <div>
            {icon}
          </div>
          <p class="mt-3 text-xl text-gray-900 font-bold">
            {title}
          </p>
          <p class="py-2 text-[15px] text-gray-500/90">
            {description}
          </p>
        </div>
      </div>
    </div>

  )
}

export default SliderCard