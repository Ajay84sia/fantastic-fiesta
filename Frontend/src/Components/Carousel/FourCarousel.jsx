import Slider from "react-slick";

function FourCarousel({carousel}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          carousel?.map((elem, index)=>(
            <>
            <div key={index}>
                <img className="main-carousel-img" width="100%" src={elem.img} alt="" />
            </div>
            </>
          ))
        }        
      </Slider>
    </div>
  );
}

export default FourCarousel;
