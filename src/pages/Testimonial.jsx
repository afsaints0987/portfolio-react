import MotionContainer from "../components/MotionContainer";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Testimonial = () => {
  const [review, setReview] = useState();

  useEffect(() => {
    const fetchLocalReviews = async () => {
      try {
        const response = await fetch("/reviews.json");
        const reviewData = await response.json();
        const sortedReviews = reviewData.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp)
        })
        setReview(sortedReviews)
      } catch (error) {
        console.error("Failed to load reviews:", error);
      }
    };
    fetchLocalReviews();
  }, []);

  if (!review) {
    return <Loading />;
  }
  

  return (
    <MotionContainer>
      <div className="container mt-4">
        <h2 className="text-center text-lg-start">Testimonials</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {review.map((data, index) => (
            <div key={index} className="card p-4 shadow rounded-lg bg-white mb-4">
              <div className="text-sm text-gray-600 mt-2">
                <div className="mb-3">
                    <img src={data.image_url} alt="reviewer" width="40px" className="rounded-circle"/>
                </div>
                <strong>{data.reviewer_name}</strong>
                <br></br>
                {data.reviewer_title && (
                    <span className="block text-xs text-gray-500">
                    {data.reviewer_title}
                  </span>
                )}
                <div className="italic text-xs my-3">{data.timestamp}</div>
              </div>
            <p className="text-gray-800 mb-2">“ {data.review_text} ”</p>
            </div>
          ))}
        </div>
      </div>
    </MotionContainer>
  );
};

export default Testimonial;
