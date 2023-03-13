import MotionContainer from '../components/MotionContainer'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Blog = () => {
    const [blogs, setBlogs] = useState()

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch('http://localhost:1337/api/blogs');
            const data = await response.json()
            const blogData = data.data
            setBlogs(blogData)
        }

        fetchBlog();
    },[])

    if(!blogs){
        return
    }
    console.log(blogs)
    
    return (
        <MotionContainer>
            <div className="container">
                <h2 className="text-center text-lg-start">Blog</h2>

                {blogs.map((blog, index) => (
                    <div key={index} className="card mt-4 bg-light p-4 shadow">
                        <h3>{blog.attributes.title}</h3>
                        <small>{new Date().toDateString(blog.attributes.createdAt)}</small>
                        <p>{blog.attributes.body.substring(0, 35)} ...</p>
                        <Link to={`${blog.id}`}>Read more...</Link>
                    </div>
                ))}
                
            </div>
        </MotionContainer>
    )
}

export default Blog
