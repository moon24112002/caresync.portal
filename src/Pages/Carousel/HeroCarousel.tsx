import Carousel from "react-bootstrap/Carousel";
import Hero1 from "../../assets/Hero1.jpg";
import Hero2 from "../../assets/Hero2.jpg";
import Hero3 from "../../assets/Hero3.jpg";

function HeroCarousel() {
  const h400 = "400px";
  const w100 = "100%";
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={Hero1} height={h400} width={w100} alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Hero2} height={h400} width={w100} alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Hero3} height={h400} width={w100} alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
