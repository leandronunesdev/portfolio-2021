import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <nav className='navbar'>
        <ul>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
