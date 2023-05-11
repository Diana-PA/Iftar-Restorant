import Carousel from 'react-bootstrap/Carousel';


function Carrusel() {
  return (
    <Carousel 
    style={{
    padding:'6rem',
      }}
    >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://cdn.pixabay.com/photo/2020/05/11/15/06/food-5158707_1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            fontWeight: 'bold',
            backgroundColor: 'black',
            opacity: 0.5
          }}
        >
          <h4>Un lugar donde la auténtica cocina árabe se mezcla con la hospitalidad tradicional para ofrecer una experiencia gastronómica única</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://cdn.pixabay.com/photo/2017/09/04/22/42/ramadan-2715812_1280.jpg"
          alt="Second slide"
        />
        <Carousel.Caption
          style={{
            fontWeight: 'bold',
            backgroundColor: 'black',
            opacity: 0.5
          }}
        >
          <h4>Somos un oasis de sabores exóticos en medio de la ciudad</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://cdn.pixabay.com/photo/2018/11/27/13/48/lahmacun-3841514_1280.jpg"
          alt="Third slide"
        />
        <Carousel.Caption
          style={{
            fontWeight: 'bold',
            backgroundColor: 'black',
            opacity: 0.5
          }}
        >
          <h4>Platos deliciosos elaborados con los ingredientes más frescos y auténticos</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://cdn.pixabay.com/photo/2015/04/09/11/30/food-714371_1280.jpg"
          alt="Third slide"
        />
        <Carousel.Caption
          style={{
            fontWeight: 'bold',
            backgroundColor: 'black',
            opacity: 0.5
          }}
        >
          <h4>Amplia variedad de platos que reflejan la diversidad culinaria de la región árabe</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;