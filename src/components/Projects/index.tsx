import ProjectCurriculo from '../../images/curriculo-typescript.png'
import ProjectInstagram from '../../images/instagram-clone.png'
import ProjectFoodShop from '../../images/food-shop.png'
import Line from '../../images/line.png'

import './Projects.scss'

const Projects = () => {
  return (
    <div>
      <h1 id="projects" className="section-title">Meus Projetos</h1>
      <div className="project-list">
      <div className="project-box">
        <div className="project-img">
          <a href="https://github.com/leandronunesdev/curriculo-typescript" target="_blank"><img src={ProjectCurriculo} alt="Projeto Currículo"/></a>          
        </div>
        <div className="project-text">
          <h1><a href="https://github.com/leandronunesdev/curriculo-typescript" target="_blank">Currículo Online</a></h1>
          <p>Projeto de Currículo Online utilizando React e TypeScript.</p>
        </div>        
      </div>
      <img src={Line} className="line" alt="linha"/>
      <div className="project-box">
        <div className="project-img">
          <a href="https://github.com/leandronunesdev/instagram-clone" target="_blank"><img src={ProjectInstagram} alt="Projeto Instagram Clone"/></a>          
        </div>
        <div className="project-text">
          <h1><a href="https://github.com/leandronunesdev/instagram-clone" target="_blank">Instagram Clone</a></h1>
          <p>Projeto de Instagram Clone utilizando React, TypeScript e Redux.</p>
        </div>        
      </div>
      <img src={Line} className="line" alt="linha"/>
      <div className="project-box">
        <div className="project-img">
          <a href="https://github.com/leandronunesdev/food-shop" target="_blank"><img src={ProjectFoodShop} alt="Projeto Food Shop"/></a>          
        </div>
        <div className="project-text">
          <h1><a href="https://github.com/leandronunesdev/food-shop" target="_blank">Food Shop</a></h1>
          <p>Projeto de Loja Online usando consumo de API. Ferramentas: React e TypeScript</p>
        </div>        
      </div>
      <img src={Line} className="line" alt="linha"/>
      </div>      
    </div>
  )
}

export default Projects