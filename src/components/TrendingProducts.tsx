import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    name: 'Luxury Bed Set',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    action: 'Enquire Now'
  },
  {
    name: 'Luxury Sofa Set',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    action: 'Enquire Now'
  },
  {
    name: 'Luxury Dining Table',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    action: 'Enquire Now'
  },
  {
    name: 'Luxury Bed Set',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    action: 'Enquire Now'
  },
  {
    name: 'Elegant Candle Set',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    action: 'Enquire Now'
  },
  {
    name: 'Elegant sofa Set',
    image: 'https://s3-alpha-sig.figma.com/img/ceb9/5648/6bede647d8108a92d1fca96a97437d4e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R9-qfXop7z4iDMl5AllF5LB0Ozruk8gOGbZy6jCKSm8u55imUmG~or4klup6R9surufhvfVl-unr-FD~qzIn3YW43w0CWek4ja1N3mezREFgRKd3dIMTsxX3AkbHBMMAdP6kgvqkq-KwfqQVdR0YtkJoZ02XI3tlg4mXnjfZxXiHgaRy6HJJoiMdnhvLUxjt9hbsFQxH1pFeKFx4jLbgLxM1pCpJ89y6TIux8c0EsJpNY~r2F1eKqODOONZab2N0SgZXu~dslYAUtEqg1amD-IS3fC-V~owOtCVCBaMocKHMlv5ETj6VrpU~HtsvE2Ci-Lb82TTEOujuYRY5qXjFuA__',
    action: 'Enquire Now'
  },
  {
    name: 'Fruit Platter',
    image: 'https://s3-alpha-sig.figma.com/img/54d8/2b86/59b7e8cf93d6d32688435d4033377dea?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qR8ZFlErIaEgx1Q0WYfusfOT6rv~Iu-J5xKstE2quEUy2L85K97hpKFGcevQc1x9dmsDeqzIkzkK2H93r0MZXzEG8VRG-zlgiFGbLgaT1P0B2o7X0X4TF1PeRsHzCUncmr~wNubXe0LXiQFmFXbRRbGxlc1YB0MTQnENex9eb3KOEpsinyNsWwjJ~ZcPwn1tF~3-mwV-9ASsKn7xdGlt~2x9i8y2F64iHCZWs51HCV-BAV0iT5clZ4HxmtnwoVDsUgUgdx6fTVXo5yPrRF~EkYSVw5pldG7DGiZql5J~-gu9w57yJqTzHjJQi-SDabSnuL8bzJefMAEnGiYQHN~Qyg__',
    action: 'Enquire Now'
  },
  {
    name: 'Elegant candle set',
    image: 'https://s3-alpha-sig.figma.com/img/8702/2fea/0e38e1e6003a311863320dcfc1f21b51?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oV9WOyCxCJFm5JUKJHH8A-q6OA8KrQaBn6oFr9HbMsB4BsPyjaMgAoVbitUXiioHeXKG-SO2yNbfvOjY0GnEUTSJ2hxAZgBRqJ9HPPvJr2nUhdZ6ZJ1LEtWtSHSFlMenEFbtY486RaIspdfBLVQ4TTh1f15YRwzAUlc4owzPk70K6g~drAiFsKs~IciwFnsqS8gSNkMS3oYtAZLTxoLLhINEiRdLgo~G6irQvAtQKApJuWEg3kJrOiFae5Za1i8vV86yjl42QBiBOa1MiXCGNz-oKpTbkfjzaESaWIi5I3TgOj0QFcuY21ZhhXPX75uEt3gKwYhkNA95aPTFQ7pQiA__',
    action: 'Enquire Now'
  },
];

const TrendingProducts: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 w-full h-[50px] rounded-lg bg-[#D3D3D3]">
          <h2 className="text-2xl font-bold p-6">Trending Products</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {products.map((product) => (
            <div key={product.name} className="group bg-[#D3D3D3] rounded-lg">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-black text-white px-6 py-2 rounded-md transition-opacity">
                    {product.action}
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-medium p-4">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;