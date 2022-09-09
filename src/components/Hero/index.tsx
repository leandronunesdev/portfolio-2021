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
          <br /> Frontend Engineer
        </h1>
        <p>
          Front-End developer with knowledge in ReactJS, TypeScript, Redux,
          ContextAPI, JavaScript, React Native, and Styled Components. I have
          critical and analytical vision, ability to plan, organize and sense of
          urgency. I am cooperative, multiplier of knowledge, I have good
          communication skills and an advanced level of English.
        </p>
        <a
          href='https://github.com/leandronunesdev/curriculo/raw/master/LEANDRO%20NUNES%20-%20DEV.pdf'
          target='_blank'
          rel='noreferrer'
        >
          <button className='button-styled'>Download Curriculum</button>
        </a>
      </div>
      <div className='hero-image desktop'>
        <img src={profile_pic} alt='Leandro' />
      </div>
    </div>
  );
};

export default Hero;
