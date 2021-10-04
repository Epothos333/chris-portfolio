import React from 'react';
import { useViewPort } from '../../hooks/useViewPort';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import './style.css';

export function Personal() {
  const { isMobile } = useViewPort();
  return (
    <div className="Personal-Section Flex-Column A-C">
      <section className={`${isMobile ? 'Flex-Column' : 'Flex-Row'}`}>
        <About />
        {!isMobile &&
          <ContactForm />
        }
      </section>
      <Footer />
    </div>
  )
}