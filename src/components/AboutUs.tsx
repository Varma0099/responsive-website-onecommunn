import React from 'react';

const features = [
  {
    title: 'Inspired Living',
    description: 'Discover furniture that combines modern elegance with everyday comfort, crafted to make your home a reflection of your unique style.'
  },
  {
    title: 'Exceptional Savings',
    description: 'By bridging the gap between you and trusted furniture makers, we bring you stunning pieces at prices that fit your budget.'
  },
  {
    title: 'Easy Shopping',
    description: 'From quick browsing to fast delivery and easy assembly, we simplify every step of finding and enjoying your perfect furniture.'
  },
  {
    title: 'Sustainable Options',
    description: 'Choose from sustainable furniture options crafted with the planet in mind—because style should never come at the cost of the environment.'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Select your dream model',
    description: 'Identify the style that best suits your space and personality. From modern minimalism to classic elegance, choose what resonates with you.',
    image: 'https://s3-alpha-sig.figma.com/img/1b8c/2ebb/15c88cd61da0ecbeb9f6a4a6d8ec13b1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oqAnJ0vhuM2ECU4UpzaiqU0o5FcoE05O42MuFZLcfHZM12z06WT1AANM5npMJ~25IT2tj2l-34ykNaaIZcsYtHNzYYfG0Gl0-RsZI3BwCGNNTGFzvaWDn6vs-0KYNwnbYLVr3YsDs~tamQASfoqaO9Zm775GU5Y~ObXf5DT6HgwakICDVauetHJJEbCInnh9uti6YF7GrjFd4ukJkP-ssOTpzsnjUetU-tudn1OHefKfzukELbYw5Ia4hVCcgPZYStsjMAzg-y50yXK28oa54dRVlQSstGTEuj2dCPXIOYrXmWfez9f6CCil7MWD4eJlHpm50piXP5W15vl4ngfPhA__'
  },
  {
    step: 2,
    title: 'Customize to your requirement',
    description: 'Choose from a variety of premium materials such as rich woods, luxurious fabrics, and robust metals to complement your style.',
    image: 'https://s3-alpha-sig.figma.com/img/a73e/f206/26effcd84f7b413cfcfe8c582f0f0019?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C88thAkoW5cMa2KrhBpi~YHNBfnbaZa0ogrl3y04OeYAZg-MkYv0pwDWoBJ~ArUu1gPBkA6XgRgb-bnXoe82MgEX3lTZ-DBs8w-bECOv7NRd7h9llQQTdqDKVChfw4hFNvCfSqd7QX4SO67TOB2O80TSBJVZFBWmmuICO9yyzIE8K3OkwwDeymBa81D1gVxNyOPf-Iqi-QM6oXjal7Zpr7-2OWYdNM~LU~hKjiIBU1UmJ6Hqk~NwFx4BVFDiZ8~OeI3V6TDsdtWFpytc9uCX4BnyZHVAGwTbRMk6OwG6a5PviB5C7NOdQqNFAqPrhIOf60jGpLlXVAioSOwzI-kCYQ__'
  },
  {
    step: 3,
    title: 'Order confirmation',
    description: 'Accurate measurements ensure your furniture fits perfectly, maximizing space and functionality.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=500'
  },
  {
    step: 4,
    title: 'Quality check',
    description: 'Enjoy seamless delivery and professional installation services with every purchase.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=500'
  },
  {
    step: 5,
    title: 'Order processing',
    description: 'Your order goes through careful processing to ensure all details are correct before moving forward.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500'
  },
  {
    step: 6,
    title: 'Delivery',
    description: 'Our commitment to quality ensures your satisfaction with every piece you choose.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500'
  }
];

