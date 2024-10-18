import '../styles/Projects.scss'
import SagaNoctrane from '../assets/SagaNoctrane.png'
import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'La saga Noctrane par Sebastien N.R',
    description:
      ' jeqjhewehqkejhqjehqjkhe jqheje qeqehwj qeqjehjqhejkqwhejkqw eqjehqje qhejkqhejkqhejq ejhwqehjq ejqwjehqjehqeh jhjrwrhjer er jkewrjwer jwrhw rjewhrjw rwjr r rjewhrjwrjehr r jrjwjwrhe r kjwre jhrjw rjw rwjrwjkh ekjekqkeqwj  eqjkwj ewk ekwjekqejwk ejwqeqifkpoi e wkkeq  ',
    youtubeLink: 'https://www.youtube.com/watch?v=dfT2qU2Axyg',
    image: SagaNoctrane,
    thumbnail: 'https://img.youtube.com/vi/dfT2qU2Axyg/maxresdefault.jpg',
  },
  {
    title: 'Projet 2',
    description:
      'Description du projet 2 - nkwhjekqje qe qkejkekqejwkqljeq ejqpoeqope rjekrewjrkwejrkej krjwkrjekwrwkrj ewkrjwr wekjrkewjrkwe rejkehqhe jehw jeqhjeq jehjqwewjq eqj ejhejqhewjqhje qqwehqjehqjhwjkehjkkwerjwkerjkwjke krjewkrjwkrjkwjrwjrkwjrkwejkrewjrkwejrkwjrkrkjekwrwk qeeq ejqkeqkejkqw eqkle klqwekq ekqje kqjeklqwjeklqe lqe qkeqjkejqwklej qwopejqope orik[oror qelpqewqe kqjeq',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
    image: '',
    thumbnail: 'https://img.youtube.com/vi/example2/0.jpg',
  },
  {
    title: 'Projet 3',
    description:
      'Description du projet 3  nknkwkejrehjrehjehj hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkqeklwjkleqjkelwj kjwqke qwke qekqejqke kqejklej qekqw ekqjeklqjekwje qekjekwjekjklwje ekjqkejqkleqkwljeqkleq eqjeljqekj',
    youtubeLink: 'https://www.youtube.com/watch?v=example3',
    image: '',
    thumbnail: 'https://img.youtube.com/vi/example3/0.jpg',
  },
]

function Project() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true) // Déclencher l'animation après le montage du composant
    }, 100) // Délai pour rendre l'animation plus fluide
  }, [])

  return (
    <div className="background-grid">
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${isVisible ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="project-container">
              <div className="project-title">
                <h3>{project.title}</h3>
              </div>

              <div className="description-info">
                <p>{project.description}</p>
                <img
                  className="img-info"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>

            <div className="youtube-info">
              <a
                href={project.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="project-thumbnail"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
