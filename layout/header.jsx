import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link'

class Header extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 96;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <section className="header">
        <header>
          <Navbar
            expand="md"
            fixed="top"
            className={this.state.isTop ? null : 'navbar-dark shrink'}>
            <Container>
              <Navbar.Brand href="/">
                <img
                  src="/logo.svg"
                  alt="Alex Sampaio André"
                  title="Alex Sampaio André"
                />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Link href="/sobre-nos"><a className="nav-link font-weight-bold text-uppercase">Sobre Nós</a></Link>

                  <Nav.Link href="#" className="font-weight-bold text-uppercase">Dúvidas?</Nav.Link>
                  <Nav.Link href="#" className="font-weight-bold text-uppercase">Contato</Nav.Link>
                  <Nav.Link href="#" className="font-weight-bold text-uppercase">Blog</Nav.Link>
                  <NavDropdown title="Olá Alex!" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/faturas" className="active">Faturas</NavDropdown.Item>
                    <NavDropdown.Item href="#">Pagamentos</NavDropdown.Item>
                    <NavDropdown.Item href="#">Serviços</NavDropdown.Item>
                    <NavDropdown.Item href="#">Protocolos</NavDropdown.Item>
                    <NavDropdown.Item href="#">Meus Dados</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Sair</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </section>
    );
  }
}

export default Header;
