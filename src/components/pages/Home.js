import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='homie'>
      <section className="jumbotron-bg text-center">
        <div className="jumbotron-content">
          <h1>Welcome to Learn Programming</h1>
          <p className="lead">Your go-to platform for mastering programming languages with the help of videos, blogs, and interactive content.</p>
        </div>
      </section>

      <Container className="mt-5 boxxu">
        <Row className="mb-4">
          <Col>
            <h2>Featured Courses</h2>
          </Col>
        </Row>
        
        <Row>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Course Videos</Card.Title>
                <Card.Text>
                  Access a wide range of programming tutorials and courses.Explore the course of your field of interest and enjoy learning!
                </Card.Text>
                <Button variant="primary" href="#videos" onClick={() => navigate("components/pages/Courses")}>Access Videos</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Learn with Tutors</Card.Title>
                <Card.Text>
                  Stay updated with the latest trends and techniques in programming with skilled professionals.
                </Card.Text>
                <Button variant="primary" href="#connect" onClick={() => navigate("components/pages/Tutors")}>Connect</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="course-card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Join the Community</Card.Title>
                <Card.Text>
                  Interact with peers and experts in your field to stay updated with the latest knowledge and insights.  
                </Card.Text>
                <Button variant="primary" href="#community" onClick={() => navigate("components/pages/Community")}>Join Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <hr className="my-5" />

        <Row className="mb-4">
          <Col>
            <h2>Why Choose Us?</h2>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <h4>Expert Instructors</h4>
            <p>Learn from industry experts who have real-world experience in programming.</p>
          </Col>
          <Col md={6}>
            <h4>Flexible Learning</h4>
            <p>Access courses and tutorials at your own pace, from anywhere in the world.</p>
          </Col>
        </Row>

        <hr className="my-5" />

        <Row className="mb-4">
          <Col>
            <h2>Testimonials</h2>
          </Col>
        </Row>
        
        <Row>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>"Great platform for learning programming. The courses are well-structured and easy to follow."</p>
                  <footer className="blockquote-footer">Johny Depp</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>"I improved my coding skills significantly with the help of Learn Programming. Highly recommended!"</p>
                  <footer className="blockquote-footer">Will Smith</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote my-20">
                  <p>"The community here is very supportive. I've gained valuable insights and made new connections."</p>
                  <footer className="blockquote-footer">Michael Jordan</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
