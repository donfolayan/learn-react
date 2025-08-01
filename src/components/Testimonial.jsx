import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/testimonial.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  // Fetch Dummy Testimonial Data
  useEffect(() => {
    axios
      .get("https://testimonialapi.vercel.app/api")
      .then((res) => setTestimonials(res.data));
  }, []);

  if (!testimonials || testimonials.length === 0) {
    return <div className="testimonials">Loading ...</div>;
  }

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].message}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].name}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
export default Testimonial;
