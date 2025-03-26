import "bootstrap/dist/css/bootstrap.min.css";

const OurJourney = () => {
  return (
    <div className="container py-5">
      <h1
        className="text-center display-3 fw-bold mb-5"
        style={{
          WebkitTextStroke: "2px black", // Stroke effect
          color: "transparent", // Removes fill color
        }}
      >
        Our Journey
      </h1>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card bg-black text-white h-100">
            <div className="card-body">
              <p className="card-text">
                Founded with a vision to revolutionize digital advertising,
                Corcus Studio began as a small creative hub fueled by innovation
                and passion. Our mission was simple yet powerful, to help brands
                unlock their full potential through strategic and data-driven
                marketing. Over the years, we have evolved into a performance
                marketing powerhouse, delivering high-impact campaigns that
                drive tangible results.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-black text-white h-100">
            <div className="card-body">
              <p className="card-text">
                From startups looking to establish their brand identity to
                established businesses aiming for exponential growth, we have
                partnered with clients across industries to create ROI-driven
                marketing solutions. Our expertise spans SEO, social media
                marketing, paid advertising, content creation, and brand
                strategy, ensuring a 360-degree approach to digital success.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-black text-white h-100">
            <div className="card-body">
              <p className="card-text">
                At Corcus Studio, we don’t just run ads we craft compelling
                narratives, execute precise targeting, and optimize every
                campaign for maximum performance. Our journey has been marked by
                innovation, adaptability, and a relentless focus on results,
                helping brands scale from zero to millions with measurable
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
