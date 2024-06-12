import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';


export default function Login() {
  return (
    <div className="about-page">
      <section className="jumbotron-bg text-center">
        <div className="jumbotron-content">
          <h1>Welcome to Learn Programming</h1>
          <p className="lead">
            Your go-to platform for mastering programming languages with the
            help of videos, blogs, and interactive content.
          </p>
        </div>
      </section>

      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h2>Our Founding Story</h2>
            <p>
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized
              the need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </p>
            <p>
              As experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We envisioned
              a platform that could bridge these gaps and empower individuals
              from all walks of life to unlock their full potential.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h2>Our Vision</h2>
            <p>
              With this vision in mind, we set out on a journey to create an
              e-learning platform that would revolutionize the way people
              learn. Our team of dedicated experts worked tirelessly to develop
              a robust and intuitive platform that combines cutting-edge
              technology with engaging content, fostering a dynamic and
              interactive learning experience.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h2>Our Mission</h2>
            <p>
              Our mission goes beyond just delivering courses online. We wanted
              to create a vibrant community of learners, where individuals can
              connect, collaborate, and learn from one another. We believe that
              knowledge thrives in an environment of sharing and dialogue, and
              we foster this spirit of collaboration through forums, live
              sessions, and networking opportunities.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-richblack-900 text-white py-5">
        <Row className="text-center">
          <Col>
            <h2>Reviews from Other Learners</h2>
            <div className="review-cards">
              <Card className="review-card">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                    "The beautiful thing about learning is that nobody can take it away from you."
                    </p>
                    <footer className="blockquote-footer"> B.B. King</footer>
                  </blockquote>
                </Card.Body>
              </Card>
              <Card className="review-card">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today." 
                    </p>
                    <footer className="blockquote-footer"> Malcolm X</footer>
                  </blockquote>
                </Card.Body>
              </Card>
              <Card className="review-card">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                    "The only way to do great work is to love what you do. Keep learning and stay passionate." 
                    </p>
                    <footer className="blockquote-footer">
                    Steve Jobs
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      
      
    </div>
  );
};


