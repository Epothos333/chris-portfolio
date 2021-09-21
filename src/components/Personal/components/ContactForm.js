import React from 'react';

export function ContactForm() {
  return (
    <section className="Flex-Column Contact-Form-Section">
      <h1 className="Contact-Header">Contact</h1>
      <p className="Light-Text Contact-Form-Info">
        Cell: 773 - 297 - 7062
      </p>
      <p className="Light-Text Contact-Form-Info">
       Email: chris@chrisroyportfoilio.com
      </p>
      <input className="Contact-Input" placeholder="NAME"/>
      <input className="Contact-Input" placeholder="EMAIL ADDRESS"/>
      <textarea className="Contact-Message" placeholder="MESSAGE (optional)"/>
      {/* <input className="Contact-Input" placeholder="MESSAGE (optional)"/> */}
      <button className="Send-Button">Send</button>
    </section>
  )
}