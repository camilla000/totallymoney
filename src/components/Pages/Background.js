import React from 'react'
import "./BackgroundStyles.css";
import { Col, Container, Row } from "react-bootstrap";

function Background() {
  return (
    <>
    <Container>
      <Row>
        <Col xs lg="1">
      <span className="square"></span>
      <span className="circle1"></span>
      <span className="circle3"></span>
      <span className="circle2"></span>
      <span className="circle4"></span>
      
      </Col>
      </Row>
      
      </Container >
    </>
  )
}

export default Background;