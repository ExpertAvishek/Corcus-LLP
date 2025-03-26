import { useState } from "react";
import "../../assets/Services.css";

const Services = () => {
  const [activePanel, setActivePanel] = useState(null);

  const services = [
    {
      title: "Branding",
      subtitle: "Experience",
      description:
        "Transform your brand with our expert touch. We craft memorable identities that resonate and captivate your audience.",
      list: [
        "Research & Brand Strategy",
        "Brand Guidelines",
        "Brand Identity & Positioning",
        "Naming & Domain",
      ],
      link: "/services/branding",
      images: [
        "/images/services/brandin1.webp",
        "/images/services/branding2.webp",
        "/images/services/branding3.webp",
        "/images/services/branding4.webp",
        "/images/services/branding5.webp",
        "/images/services/branding6.webp",
      ],
    },
    {
      title: "Digital",
      subtitle: "Experience",
      description:
        "Engage your visitors with stunning web designs. Our user-friendly, visually striking websites turn clicks into loyal customers.",
      list: [
        "Website Design & UI",
        "Web Hosting",
        "Website Development",
        "Performance Optimisation",
      ],
      link: "/services/digital-experience",
      images: [
        "/images/services/digi1.webp",
        "/images/services/digi2.webp",
        "/images/services/digi3.webp",
      ],
    },
    {
      title: "Packaging",
      subtitle: "Experience",
      description:
        "Stand out on the shelves with our eye-catching packaging designs. We blend form and function to make your products irresistible.",
      list: [
        "Brand Strategy Development",
        "Product Positioning",
        "Packaging design for Hero Products",
        "Guideline formulation",
      ],
      link: "/services/packaging",
      images: [
        "/images/services/pkg1.webp",
        "/images/services/pkg2.webp",
        "/images/services/pkg3.webp",
      ],
    },
    {
      title: "Ecommerce",
      subtitle: "Experience",
      description:
        "Boost your online sales with our seamless eCommerce solutions. From design to launch, we create digital storefronts that convert.",
      list: [
        "Brand roadmap",
        "Communication Design",
        "E-com store Set up Strategy",
        "Front-end & Back-end development",
      ],
      link: "/services/ecommerce",
      images: ["/images/services/ecomm1.webp"],
    },
  ];

  const togglePanel = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  return (
    <div data-aos="fade-up" className="seevices">
      <div className="seevice-height">
        <h2 className="main-heading">
          OUR <br />
          <span className="sec-heading">SERVICES</span>
        </h2>
        <div className="accordion">
          {services.map((service, index) => (
            <div
              key={index}
              className={`panel ${activePanel === index ? "active" : ""}`}
            >
              <div className="row">
                <div className="column1">
                  <h3 className="services-heading">
                    {service.title} <br />
                    {service.subtitle}
                  </h3>
                </div>
                <div className="column2">
                  <div className="arr-sec">
                    <p className="seevices-subheading">{service.description}</p>
                    <img
                      alt="Down Arrow"
                      width="100"
                      height="37"
                      className="arrow-down"
                      src="/images/services/dwn.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="row">
                  <div className="column1">
                    {service.list.map((item, i) => (
                      <p key={i} className="seevice-list">{`${
                        i + 1
                      }. ${item}`}</p>
                    ))}
                    <div className="know-more">
                      <a className="button-elegant" href={service.link}>
                        KNOW MORE
                      </a>
                    </div>
                  </div>
                  <div className="column2">
                    <div
                      className={`image-section ${service.title.toLowerCase()}`}
                    >
                      {service.images.map((img, i) => (
                        <img
                          key={i}
                          alt={`${service.title} Image ${i + 1}`}
                          width="100"
                          height="37"
                          className="seevice-image"
                          src={img}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
