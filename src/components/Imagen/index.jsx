import Carousel from 'react-bootstrap/Carousel';

function index() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src="https://1.bp.blogspot.com/--r-PJmeszOU/WK81niYMJyI/AAAAAAAAHg8/1GfvjZasIAkY2l0KTw0pTwogDYvhQDQ6wCLcB/s1600/proyecto-obra-reforma-local-tienda-ropa-valladolid-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Visite nuestra Tienda</h3>
          <p>Las mejores prendas del Mercado.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src="https://media.vozpopuli.com/2021/02/Fachada-Zara-Mallorca_1353774646_14986936_1020x574.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Compare Calidad</h3>
          <p>Prendas de excelente Nivel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src="https://media.timeout.com/images/105182190/750/422/image.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tenemos accesorrios para mujer y articulos electrónicos</h3>
          <p>
            Visite nuestro sitio y compruébelo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default index;