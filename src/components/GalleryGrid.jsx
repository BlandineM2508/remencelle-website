import '../styles/Gallery.scss'
import { useEffect, useState } from 'react'
import HarpeImg from '../assets/harpe.png'
import GuitareImg from '../assets/guitare.png'

const gallery = [
  {
    title: 'Dépravé',
    description:
      'Composition de musique originale pour la bande annonce d’une série d’animation.',
    youtubeLink: 'https://www.youtube.com/watch?v=c1g5Nd8i7cs',
    thumbnail: 'https://img.youtube.com/vi/c1g5Nd8i7cs/maxresdefault.jpg', // Miniature YouTube
  },
  {
    title: 'Boulange Déracinée',
    description: 'Création de la bande originale d’un film documentaire.',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
    thumbnail: 'https://img.youtube.com/vi/example2/0.jpg',
  },
  {
    title: 'Témoins',
    description: 'Composition de musiques additionnelles pour un docu-fiction.',
    youtubeLink: 'https://www.youtube.com/watch?v=KBMElNXDiRU',
    thumbnail: 'https://img.youtube.com/vi/KBMElNXDiRU/maxresdefault.jpg',
  },
  {
    title: 'A nous une vie plus tard.',
    description: 'Composition de la bande originale d’un court-métrage.',
    youtubeLink: 'https://www.youtube.com/watch?v=TxzE_7S9iJs',
    thumbnail: 'https://img.youtube.com/vi/TxzE_7S9iJs/maxresdefault.jpg',
  },
  {
    title: 'Opération : Tigerpool.',
    description:
      'Composition de la bande originale d’un court métrage d’animation.',
    youtubeLink: 'https://www.youtube.com/watch?v=rsyL4D_PuDA',
    thumbnail: '/miniatureTigerpool.JPG',
  },
  {
    title: 'Arwolg',
    description:
      'Création des bandes originales de plusieurs romans de la série Noctrane.',
    youtubeLink: 'https://www.youtube.com/watch?v=3vTKNjPX6D4',
    thumbnail: 'https://img.youtube.com/vi/3vTKNjPX6D4/maxresdefault.jpg',
  },
  {
    title: 'Sociorama',
    description: 'Création d’un générique pour le podcast “Sociorama”',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
    thumbnail: 'https://img.youtube.com/vi/example2/0.jpg',
  },
]

function GalleryGrid() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true) // Déclencher l'animation après le montage du composant
    }, 100) // Délai pour rendre l'animation plus fluide
  }, [])
  return (
    <div className="gallery-grid">
      {gallery.map((gallery, index) => (
        <div
          key={index}
          className={`gallery-card ${isVisible ? 'fade-in' : ''}`}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <a
            href={gallery.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gallery.thumbnail}
              alt={gallery.title}
              className="gallery-thumbnail"
            />
            <div className="gallery-info">
              <h3>{gallery.title}</h3>
              <p>{gallery.description}</p>
            </div>
          </a>
          <img
            src={HarpeImg}
            alt="harpe"
            className="instrument instrument-right"
          />
          <img
            src={GuitareImg}
            alt="guitare"
            className="instrument instrument-left"
          />
        </div>
      ))}
    </div>
  )
}

export default GalleryGrid
