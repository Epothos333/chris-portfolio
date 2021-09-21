import React from 'react';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import './style.css';

export function Personal() {
  return (
    <div className="Personal-Section Flex-Column A-C">
      <section className="Flex-Row">
        <About />
        <ContactForm />
      </section>
      <Footer />
    </div>
  )
}