import MotionContainer from '../components/MotionContainer'
import {useEffect, useState} from 'react'
import Loading from '../components/Loading'

const Testimonial = () => {
    const [review, setReview] = useState()
    const [loading, setLoading] = useState(false)

    const fbUri = process.env.REACT_APP_FB_URL
    const token = process.env.REACT_APP_TOKEN

    // Fetch Reviews from Facebook API

    useEffect(() => {
        const fetchReview = async () => {
            setLoading(true)
            const response = await fetch(fbUri, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const reviewData = await response.json()
            
            setReview(reviewData.ratings.data)
        }
        fetchReview();
        setLoading(false)
    },[fbUri, token])

    if(!review){
        return
    }

    return (
        <MotionContainer>
            {loading ? <Loading /> :
            <div className="container">
                <h2 className="text-center text-lg-start">Testimonials</h2>
                <div className="mt-4">
                    {review.map((data, index) => (
                        <div key={index} className="card p-4 mb-3 shadow">
                            <p>“ {data.review_text} ”</p>
                            <small style={{'fontStyle': 'italic'}}>{data.created_time.slice(0, 10)}</small>
                        </div>
                    ))}
                </div>
            </div>
            }
        </MotionContainer>
    )
}

export default Testimonial
