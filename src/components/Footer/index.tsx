import './Footer.scss'
import Heart from '../../images/heart.svg'

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright © 2021 | Feito com <img src={Heart} alt="amor"/> usando React</p>
    </div>
  )
}

export default Footer