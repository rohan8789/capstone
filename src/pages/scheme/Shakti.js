import React from 'react'

const Shakti = () => {
  return (
    <>
    <div className="mt-5 container mission-shakti">
      <header className="row justify-content-center">
        <h1 className="col-md-auto display-1">Mission Shakti</h1>
        <img
          src="https://missionshakti.odisha.gov.in/sites/default/files/styles/industry_slider/public/2022-03/slider-3.jpg?itok=tdxeVjq-"
          alt="Mission Shakti Logo"
          className="container"
        />
      </header>

      <main className="row justify-content-center">
        <section className="col-md-8 mission-shakti-intro">
          <h2>Empowering Women, Strengthening India</h2>
          <p>
            Mission Shakti is a comprehensive initiative launched by the
            Government of India to empower women across the nation. It
            encompasses various programs and schemes aimed at promoting women's
            participation in all spheres of life, from social and economic
            development to education and decision-making.
          </p>
        </section>

        <section className="col-md-8 mission-shakti-pillars">
          <h3>Pillars of Mission Shakti</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill me-2"></i>
              Women's education and skill development
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill me-2"></i>
              Economic empowerment through entrepreneurship and financial
              inclusion
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill me-2"></i>
              Elimination of violence against women and ensuring their safety
              and security
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill me-2"></i>
              Political participation and leadership roles for women
            </li>
          </ul>
        </section>

        <section className="col-md-8 mission-shakti-impact">
          <h3>Impact of Mission Shakti</h3>
          <p>
            Mission Shakti has made significant strides in empowering women in
            India. It has led to:
          </p>
          <ul>
            <li>Increased enrollment of girls in schools</li>
            <li>
              More women pursuing higher education and professional careers
            </li>
            <li>
              Greater participation of women in entrepreneurship and business
              ownership
            </li>
            <li>Enhanced financial independence for women</li>
            <li>Stronger social and political voice for women</li>
          </ul>
        </section>

        <section className="col-md-8 mission-shakti-call-to-action text-center">
          <h3>Join the Movement for Women's Empowerment</h3>
          <p>
            Mission Shakti is an ongoing journey. You can be a part of it by:
          </p>
          <ul>
            <li>Spreading awareness about women's rights and opportunities</li>
            <li>Supporting initiatives that empower women</li>
            <li>
              Mentoring and encouraging young girls to pursue their dreams
            </li>
            <li>Standing up against gender discrimination</li>
          </ul>
          <a
            href="/register"
            className="btn btn-primary"
          >
            Learn More 
          </a>
        </section>
      </main>

      <footer className="row justify-content-center">
        <p className="col-md-auto">
          &copy; Government of India {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  </>
  )
}

export default Shakti
