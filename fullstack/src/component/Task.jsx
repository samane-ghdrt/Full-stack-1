import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function Task() {
  return (
            <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Form>
        <Modal.Header closeButton>
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">title</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="e.g.study for the test" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Date</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Disabled select</option>
             <option value="1">Main</option>
          </Form.Select>
        </Form.Group>
                <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Description (optional)</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="e.g.study for the test" />
        </Form.Group>
                <Form.Group className="mb-3">
          <Form.Label >Date</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Mark as important"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Mark as completed"
          />
        </Form.Group>
        <Button size='lg' type="submit">Submit</Button>
       
      </fieldset>
        </Modal.Body>


        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
        </Form>
      </Modal.Dialog>
    </div>
  )
}
   




      
