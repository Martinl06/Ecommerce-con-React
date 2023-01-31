import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <div className='footerEstilos'>
    <h4>Visítenos en nuestras redes</h4>
    <Nav className="mx-auto py-3">
            <Nav.Link href="#home"><i className="bi bi-facebook iconsFooter"></i></Nav.Link>
            <Nav.Link href="#link"><i className="bi bi-twitter iconsFooter"></i></Nav.Link>
            <Nav.Link href="#link"><i className="bi bi-instagram iconsFooter"></i></Nav.Link>
    </Nav>
    <h5>Contacto</h5>
          <p>Email: FlorDeLotoStore@gmail.com</p>
          <p>Phone: 112239463</p>
    </div>
  )
}

export default Footer
