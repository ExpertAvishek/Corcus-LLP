import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const Services2 = () => {
  const chooseContent = [
    { img: "/assets/img/service/01.gif", title: "Social Media Marketing" },
    { img: "/assets/img/service/05.gif", title: "Google & Meta Ads" },
    { img: "/assets/img/service/06.gif", title: "Video Production & Shoot" },
    { img: "/assets/img/service/09.gif", title: "Web Development" },
    { img: "/assets/img/service/07.gif", title: "Performance Marketing" },
    { img: "/assets/img/service/08.gif", title: "SEO & Content Marketing" },
  ];

  return (
    <section className="service-section py-40">
      <div className="container mx-auto">
        <div className="section-title text-center">
          <h1 className="text-dark-yellow text-10xl font-bold mb-8">
            The Service We Provide For You
          </h1>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={4} // Show 4 slides per view on large screens
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1280: { slidesPerView: 4 }, // Large screens
            1024: { slidesPerView: 3 }, // Medium screens
            768: { slidesPerView: 2 }, // Tablets
            640: { slidesPerView: 1 }, // Mobile
          }}
          className="service-slider"
        >
          {chooseContent.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="service-card shadow-md rounded-2xl p-6 w-[300px] h-[900px] mx-auto flex flex-col items-center justify-between border border-gray-300 bg-transparent backdrop-blur-md">
                <div className="service-thumb mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-52 h-52 object-cover rounded-lg"
                  />
                </div>
                <div className="content text-center">
                  <h3 className="text-3xl font-semibold mb-3 text-white">
                    <Link
                      to="/service/service-details"
                      className="hover:text-yellow-500"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <Link
                    to="/service/service-details"
                    className="service-btn text-lg font-medium bg-black text-white py-2 px-6 rounded-md inline-block"
                  >
                    Know More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services2;
