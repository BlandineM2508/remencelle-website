import '../styles/Home.scss'
import logoInsta from '../assets/logo-instagram.png'
import logoYoutube from '../assets/logo-youtube.png'
import logoSpotify from '../assets/logo-spotify.png'
import Biography from '../components/Biography'

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="heroName">
          Bienvenue dans l&apos;univers de Remi Encelle
        </h1>
        <p>Découvrez mes projets musicaux et suivez mon actualité.</p>
        <div className="social-links">
          <a href="https://www.instagram.com">
            <img className="logo" src={logoInsta} alt="logo instagram" />
          </a>
          <a href="https://www.spotify.com">
            <img className="logo" src={logoSpotify} alt="logo instagram" />
          </a>
          <a href="https://www.youtube.com">
            <img className="logo" src={logoYoutube} alt="logo youtube" />
          </a>
        </div>
      </div>
      <Biography />
    </div>
  )
}

export default Home
