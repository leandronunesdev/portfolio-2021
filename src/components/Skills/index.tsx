import LogoReact from '../../images/reactjs.svg'
import LogoTypeScript from '../../images/typescript.svg'
import LogoRedux from '../../images/redux.svg'
import LogoJavaScript from '../../images/javascript.svg'
import LogoCSS from '../../images/css3.svg'
import LogoHTML from '../../images/html5.svg'

import './Skills.scss'

const Skills = () => {
  return (
    <div className="skills-box">      
      <h1 id="skills" className="section-title">Minhas Skills</h1>
      <ul>
        <li><img src={LogoReact} alt="Logo do ReactJS"/><p>ReactJS</p></li>
        <li><img src={LogoTypeScript} alt="Logo do TypeScript"/><p>TypeScript</p></li>
        <li><img src={LogoRedux} alt="Logo do Redux"/><p>Redux</p></li>
        <li><img src={LogoJavaScript} alt="Logo do JavaScript"/><p>JavaScript</p></li>
        <li><img src={LogoCSS} alt="Logo do CSS3"/><p>CSS3</p></li>
        <li><img src={LogoHTML} alt="Logo do HTML 5"/><p>HTML5</p></li>                
      </ul>
    </div>
  )
}

export default Skills