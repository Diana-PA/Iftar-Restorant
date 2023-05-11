import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import iftar from '../../Assets/iftar.png';
import Carrusel from './Carrusel';

function Home() {
  return (
    <div>
      <div
        style={{ backgroundColor: 'black' }}>
        <Container>
          <br />
          <Row>
            <Col sm={8}>
              <br />
              <Image
                src="https://i.pinimg.com/564x/2c/c6/45/2cc6456f42f5f83a02a37fd50b032666.jpg"
                fluid
                rounded
              />
            </Col>
            <Col sm={4}>
              <br />
              <Image src={iftar}
                fluid
              />
              <p className='m-3 text-light text-center fw-light'>Somos un restorant de comida árabe. Trabajamos para dar a conocer los mejor de las tradiciones culinarias del Medio Oriente, respetando las preparaciones, ingredientes y sabores propios de su cultura.</p>
              <p className='m-3 text-light text-center fw-light'>نحن في انتظاركم قريبا</p>
            </Col>
          </Row>
          <br />
        </Container>
        <div>
          <Container>
            <div>
              <Carrusel />
            </div>
            <div>
              <h3 className='m-3 text-light text-center fw-light'>
                Nuestro restaurante es un oasis de sabores exóticos en medio de la ciudad, donde podrás disfrutar de platos deliciosos elaborados con los ingredientes más frescos y auténticos.
              </h3>
              <br />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home

