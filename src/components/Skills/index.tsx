import './Skills.scss'
import { Dados } from '../../types/perfil'

const Skills = (prop: Dados) => { 

  const { skills } = prop.dados

  
  return (
    <div className="skills-box">      
      <h1 id="skills" className="section-title">Minhas Skills</h1>
      <ul>
        {
          skills !== null &&
          skills.map((item: any) => (
            <li key={item.id}><img src={item.image} alt={item.name}/><p>{item.name}</p></li>
          ))
        }    
      </ul>
    </div>
  )
}

export default Skills