import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative">
  <div className="relative p-4 sm:p-6 lg:p-8">
    <img
      src="https://s3-alpha-sig.figma.com/img/be82/a2c1/4b9d9bd6645310d22891a2afe7f19b54?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRQoY8Iero4r~ClJV~ZAkiuaE~8qDn84Lq0C1o4J4HVmaxp6rq7LcsINI9H4BSkXr6saFIgriWX3OBqnqNlIsMGsaH0KgDP0XxIUfdeBoukzn6InPY~9xxaG1TlwGS2E8No4oJYNCvf4gMgGBIjuIKa37asuAN-Vhm4FV3Y6GdSkcBHYfgbztoBqQf6vnnNPluSC2wQbVkqTsth8AYEVNEFD~poAcQ-gYZ8W6iCWxMOgsLVjakJANN5g-1oKtfCYabWk3-HfT6gKFA1NRUCuDTR941jvR7l995yc559P9pyy-gHuK6nyH8BrBC0fqhFcT2jSl932-Q-BW2RZDbmUDg__"
      alt="Hero"
      className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
    />
  </div>


      {/* Quick Navigation Menu */}
      <div className="hidden sm:absolute sm:top-4 lg:top-6 sm:left-4 lg:left-6 sm:bg-white sm:bg-opacity-90 sm:rounded-br-lg">
  <div className="p-2 sm:p-3 lg:p-4 w-[100px] sm:w-[120px] lg:w-[140px]">
    <ul className="space-y-1 text-[10px] sm:text-xs lg:text-sm">
      <li className="hover:text-gray-600 cursor-pointer transition-colors">TV Units</li>
      <li className="hover:text-gray-600 cursor-pointer transition-colors">Box Shelves</li>
      <li className="hover:text-gray-600 cursor-pointer transition-colors">Shoe Rack</li>
      <li className="hover:text-gray-600 cursor-pointer transition-colors">Dressing Table</li>
      <li className="hover:text-gray-600 cursor-pointer transition-colors">Wardrobes</li>
    </ul>
  </div>
</div>


    </div>
  );
};

export default Home;