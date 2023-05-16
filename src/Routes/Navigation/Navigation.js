import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import iftar from '../../Assets/iftar.png';

function Navigation() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUsuario(user);
    } else {
      setUsuario(null);
    }
  })

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant='dark' bg='black'>
        <Navbar.Brand as={NavLink} to='/' className='ms-3'>
          <img src={iftar} alt="..."
            style={{ width: '13rem' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/menu'>
              Menú
            </Nav.Link>
            <Nav.Link as={NavLink} to='/Delivery'>
              Delivery
            </Nav.Link>
            <Nav.Link as={NavLink} to='/pedidos'>
              Pedidos
            </Nav.Link>
          </Nav>
          <Nav>
            {usuario ?
              <NavDropdown title={usuario.email}>
                <NavDropdown.Item as={NavLink} to='/profile'>perfil</NavDropdown.Item>
              </NavDropdown>
              :
              <Nav.Link as={NavLink} to='/login'>Iniciar Sesion</Nav.Link>
            }
            {usuario ?
              <Link to='/'><button className="btn btn-primary me-3" onClick={() => signOut(auth)}>Cerrar Sesion</button></Link>
              :
              <Nav.Link as={NavLink} to='/Register'>Regístrate</Nav.Link>
            }
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>

  )
}

export default Navigation;