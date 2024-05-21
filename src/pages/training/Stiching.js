import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 

const Stiching = () => {
  return (
    <div className="App">
      <section className="hero d-flex flex-column mt-5 text-center">
        <h1 className="display-4 fw-bold text-shadow">Stitch Your Dreams</h1>
        <p className="lead mb-4">
          Empowering women with the art of stitching for a fulfilling career.
        </p>
        <a href="#training-details" className="btn btn-lg btn-outline-danger ">
          Explore the Program
        </a>
      </section>

      <section className="about py-5" id="training-details">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/2/390959401/DX/GA/EF/104640872/men-tailoring-training.jpg"
                className="img-fluid rounded-3"
                alt="Stitching Class"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <h2>Master the Art of Stitching</h2>
              <p>
                This comprehensive program equips women with the skills to
                become confident stitchers. Learn from experienced instructors
                and gain proficiency in various techniques, from basic hand
                stitching to advanced machine operation.
              </p>
              <ul className="list-unstyled features">
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  Expert female instructors
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-calendar-event-fill text-primary me-2"></i>{" "}
                  Flexible schedules
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-cash-coin text-primary me-2"></i> Career
                  guidance and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Benefits of Our Program</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <BenefitCard
              title="Unlock Creativity"
              description="Express yourself through stitching and create unique garments."
            />
            <BenefitCard
              title="Build a Career"
              description="Gain the skills to pursue a fulfilling career in the fashion industry."
            />
            <BenefitCard
              title="Empower Yourself"
              description="Gain confidence and independence through mastering a valuable skill."
            />
          </div>
        </div>
      </section>

      <section className="call-to-action py-5 text-center">
        <div className="container">
          <h2>Ready to Start Stitching?</h2>
          <a href="/register" className="btn btn-lg btn-primary">
            Enroll Now
          </a>
        </div>
      </section>

      <footer className="py-3 text-center bg-primary text-white">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Stitch Your Future
          </p>
        </div>
      </footer>
    </div>
  );
}


function BenefitCard({ title, description }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}


export default Stiching;
