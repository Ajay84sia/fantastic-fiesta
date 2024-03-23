import Slider from "react-slick";

function Carousell({carou}) {
  // carou.map((elem) => (
  //    console.log("cvyt" , elem.name)
  // ))



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          carou?.map((elem, index)=>(
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

export default Carousell;
