import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import MotionContainer from '../components/MotionContainer'
import * as FaIcons from 'react-icons/fa'

const BlogDetails = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState()

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`http://localhost:1337/api/blogs/${id}`)
            const data = await response.json()
            const blogDetails = data.data

            console.log(blogDetails)
            setBlog(blogDetails)
        } 

        fetchBlog();
    },[id])

    if(!blog){
        return null
    }

    console.log(blog)

    return (
        <MotionContainer>
            <div className="container mt-5" id="blog-detail">
                <h2>{blog.attributes.title}</h2>
                <small>{new Date().toDateString(blog.attributes.createdAt)}</small>
                <p className="mt-2">{blog.attributes.body}</p>
                <Link to='/blog'><FaIcons.FaAngleDoubleLeft/> Back</Link>
            </div>
        </MotionContainer>
    )
}

export default BlogDetails
