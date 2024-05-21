import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Poshan = () => {
  return (
    <div className="mission-poshan">
      <section className="hero d-flex align-items-center">
        <Container>
          <div className="text-center">
            <h1>Nourishing India's Children</h1>
            <p className="lead">Mission Poshan - A Government Initiative</p>
            <button className="btn btn-primary" onClick={()=>{navigate('/register')}}>Learn More</button>
          </div>
        </Container>
        <img
          src="https://blog.akshayapatra.org/wp-content/uploads/2018/06/banner-2.jpg"
          alt="Mission Poshan Banner"
          className="img-fluid"
        />
      </section>

      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mb-4">About Mission Poshan</h2>
          <Row>
            <Col md={6}>
              <Card className="border-0 mb-4">
                <Card.Img
                  src="https://sc0.blr1.digitaloceanspaces.com/large/824189-47399-ufuvhltder-1481739097.JPG"
                  alt="Healthy Children"
                />
              </Card>
            </Col>
            <Col md={6}>
              <p>
                Mission Poshan (PM) is a flagship scheme of the Government of
                India launched in 2018 to improve the nutritional status of
                children in the country. It aims to achieve the following
                objectives:
              </p>
              <ul>
                <li>Reduce stunting in children (0-6 years) by 2% per year.</li>
                <li>Reduce wasting in children (0-6 years) by 2% per year.</li>
                <li>
                  Improve anemia among children, adolescent girls, and pregnant
                  women in a phased manner.
                </li>
                <li>
                  Improve dietary diversity and consumption of essential
                  micronutrients across age groups.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="key-initiatives" className="py-5 bg-light">
        <Container>
          <h2>Key Initiatives</h2>
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img
                  src="https://www.unicef.org/india/sites/unicef.org.india/files/styles/hero_tablet/public/UN0682820.JPG.webp?itok=g3RJuWy_"
                  alt="Key Initiative 1"
                />
                <Card.Body>
                  <Card.Title>Initiative 1: Title Here</Card.Title>
                  <Card.Text>
                    A brief description of the first key initiative.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img
                  src="https://buddyloan-wordpress-blog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2024/01/04075724/Post-Office-Schemes-For-Girl-Child.webp"
                  alt="Key Initiative 2"
                />
                <Card.Body>
                  <Card.Title>Initiative 2: Title Here</Card.Title>
                  <Card.Text>
                    A brief description of the second key initiative.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="success-stories" className="py-5">
        <Container>
          <h2>Success Stories</h2>
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img
                  src="https://www.paisabazaar.com/wp-content/uploads/2019/03/001.jpg"
                  alt="Success Story 1"
                />
                <Card.Body>
                  <Card.Title>Success Story 1: Title Here</Card.Title>
                  <Card.Text>
                    A brief description of a successful outcome under Mission
                    Poshan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img
                  src="https://images.firstpost.com/wp-content/uploads/2021/04/mid-day_meal-640.jpg?im=FitAndFill=(596,336)"
                  alt="Success Story 2"
                />
                <Card.Body>
                  <Card.Title>Success Story 2: Title Here</Card.Title>
                  <Card.Text>
                    Another example of a positive impact achieved through
                    Mission Poshan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Poshan
