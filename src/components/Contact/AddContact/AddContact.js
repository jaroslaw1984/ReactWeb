import React from "react";
import { Button, Form } from "react-bootstrap";

const AddContact = () => (
  <Form>
    <Form.Label>Send me a message</Form.Label>
    <Form.Control type="text" placeholder="name" />
    <Form.Control type="text" placeholder="link" />
    <Form.Control type="text" placeholder="image" />
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Control as="textarea" rows="3" placeholder="description" />
    </Form.Group>
    <Button variant="primary">Send</Button>
  </Form>
);

export default AddContact;
