import React, { useEffect, useState } from 'react'
import {Button,Col,Container,Form,InputGroup,Nav,Navbar,NavDropdown,Offcanvas, Row} from 'react-bootstrap';
export default function NavbarMenu() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise(resolve => {
        setTimeout(resolve, 2000);
      });
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    
  };
  return (
    <div style={{
      // width:"80%",
      marginRight:"0px",
      marginLeft:"18%",
      backgroundColor:"white"
    }}>

    <Navbar className="bg-body-tertiary justify-content-between">
    <Container fluid>
          <Row className="w-100 align-items-center">
            <Col xs={12} md={6} lg={4}>
    <Form.Control className='' type="text" placeholder="Search Task"  size="sm"/>
    </Col>
      <Col xs="auto">
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
        size="sm"
    >
    Add new task
    </Button>
    </Col>
          </Row>
        </Container>
    </Navbar>

   
    <Row>
        <Col>All tasks()</Col>
    </Row>

    </div>

  )
}
