import packageJson from '../../package.json'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
        Versión {packageJson.version} - Año 2020 -- Natalia Suarez
      </p>
    </footer>
  )
}

export default Footer