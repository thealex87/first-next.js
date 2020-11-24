import React from 'react';
import { Container } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <footer>
          <Container fluid className="pt-3 pb-3 font-weight-light text-center">
            <small>&copy; { `${new Date().getFullYear()} Alex Sampaio André - Todos os direitos reservados` }</small>
          </Container>
        </footer>
      </section>
    );
  }
}
export default Footer;
