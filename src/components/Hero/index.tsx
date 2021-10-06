import profile_pic from '../../images/profile-picture_square.jpg';

import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero-box'>
      <div className='hero-image responsive'>
        <img src={profile_pic} alt='Leandro' />
      </div>
      <div className='hero-text'>
        <h1>
          Leandro Nunes,
          <br /> Desenvolvedor Front-End
        </h1>
        <p>
          Desenvolvedor Front-End com conhecimento em ReactJS, React Native,
          TypeScript, ContextAPI, Redux, JavaScript e Styled Components. Tenho
          visão crítica e analítica, capacidade de planejamento, organização e
          senso de urgência. Sou cooperativo, multiplicador de conhecimento,
          tenho facilidade de comunicação oral e escrita e nível avançado de
          inglês.
        </p>
        <a
          href='https://github.com/leandronunesdev/curriculo/raw/master/LEANDRO%20NUNES%20-%20DEV.pdf'
          target='_blank'
        >
          <button className='button-styled'>Baixar Currículo</button>
        </a>
      </div>
      <div className='hero-image desktop'>
        <img src={profile_pic} alt='Leandro' />
      </div>
    </div>
  );
};

export default Hero;
