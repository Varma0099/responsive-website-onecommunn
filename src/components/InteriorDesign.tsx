import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InteriorDesign: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#D3D3D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Interior Designing</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base px-4">
            Kitchen Interior - Let us help you design your kitchen. Leave the worry of mixing and matching furniture behind. Set up your space confidently by purchasing the complete look for a seamless experience.
          </p>
        </div>

        <div className="flex justify-center pb-8 sm:pb-12">
          <button className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-gray-900 transition-colors text-sm sm:text-base">
            Know More
          </button>
        </div>
          
        <div className="relative mx-auto max-w-[1200px]">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/9227/9255/4626d841074865d5367279bf8cbe986b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpLeQA-EFprZ7BNyCx6sMHr-sFLvfCAPuynNUQTrg7af10Ur-qXi738ME5y1HZTOyhJN8cJkgW-Je0ewDgHX4ahkVOfuOqRPhfSjqr5DxvBn3HCq1M16lOaKh4grut1wXblxeJoz9SVtfvEnjd-iE1TgJIjfRJ8gweZlzmfrorBL9EsF680GsuvmrhOO32ptwKa9MalG-OnwCRUCVFp7z23LhwlcbirBTa8aTeu75ZclxHnYUms65PM03EnjJfYJ6zcNALll2SBbcfpXUlfHVsXq-nS4nMzQEQVWjFSNhXBpFYEdhqsD6MNatn5h9orCbbArWLf-t6vLaimZoS~K3A__"
              alt="Modern Kitchen Design"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between">
            <button className="p-1 sm:p-2 rounded-full bg-white hover:bg-gray-100 shadow-lg transform -translate-x-1/2 transition-transform hover:scale-105 focus:outline-none">
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            <button className="p-1 sm:p-2 rounded-full bg-white hover:bg-gray-100 shadow-lg transform translate-x-1/2 transition-transform hover:scale-105 focus:outline-none">
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesign;