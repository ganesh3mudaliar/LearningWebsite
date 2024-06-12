import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Tutors.css';

// const tutors = [
//   { id: 1, name: 'Alice Johnson', field: 'Programming' },
//   { id: 2, name: 'Bob Smith', field: 'Programming' },
//   { id: 3, name: 'Carol White', field: 'Programming' },
//   { id: 4, name: 'David Brown', field: 'Programming' },
//   { id: 5, name: 'Eve Black', field: 'Skill Development' },
//   { id: 6, name: 'Frank Green', field: 'Skill Development' },
//   { id: 7, name: 'Grace Blue', field: 'Skill Development' },
//   { id: 8, name: 'Henry Yellow', field: 'Skill Development' },
//   { id: 9, name: 'Ivy Purple', field: 'Application Development' },
//   { id: 10, name: 'Jack Orange', field: 'Application Development' },
//   { id: 11, name: 'Kelly Red', field: 'Application Development' },
//   { id: 12, name: 'Larry Pink', field: 'Application Development' },
// ];

export default function Tutors() {
  const [userId, setUserId] = useState('');
  const [isChatEnabled, setIsChatEnabled] = useState(false);

  const handleChatConnect = () => {
    if (userId) {
      setIsChatEnabled(true);
    }
  };

  return (
    <Container fluid className="tutors-connect-page">
      <h2 className="text-center my-4">Tutors Connect</h2>

      <section>
        <h3 className="text-center mb-4">Programming Tutors</h3>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Ramesh Singh</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Ajith Shlok</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Yahraj Behera</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Divyesh Boddu</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <h3 className="text-center mb-4">Skill Development Tutors</h3>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Sneha Rane</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Palak Krishnan</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Siddhesh Navle</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Saurabh Doshi</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <h3 className="text-center mb-4">Application Development Tutors</h3>
        <Row className="justify-content-center">
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Karthik Nair</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Alan Johnson</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Samantha Shetty</h4>
              <Button variant="primary" className="w-100">Request Connect</Button>
            </div>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <div className="tutor-card p-3">
              <h4>Kalyani Reddy</h4>
              <Button variant="primary" className="w-100" >Request Connect</Button>
            </div>
          </Col>
        </Row>
      </section>

      <section className="chat-section text-center mt-5">
        <h3>Connect with Peers</h3>
        <Form className="d-flex justify-content-center my-3">
          <Form.Control
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-25 me-2"
          />
          <Button variant="success" onClick={handleChatConnect}>Connect</Button>
        </Form>
        {isChatEnabled && (
          <div className="chat-box p-3">
            <p>Chat with user {userId}</p>
            <Form.Control type="text" placeholder="Type a message..." className="mt-3" />
          </div>
        )}
      </section>
    </Container>
  );
}
