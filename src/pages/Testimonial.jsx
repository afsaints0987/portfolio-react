import MotionContainer from '../components/MotionContainer'
import {useEffect, useState} from 'react'
import Loading from '../components/Loading'

const Testimonial = () => {
    const [review, setReview] = useState()

    const fbUri = import.meta.env.VITE_FB_URL
    const token = import.meta.env.VITE_TOKEN

    // Fetch Reviews from Facebook API
    
    useEffect(() => {
        const fetchReview = async () => {
            const response = await fetch(fbUri, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const reviewData = await response.json()
            
            setReview(reviewData.ratings.data)
        }
        fetchReview();
    },[fbUri, token])

    if(!review){
        return
    }

    return (
        <MotionContainer>
            
            <div className="container mt-4">
                <h2 className="text-center text-lg-start">Testimonials</h2>
                <div className="mt-4">
                    {review.map((data, index) => (
                        <div key={index} className="card p-4 mb-3 shadow">
                            <p>“ {data.review_text} ”</p>
                            <small style={{'fontStyle': 'italic'}}>{new Date(data.created_time).toString().slice(0,15)}</small>
                        </div>
                    ))}
                </div>
            </div>
            
            
        </MotionContainer>
    )
}

export default Testimonial