const highlights = [
  {
    title: '500 + Collections',
    description: 'Our journey begins with a comprehensive understanding of your unique style and space requirements.',
    icon: '📦'
  },
  {
    title: '300 + Fabrics',
    description: 'Our journey begins with a comprehensive understanding of your unique style and space requirements.',
    icon: '🧶'
  },
  {
    title: 'Top-notch Quality',
    description: 'Our journey begins with a comprehensive understanding of your unique style and space requirements.',
    icon: '✓'
  },
  {
    title: 'Colour and Length customization',
    description: 'Our journey begins with a comprehensive understanding of your unique style and space requirements.',
    icon: '🎨'
  }
];

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            Discover the epitome of luxury living with our exclusive furniture collection. Each piece is meticulously crafted to bring sophistication and elegance to your home.
          </p>
        </div>

        {/* Features Grid with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Left Column - Features */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/ad11/da20/4602ad8de35932ce40f24208390c97d2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAmmNVd8A5iSxqk-8mKu6p5VM2smqpu5SopBlOZzm4PZ6kQWL6ekh1icuZn~xLGr7WnDNOj5abTzg~QaejYKZzj9paoLpKucUQAywBmjlhgcALqclOr2jxLUmqw8C9jS1xapht4XVLLDxfZmQNZInR3fLULnll-VAHwS0gZEstrAm3owY3VulbmIS7RCSVjC56aV6sW7mBrL941qm~UagUFV82EIcCNqdxM~-XFHetxF6-baGCdEcDYs7XXf-2eKYoZVlpdmQf-AIU9zopJ3CT-6IfRyI7Tgy3DOikAjHHtVwkgKZZll87JXZnx~NK1XEpQBEOyWG8sPEyGRkisnVw__"
              alt="Interior 1"
              className="w-full h-32 sm:h-48 object-cover rounded-lg"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/f63e/511e/0c1ef834c3ececefcb0b61aa952ac3fd?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d5PYv8PGsZnwNqIj8PkgCZkGylMA0u2M7YbZMAu2OOSNdzlm~psoNof38VKrQkt18BT0s35NThJWgkIge52ap0bRARJRtjngutr09VdP28k-zIW09WU8kZ~v2WX79NB1a~gkLb-PFVkxlSUjinQPAcOY5Qhm~~F45hiuaQHU04JHfaxw1~c9HsfyM1N0Pmwj8CUOox1mS4pSgEodhIWscy8Bwm6K-NGRb1EJ0miAbM9w46lJB1hdbXT7pibLK5taQH68LBAdE0~dLcTTVdf8zS0w7iXB0xTQMSGf3HQnOfLSiRQ7dQiWcj1hanKsnX7G8kD4Jkj1IcZbS7oaTlYS4w__"
              alt="Interior 2"
              className="w-full h-32 sm:h-48 object-cover rounded-lg"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/1854/8e5f/b7e9e10ece3ff536cf9ca12d0cafcf57?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vkcg8YDyRiXozHlSfANRnR546fUBbysrhDpssptIODQxR9PkTL1p78KZrL~poVPdnTh51g~81TcWE672eWYHgEvVJ4umUN3RVtG2Ns-aB4KswFpsF-WgVU~-5wdQ71dQiqIXyd36oR6VQjc3VaMKtEWIJVpocWVShhMUU1ewbKahYOC2eH8c49egTHkNbssjT-GHyH-1aUgwA9M7xnsviu1yOn2ktLlv64tZsD~5wyi8bWwVjTxK-Z9i3gku5dg9Hng3G34Y2ZSsdWy53BzxlLcvQm61k9XYZ4ZyiWTY2izntdGlVbFHA19I1rR-X08SCITohMS4Us5xDXix0o7jUw__"
              alt="Interior 3"
              className="w-full h-32 sm:h-48 object-cover rounded-lg"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/621c/e411/19306f085278fd4a24dd870e7cd00abb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-jNPezd~M-HEYK1Ve3e6fpSzDFdVPfkO1izo2hVzeWAnu-O-fLFaqi-FPbc8ktGkqwQrU5m3wpPHJX1JGyNm0OT0O4ditDXA~mOK3ZVQ1rLMVu-0GPVrgBPSrrYvMMYnREAMWhuBpGAAx0WNHiCsGG6CXmvTPe7FydGnWg0lULCnRlu6YB3BLxXGHMgdFiS30hyhduBN8XpwelyOL9js8dlrhdtrNjDcAtks6GVuOGeEYIaMnCHteLW6YMG4NvtS0PXQFmJ68gXsX-wnK1mUt1EircIXeC2xgcWuIT7nvaPlnDvaLvk~3B-y09sTFhTkMVCzHCooJZUyjsPy6EQeQ__"
              alt="Interior 4"
              className="w-full h-32 sm:h-48 object-cover rounded-lg"
            />
          </div>
        </div>

       {/* Our Process Section */}
       <div className="mb-12 sm:mb-16 lg:mb-20">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Process</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
    {processSteps.map((step) => (
      <div
        key={step.step}
        className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="w-28 sm:w-36 lg:w-40 aspect-square rounded-lg shrink-0 overflow-hidden">
          <img
            src={step.image}
            alt={`Step ${step.step}`}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start mb-4">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black text-white rounded-full text-sm font-semibold mr-3">
              {step.step}
            </span>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold">{step.title}</h3>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>



        {/* Why Vibrer Stands Out Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why Vibrer Stands Out?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 ${
                  index === 0 ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-100'
                } rounded-lg`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl sm:text-4xl mr-4">{highlight.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold">{highlight.title}</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;