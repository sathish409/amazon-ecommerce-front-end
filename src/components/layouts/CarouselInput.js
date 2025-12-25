import Carousel from 'react-bootstrap/Carousel';


export const CarouselInput=()=> {
  return (
    <Carousel className='carousel' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61NSxzrSfNL._SX3000_.jpg"
          alt=""
            style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61p0UJBaN7L._SX3000_.jpg"
          alt="Second slide"
         style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/716OMPWDNvL._SX3000_.jpg"
          alt="Third slide"
        style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

