import React, { useState } from 'react';
// import sendmail from 'sendmail';
import emailjs from 'emailjs-com';

export function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [sending, setSending] = useState('Send');
  const handleClick = () => {
    setSending('Sending')
    emailjs.send(
      'default_service',
      'template_nr601jg',
      {
        name,
        message,
        reply_to: replyTo
      }
    ).then(() => {
      setName('');
      setMessage('');
      setReplyTo('');
      setSending('Sent');
    }).catch((error) => setSending('Error'))
  }

  const backgroundColor = sending === 'Sent' ? 'darkseagreen' : sending === 'Error' ? 'red' : sending === 'Sending' ? 'gray' : undefined;
  const disabled = sending === 'Sending' || sending === 'Sent';

  return (
    <section className="Flex-Column Contact-Form-Section" id="contact">
      <h1 className="Contact-Header">Contact</h1>
      <p className="Light-Text Contact-Form-Info">
        Cell: 773 - 297 - 7062
      </p>
      <p className="Light-Text Contact-Form-Info" style={{marginBottom: '15px'}}>
        Email: croy9ch@gmail.com
      </p>
      <span className="Flex-Column" style={{backgroundColor: 'black'}}>
        <input style={{marginTop: 0}} className="Contact-Input Bold-Text" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="Contact-Input Bold-Text" placeholder="EMAIL ADDRESS" value={replyTo} onChange={(e) => setReplyTo(e.target.value)} />
        <textarea className="Contact-Message Bold-Text" placeholder="MESSAGE (optional)" value={message} onChange={(e) => setMessage(e.target.value)} />
      </span>
      <button onClick={handleClick} disabled={disabled} className="Send-Button" style={{ backgroundColor }}>{sending}</button>
    </section>
  )
}