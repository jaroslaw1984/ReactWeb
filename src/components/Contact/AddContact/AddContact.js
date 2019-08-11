import React from "react";
import { Button, Form } from "react-bootstrap";

const styleTitle = {
  color: "#0b7bf4"
};

const AddContact = ({ submitItem }) => (
  <Form onSubmit={submitItem}>
    <Form.Label style={styleTitle}>Send me a message</Form.Label>
    <Form.Group>
      <Form.Control type="text" placeholder="Name" />
    </Form.Group>
    <Form.Group>
      <Form.Control type="text" placeholder="Link" />
    </Form.Group>
    <Form.Group>
      <Form.Control type="text" placeholder="Image" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Control as="textarea" rows="3" placeholder="Description" />
    </Form.Group>
    <Button type="submit" variant="primary">
      Send
    </Button>
  </Form>
);

export default AddContact;
