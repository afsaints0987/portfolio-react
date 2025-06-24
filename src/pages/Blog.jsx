import MotionContainer from "../components/MotionContainer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { convert } from "html-to-text"; // npm install html-to-text
import { useTheme } from "../context/ThemeContext";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const {darkMode} = useTheme()

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@afsaints0987"
        );
        const data = await response.json();
        setBlogs(data.items.slice(0, 6)); // Only latest 6 posts
        setLoading(false);
      } catch (err) {
        console.error("Failed to load blog data", err);
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  const truncate = (text, limit = 250) =>
    text.length > limit ? text.substring(0, limit) + "..." : text;

  return (
    <MotionContainer>
      {loading ? (
        <Loading title="Loading blog posts..." />
      ) : (
        <div className="container py-5">
          <h2 className={`mb-4 text-center ${darkMode ? "text-light" : "text-dark"}`}>Latest Blog Posts</h2>
          <div className="row g-4">
            {blogs.map((item, index) => {
              const cleanText = convert(item.content, {
                wordwrap: false,
                selectors: [{ selector: "a", options: { ignoreHref: true } }],
              });

              
            const formattedDate = new Date(item.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });

              return (
                <div className="col-md-6 col-lg-4 w-100" key={index}>
                  <div
                    className={`card h-100 shadow-sm rounded-lg ${
                      darkMode ? "bg-dark text-white" : "bg-white text-dark"
                    }`}
                  >
                    {item.thumbnail && (
                      <img
                        src={item.thumbnail}
                        className="card-img-top"
                        alt={item.title}
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                    )}
                    <div
                      className={`card-body d-flex flex-column ${
                        darkMode ? "bg-dark text-white" : "bg-white text-dark"
                      }`}
                    >
                      <h5 className="card-title fw-bold">{item.title}</h5>
                      <small className="text-end mx-4">📅 {formattedDate}</small>
                      <p className="card-text pt-2">{truncate(cleanText)}</p>
                      <a
                        href={item.link}
                        className={`mt-auto ${
                          darkMode ? "text-light" : "text-muted"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </MotionContainer>
  );
};

export default Blog;
