import '../styles/Gallery.scss'
import { useEffect, useState } from 'react'
import HarpeImg from '../assets/harpe.png'
import GuitareImg from '../assets/guitare.png'

const gallery = [
  {
    title: 'Projet 1',
    description: 'Description du projet 1',
    youtubeLink: 'https://www.youtube.com/watch?v=example1',
    thumbnail: 'https://img.youtube.com/vi/example1/0.jpg', // Miniature YouTube
  },
  {
    title: 'Projet 2',
    description: 'Description du projet 2',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
    thumbnail: 'https://img.youtube.com/vi/example2/0.jpg',
  },
  {
    title: 'Projet 3',
    description: 'Description du projet 3',
    youtubeLink: 'https://www.youtube.com/watch?v=example3',
    thumbnail: 'https://img.youtube.com/vi/example3/0.jpg',
  },
  {
    title: 'Projet 1',
    description: 'Description du projet 1',
    youtubeLink: 'https://www.youtube.com/watch?v=example1',
    thumbnail: 'https://img.youtube.com/vi/example1/0.jpg',
  },
  {
    title: 'Projet 2',
    description: 'Description du projet 2',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
    thumbnail: 'https://img.youtube.com/vi/example2/0.jpg',
  },
  {
    title: 'Projet 3',
    description: 'Description du projet 3',
    youtubeLink: 'https://www.youtube.com/watch?v=example3',
    thumbnail: 'https://img.youtube.com/vi/example3/0.jpg',
  },
  {
    title: 'Projet 2',
    description: 'Description du projet 2',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
    thumbnail: 'https://img.youtube.com/vi/example2/0.jpg',
  },
  {
    title: 'Projet 3',
    description: 'Description du projet 3',
    youtubeLink: 'https://www.youtube.com/watch?v=example3',
    thumbnail: 'https://img.youtube.com/vi/example3/0.jpg',
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
