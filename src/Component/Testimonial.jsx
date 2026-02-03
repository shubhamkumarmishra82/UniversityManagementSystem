import "../assets/Testimonial.css";

export default function Testimonials() {
  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">What Our Students Say</h2>
        <div className="row">
          {/* Testimonial 1 */}
          <div className="col-md-4 mb-4">
            <div className="card testimonial-card p-4 shadow-sm text-center">
              <img
                src="/Images/rahul.png"
                alt="Rahul Sharma"
                className="student-img mb-3"
              />
              <p className="testimonial-text">
                "Aravali College of Engineering and Management  gave me excellent faculty and placements."
              </p>
              <h6 className="student-name">- Rahul Sharma</h6>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4 mb-4">
            <div className="card testimonial-card p-4 shadow-sm text-center">
              <img
                src="/Images/anjali.png"
                alt="Anjali Verma"
                className="student-img mb-3"
              />
              <p className="testimonial-text">
                "The campus environment helped me grow professionally."
              </p>
              <h6 className="student-name">- Anisha Mishra</h6>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4 mb-4">
            <div className="card testimonial-card p-4 shadow-sm text-center">
              <img
                src="/Images/Aman.png"
                alt="Aman Gupta"
                className="student-img mb-3"
              />
              <p className="testimonial-text">
                "Modern labs and industry exposure made learning practical."
              </p>
              <h6 className="student-name">- Aman Singh</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
