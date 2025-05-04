import MotionContainer from "../components/MotionContainer";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useTheme } from "../context/ThemeContext";

const Testimonial = () => {
  const [review, setReview] = useState();
  const {darkMode} = useTheme()

  useEffect(() => {
    const fetchLocalReviews = async () => {
      try {
        const response = await fetch("/reviews.json");
        const reviewData = await response.json();
        const sortedReviews = reviewData.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        setReview(sortedReviews);
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
        <h2 className="text-center">Testimonials</h2>
        <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-dark`}>
          {review.map((data, index) => (
            <div
              key={index}
              className={`card p-4 shadow rounded-lg mb-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="text-sm ">
                <div className="mb-3">
                  <img
                    src={data.image_url}
                    alt="reviewer"
                    width="40px"
                    className="rounded-circle"
                  />
                  <strong className="mx-3">{data.reviewer_name}</strong>
                </div>
                {data.reviewer_title && (
                  <span className="block text-xs">{data.reviewer_title}</span>
                )}
                <div className="italic text-xs my-3">{data.timestamp}</div>
              </div>
              <p className="mb-2">“ {data.review_text} ”</p>
            </div>
          ))}
        </div>
      </div>
    </MotionContainer>
  );
};

export default Testimonial;
