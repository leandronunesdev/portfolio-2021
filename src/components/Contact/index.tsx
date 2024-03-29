import Linkedin from '../../images/logotipo-do-linkedin.svg';
import Github from '../../images/placa-do-github.svg';
import Gmail from '../../images/gmail.svg';
import WhatsApp from '../../images/whatsapp.svg';

import './Contact.scss';

const Contact = () => {
  return (
    <div className='contact-box'>
      <h1 id='contact' className='section-title'>
        Contact
      </h1>
      <ul>
        <li>
          <a
            href='https://github.com/leandronunesdev'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Github} alt='' />
          </a>
        </li>
        <li>
          <a
            href='https://api.whatsapp.com/send?phone=5541996070390&text=Ol%C3%A1!%20Gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.'
            target='_blank'
            rel='noreferrer'
          >
            <img src={WhatsApp} alt='' />
          </a>
        </li>
        <li>
          <a
            href='mailto:nunes.pessoal@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Gmail} alt='' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/leandronunesdev/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Linkedin} alt='' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
