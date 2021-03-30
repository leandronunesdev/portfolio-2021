import profile_pic from '../../images/profile-picture_square.jpg'

import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero-box">
      <div className="hero-image responsive">
        <img src={profile_pic} alt="Leandro"/>
      </div>
      <div className="hero-text">
        <h1>Olá, sou Leandro,<br/> Desenvolvedor Front-End</h1>
        <p>Analista de Compliance em transição de carreira para Desenvolvedor Front-End. 
          Possuo conhecimento em ReactJS, TypeScript, Redux, HTML5, CSS3 e JavaScript.
          Tenho visão crítica e analítica, capacidade de planejamento, organização e senso de urgência.
          Sou cooperativo, multiplicador de conhecimento, tenho facilidade de comunicação oral e escrita e nível avançado de inglês.          
        </p>
        <a href="https://drive.google.com/file/d/1QAoxyCeapYmO7K3yTU2_BQh4rGP0zvn3/view?usp=sharing" target="_blank"><button className="button-styled">Baixar Currículo</button></a>
      </div>
      <div className="hero-image desktop">
        <img src={profile_pic} alt="Leandro"/>
      </div>
    </div>
  )
}

export default Hero
