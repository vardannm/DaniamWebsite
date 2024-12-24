import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 

const cardData = [
  { name: 'Card 1', description: 'This is the first card.', image: 'https://www.src.am/img/pek_logo.png' },
  { name: 'Card 2', description: 'This is the second card.', image: 'https://img.freepik.com/free-vector/kindergarten-logo-design-template_23-2150628885.jpg' },
  { name: 'Card 3', description: 'This is the third card.', image: 'https://images.vexels.com/content/212632/preview/airplane-airport-sign-icon-c72d86.png' },
  { name: 'Card 4', description: 'This is the fourth card.', image: 'https://logosandtypes.com/wp-content/uploads/2020/07/gazprom.svg' },
  { name: 'Card 5', description: 'This is the fifth card.', image: 'https://banks.am/files/news/2015/05/22/052220132980.jpg' },
];

function Projects() {
  return (
    <div className="py-8 px-8 sm:px-24 md:px-48 bg-cardGray min-h-screen pt-28">
      <p className='uppercase font-bold text-4xl text-white text-center mb-8'>Projects</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
          280: {
            slidesPerView: 1,
          },
          200: {
            slidesPerView: 1,
          },
        }}
      >
       {cardData.map((card, index) => (
  <SwiperSlide key={index}>
    <div className="bg-black p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center border-2 border-cyan-300">
    
      <div className="w-full h-64 bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h3 className="text-xl text-white font-semibold mb-2">{card.name}</h3>
      <p className="text-white mb-4">{card.description}</p>
      <button className="bg-transparent hover:bg-cyan-300 text-cyan-300 font-semibold hover:text-white py-2 px-4 border-2 border-cyan-500 hover:border-transparent rounded">
        View
      </button>
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </div>
  );
}

export default Projects;
