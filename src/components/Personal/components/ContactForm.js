import React from 'react';
import sendmail from 'sendmail';

export function ContactForm() {
  const handleClick = () => {
    sendmail()({
      from: 'edwinaoraha@yahoo.com',
      to: 'e.aoraha33@gmail.com',
      subject: 'test sendmail',
      html: 'Mail of test sendmail ',
    })
  }
  return (
    <section className="Flex-Column Contact-Form-Section" id="contact">
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
      <button onClick={handleClick} className="Send-Button">Send</button>
    </section>
  )
}