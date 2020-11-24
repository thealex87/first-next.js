import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import { Container } from 'react-bootstrap';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>{this.props.pageTitle} - Alex Sampaio André</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header></Header>

        <section className="main">
          <Container role="main" className="bg-light pt-4 pb-4">
            {this.props.children}
          </Container>
        </section>

        <Footer></Footer>
      </>
    );
  }
}

export default Layout;
