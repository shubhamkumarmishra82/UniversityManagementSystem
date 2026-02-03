import CountUp from "react-countup";
import "../assets/Facts.css";

export default function Facts() {
  return (
    <>
      <section className="why-us">
        <div className="container">
          <h2 className="text-center mb-5">
            Why Choose <span>Our Colllege?</span>
          </h2>

          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <h3>
                <CountUp start={1} end={25} duration={2.5} />+
              </h3>
              <p>Years of Excellence</p>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <h3>
                <CountUp start={1} end={100} duration={2.5} />+
              </h3>
              <p>Programs Offered</p>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <h3>
                <CountUp start={1} end={500} duration={3} />+
              </h3>
              <p>Expert Faculty</p>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <h3>
                <CountUp start={1} end={95} duration={2.5} />%
              </h3>
              <p>Placement Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
