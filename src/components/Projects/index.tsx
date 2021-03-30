import ProjectCurriculo from '../../images/curriculo-typescript.png'
import ProjectInstagram from '../../images/instagram-clone.png'
import ProjectFoodShop from '../../images/food-shop.png'
import Line from '../../images/line.png'

import './Projects.scss'
import { Dados, Project } from '../../types/perfil'

const Projects = (prop: Dados) => {

  const { projects } = prop.dados

  return (
    <div>
      <h1 id="projects" className="section-title">Meus Projetos</h1>
      <div className="project-list">
        {
          projects !== null &&
          projects.map((item: Project) => (
            <>
            <div key={item.id} className="project-box">
              <div className="project-img">
                <a href={item.codeLink} target="_blank"><img src={item.image} alt={item.title}/></a>          
              </div>
              <div className="project-text">
                <h1><a href={item.codeLink} target="_blank">{item.title}</a></h1>
                <p>{item.description}</p>
                <div>
                  {
                    item.liveLink !== "" &&
                    <a href={item.liveLink} target="_blank"><button className="button-styled">Ver em Produção</button></a>
                  } 
                  {
                    item.codeLink !== "" &&
                    <a href={item.codeLink} target="_blank"><button className="button-styled">Ver no Github</button></a>
                  }                 
                </div>                              
              </div>    
            </div>
            <img src={Line} className="line" alt="linha"/>
            </>            
          ))
        }
      </div>      
    </div>
  )
}

export default Projects