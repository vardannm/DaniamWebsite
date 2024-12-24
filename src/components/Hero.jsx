import rectangle from '../../public/images/Rectangle.svg'

function Hero() {
  return (
    <div className="flex items-center justify-center h-screen relative z-0 bg-cardGray">
      <div className="absolute top-[-130px] left-0 right-0 h-32 z-10">
      <img
  src={rectangle}
  alt="Trapezoid Background"
  className="hidden lg:block w-full h-auto object-cover"
/>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center xl:pb-40 md:pb-0 px-24 z-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-7xl uppercase font-bold text-gray-800 mb-4 bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-700 inline-block text-transparent bg-clip-text">
            Daniam
          </h1>
          <p className="text-xl text-white">
            Empowering Organizations through Innovative Software Solutions
          </p>
        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
  src="/images/Hero.svg"
  alt="Daniam Logo"
  className="hidden lg:block w-[300px]  lg:w-[900px] h-auto"
/>

        </div>
      </div>
      
    </div>
  );
}

export default Hero;
