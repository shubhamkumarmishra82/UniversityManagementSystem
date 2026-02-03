import "../assets/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section text-white pt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold"> Aravali College of Engineering and Management</h5>
            <p>
              Empowering students with knowledge and skills for a brighter future. 
              Join our programs and discover your potential.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/login" className="footer-link">Login</a></li>
              
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email:shubham9801033816@gmail.com</p>
            <p>Phone: +91 8285110736</p>
            <p>Address:sec-3 Faridabad Haryana</p>
            <div className="social-icons mt-2">
              <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

        </div>

        <hr style={{ borderColor: "#ffffff50" }} />

        <div className="text-center pb-3">
          &copy; 2026 Aravali College of Engineering and Management. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
