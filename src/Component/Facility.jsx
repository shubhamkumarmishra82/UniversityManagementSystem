import "../assets/Facility.css";

export default function Facility() {
  return (
    <>
      <section className="facility-section">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/Images/campus.png"
                className="facility-img"
                alt="Campus"
              />
            </div>

            <div className="col-md-6 facility-text">
              <h2>World-Class Campus Facilities</h2>
              <p>
                Our campus offers smart classrooms, modern laboratories,
                digital libraries, hostels, and sports facilities to ensure
                holistic student development.
              </p>

              <ul>
                <li>✔ Smart Classrooms</li>
                <li>✔ Digital Library</li>
                <li>✔ Hostel & Sports Complex</li>
                <li>✔ Research & Innovation Labs</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
