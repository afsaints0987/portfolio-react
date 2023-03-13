import MotionContainer from '../components/MotionContainer'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Project = () => {
    const [project, setProject] = useState()

    useEffect(() => {
        const fetchProjects =  async () => {

            const response = await fetch('http://localhost:1337/api/projects')
            const data = await response.json()

            const projectData = data.data

            console.log(projectData)
            setProject(projectData)
        }
        fetchProjects();
        
    },[])

    if(!project){
        return
    }

    console.log(project)
    return (
        <MotionContainer>
            <div className="container">
            <h2 className="text-center text-lg-start">Projects</h2>
            <div className="project-container px-4">
            {project.map((p, index) => (
                <div key={index} className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
                    <h5 className="mt-3">{p.attributes.title}</h5>
                    <Link to={`/projects/${p.id}`}>
                    <img src={p.attributes.image_link} alt="banner" width="600" className="img-thumbnail my-2"/>
                    </Link>
                    <p >{p.attributes.description}</p>
                    <a className="btn btn-sm btn-primary" id="projBtn" href={p.attributes.link} target="_blank" rel="noreferrer noopener">Go to website</a>
                </div>
            ))}
            </div>
            </div>
        </MotionContainer>
    )
}

export default Project
