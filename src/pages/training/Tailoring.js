import React from "react";

const Tailoring = () => {
  return (
    <div className="App">
      <header className="hero d-flex justify-content-center align-items-center text-center mt-4">
        <div className="container">
          <h1 className="display-5 fw-bold">
            Empower Your Style: Tailoring for Women
          </h1>
          <p className="lead mb-4">
            Master the art of tailoring and create garments that perfectly fit
            your vision.
          </p>
          <a href="#training-details" className="btn btn-lg btn-primary">
            Learn More
          </a>
        </div>
      </header>

      <section className="about py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                src="https://kettocdn.gumlet.io/media/campaign/592000/592831/image/621f158e1c54e.jpeg?w=400&dpr=2.6"
                className="img-fluid rounded-3"
                alt="Sewing Machine"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <h2>Unlock Your Inner Designer</h2>
              <p>
                This program equips women with the skills to tailor garments to
                their unique body shapes and styles. Learn essential techniques
                like measuring, pattern drafting, fabric selection, and garment
                construction.
              </p>
              <ul className="list-unstyled features">
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  Expert female instructors
                </li>
                <li>
                  <i className="bi bi-gear-fill text-primary me-2"></i> Small
                  class sizes for personalized attention
                </li>
                <li>
                  <i className="bi bi-scissors2-square text-primary me-2"></i>{" "}
                  Hands-on practice with various fabrics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits py-5" id="benefits">
        <div className="container">
          <h2 className="text-center mb-4">Benefits of Tailoring</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <BenefitCard
              title="Perfect Fit"
              description="No more ill-fitting clothes! Tailor garments to flatter your unique body shape."
            />
            <BenefitCard
              title="Express Yourself"
              description="Design and create clothes that reflect your personal style and confidence."
            />
            <BenefitCard
              title="Save Money"
              description="Extend the life of your clothes and avoid expensive alterations."
            />
          </div>
        </div>
      </section>

      <section className="call-to-action py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Ready to Start Your Tailoring Journey?</h2>
          <a href="#enroll" className="btn btn-lg btn-primary">
            Enroll Now
          </a>
        </div>
      </section>

      <footer className="py-3 text-center">
        <div className="container">
          <p className="mb-0 text-muted">
            &copy; {new Date().getFullYear()} Empower Your Style
          </p>
        </div>
      </footer>
    </div>
  );
};

function BenefitCard({ title, description }) {
  return (
    <div className="col">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Tailoring;
