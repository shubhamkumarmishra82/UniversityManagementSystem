import "../assets/About.css";

export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            
            {/* TEXT CONTENT */}
            <div className="col-md-6 about-text">
              <h2>Welcome to <span>Aravali College Of Engineering And Management</span></h2>
              <p className="lead">
                Empowering students with knowledge, innovation, and leadership
                skills for a brighter future.
              </p>

              <p>
                UGC University offers a wide range of undergraduate, postgraduate,
                and research programs designed to meet global academic standards.
                Our experienced faculty, modern infrastructure, and student-centric
                approach help learners achieve excellence.
              </p>

              <ul className="about-list">
                <li>✔ Experienced & Qualified Faculty</li>
                <li>✔ Modern Labs & Digital Library</li>
                <li>✔ Industry-Focused Curriculum</li>
                <li>✔ Excellent Placement Support</li>
              </ul>

              <div className="about-buttons">
                <a href="#" className="btn btn-primary me-3">
                  Explore Courses
                </a>
                <a href="#" className="btn btn-outline-primary">
                  Learn More
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="col-md-6 text-center">
              <img
                src="/Images/college.png"
                className="about-img"
                alt="UGC University Campus"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
