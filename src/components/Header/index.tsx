import './Header.scss';

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header