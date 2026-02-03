import "../assets/Feature.css";

export default function Feature() {
  return (
    <>
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title">
          Our Popular Programs
        </h2>

        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card feature-card h-100">
              <img src="/Images/computer.png" className="card-img-top w-100" alt="Computer Science" />
              <div className="card-body text-center">
                <h5 className="card-title">Computer Science</h5>
                <p className="card-text">
                  Learn programming, AI, and web development with expert faculty.
                </p>
                <button className="btn btn-outline-primary btn-sm">Learn More</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card feature-card h-100">
              <img src="/Images/business.png" className="card-img-top" alt="Business Administration" />
              <div className="card-body text-center">
                <h5 className="card-title">Business Administration</h5>
                <p className="card-text">
                  Develop leadership and management skills for the corporate world.
                </p>
                <button className="btn btn-outline-primary btn-sm">Learn More</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card feature-card h-100">
              <img src="/Images/research.png" className="card-img-top" alt="Science & Research" />
              <div className="card-body text-center">
                <h5 className="card-title">Science & Research</h5>
                <p className="card-text">
                  Engage in groundbreaking research and scientific exploration.
                </p>
                <button className="btn btn-outline-primary btn-sm">Learn More</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4 mb-4">
            <div className="card feature-card h-100">
              <img src="/Images/engineering.jpg" className="card-img-top" alt="Engineering" />
              <div className="card-body text-center">
                <h5 className="card-title">Engineering</h5>
                <p className="card-text">
                  Build innovative solutions with hands-on engineering programs.
                </p>
                <button className="btn btn-outline-primary btn-sm">Learn More</button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 mb-4">
            <div className="card feature-card h-100">
              <img src="/Images/arts.png" className="card-img-top" alt="Arts & Humanities" />
              <div className="card-body text-center">
                <h5 className="card-title">Arts & Humanities</h5>
                <p className="card-text">
                  Explore creativity, culture, and critical thinking skills.
                </p>
                <button className="btn btn-outline-primary btn-sm">Learn More</button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4 mb-4">
            <div className="card feature-card h-100">
              <img src="/Images/medical.png" className="card-img-top" alt="Medical Sciences" />
              <div className="card-body text-center">
                <h5 className="card-title">Medical Sciences</h5>
                <p className="card-text">
                  Advance healthcare education with modern medical training.
                </p>
                <button className="btn btn-outline-primary btn-sm">Learn More</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
