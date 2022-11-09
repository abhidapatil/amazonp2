import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Navbar from './Navbar';
import Nav from './Nav';
import Carousel from './Carousel';
import Container from './Container';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar />
    <Nav />
    <Carousel />
    <Container/>
  </StrictMode>
);
