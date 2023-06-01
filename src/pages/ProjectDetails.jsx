import {useParams, Link} from 'react-router-dom'
import MotionContainer from '../components/MotionContainer'
import {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'

const ProjectDetails = () => {
    const [project, setProject] = useState()
    const {id} = useParams()

    useEffect(()=> {
        const fetchProject = async () => {
            const response = await fetch(`http://localhost:1337/api/projects/${id}`)
            const data = await response.json()

            const projDetail = data.data

            console.log(projDetail)
            setProject(projDetail)
        }
        fetchProject();

    },[id])

    if(!project){
        return
    }

    console.log(project)

    return (
        <MotionContainer>
            <div className="container" id="proj-detail">
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <h4>{project.attributes.title}</h4>
                        <img src={project.attributes.image_link} className="img-thumbnail" alt={project.attributes.id}/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center mt-5">
                        <p>{project.attributes.details}</p>
                        <a href={project.attributes.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit the site</a>
                    </div>
                </div>
                <Link to='/projects'><FaIcons.FaAngleDoubleLeft/> Back to Project</Link>
            </div>
        </MotionContainer>
    )
}

export default ProjectDetails
