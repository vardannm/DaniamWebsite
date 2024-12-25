function Partners() {
  return (
    <div className="min-h-screen bg-cardGray pt-24">
      <div className="flex flex-col">
        <div>
          <div className="  p-6 ml-12 ">
            <p className="text-4xl font-medium	 mb-4 flex gap-3">
              <div className="text-white">Our</div>
              <div className="text-cyan-300">Services</div>
            </p>
            <p className=" text-lg text-white">
              Here are some of the amazing partners we collaborate with to bring
              you the best services and experiences.
            </p>
          </div>
          <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 w-11/12 m-auto  ">
          <div className="w-full rounded-xl bg-gradient-to-r from-neutral-900 from-10%   bg-customGray to-90% p-9" >
          <div className="flex gap-4 mb-10">
 <img  src="/images/Software.svg"  className="bg-cyan-600 border border-opacity-35 rounded-full border-cyan-400 bg-opacity-20 p-2 transition-all duration-300 hover:p-5" />
  <p className="text-2xl font-light text-white">
    Software Development
  </p>
  </div>
  <p className="font-thin text-white">
    At Daniam, we use the latest and most advanced technologies to
    provide efficient, scalable, and user-friendly software
    solutions. We dive into each project with professionalism and
    dedication, making sure we fully understand our client's
    objectives before development. Our goal is to provide software
    that is specifically tailored to each customer's unique needs,
    and we do our utmost to ensure that.
  </p>
</div>

<div className="w-full rounded-xl bg-gradient-to-r from-neutral-900 from-10%   bg-customGray to-90% p-9">
<div className="flex items-center gap-4 mb-10">
  <img 
    src="/images/Consulting.svg" 
    className="bg-cyan-600 border border-opacity-35 rounded-full border-cyan-400 bg-opacity-20 p-2 transition-all duration-300 hover:p-5"
  />
  <p className="text-2xl font-light text-white">Consulting</p>
</div>

              <p className="font-thin text-white">
                Our team of experts will develop a technical mission statement
                specific to your project's needs and goals. From designing
                technical tasks to building, testing, and deploying software,
                our consulting services cover all aspects of software
                development. We are committed to helping our customers turn
                their ideas into successful initiatives.
              </p>
            </div>
            <div className="w-full  rounded-xl md:col-span-2 bg-gradient-to-r from-neutral-900 from-10%   bg-customGray to-90% p-9"  >
            <div className="flex gap-4 mb-10">
            <img  src="/images/Support.svg" className="bg-cyan-600 border border-opacity-35 rounded-full border-cyan-400 bg-opacity-20 p-2 transition-all duration-300 hover:p-5" />
              <p className="text-2xl font-light	 text-white">Support</p>
              </div>
              <p className="font-thin text-white">
                In the world of constantly evolving technologies, we acknowledge
                that our commitment should not end with the delivery of
                software. We will assist you in identifying and resolving
                technical issues that may arise while using the software, as
                well as perform regular updates to the software to fix bugs and
                improve functionality. You will always have us there to answer
                any questions or concerns related to your software, including
                providing tips on how to use the software more effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Partners */}
      <div className="flex flex-col pb-7">
        <div className="   p-6 ml-12 ">
          <p className="text-4xl font-medium	 mb-4 flex gap-3">
            <div className="text-white">Our</div>
            <div className="text-cyan-300">Partners</div>
          </p>
          <p className=" text-lg text-white">
            Here are some of the amazing partners we collaborate with to bring
            you the best services and experiences.
          </p>
        </div>

        <div className="p-24 flex justify-center items-center bg-customGray rounded-3xl w-11/12 m-auto relative">
          <img
            src="/images/cardBackground.svg"
            className="absolute top-0 left-0 w-64 h-64 object-cover rounded-lg z-10"
          />
          <div className="grid xl:grid-cols-5 gap-6 md:grid-cols-3">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="bg-cardGray border border-cardBorder z-20 shadow-lg rounded-lg p-4 flex w-64 h-36  justify-center items-center text-white font-medium"
              >
                Card {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Partners;
