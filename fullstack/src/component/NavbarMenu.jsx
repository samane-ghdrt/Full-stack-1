import React from 'react'
import {Button,Col,Container,Form,InputGroup,Nav,Navbar,NavDropdown,Offcanvas, Row} from 'react-bootstrap';
export default function NavbarMenu() {
  return (
    <div style={{
      width:"80%",
      marginRight:"0px",
      marginLeft:"18%",
      backgroundColor:"white"
    }}>

    <Navbar className="bg-body-tertiary justify-content-between">
      <Form  >
      <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 mx-3"
            />
      </Form>
      <Form >
            <Button type="submit">Submit</Button>      
      </Form>
    </Navbar>

    </div>
  )
}
