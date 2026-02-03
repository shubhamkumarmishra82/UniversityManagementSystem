import "../assets/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section text-white pt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">UGC University</h5>
            <p>
              Empowering students with knowledge and skills for a brighter future. 
              Join our programs and discover your potential.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Programs</a></li>
              <li><a href="#" className="footer-link">Admissions</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: info@ugcuniversity.com</p>
            <p>Phone: +91 123 456 7890</p>
            <p>Address: 123 University Road, City, Country</p>
            <div className="social-icons mt-2">
              <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

        </div>

        <hr style={{ borderColor: "#ffffff50" }} />

        <div className="text-center pb-3">
          &copy; 2026 UGC University. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
