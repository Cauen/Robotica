/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import logo from '../assets/images/logo.png';

import '../styles/components/Footer.scss';

export default function Footer() {
  return (
    <div className="footer-component">
      <footer className="footer-component">
        <Container maxWidth="lg">
          <Typography
            style={{ marginBottom: 0 }}
            variant="h6"
            align="center"
            gutterBottom
          >
            <img
              alt="Logo"
              style={{ maxHeight: '40px' }}
              src={logo}
            />
            <br />
                        Projeto Robótica Educacional
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
                        © 2019- {new Date().getFullYear()} Robótica. Todos os
                        direitos reservados.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
