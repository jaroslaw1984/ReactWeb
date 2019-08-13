import React, { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const styleTitle = {
  color: "#0b7bf4"
};

class AddContact extends Component {
  alertMessages = {
    username_faild_en:
      "Your name that you type is to short. Must have at least 3 signs.",
    username_faild_pl:
      "Imię jakie podałeś jest za krótkie. Powinno składać się przynajmniej z 3 znaków",
    email_faild_en: "Sorry, but you miss @ at your email",
    email_faild_pl: "Przepraszam ale brakuje znaku @ w emailu"
  };

  render() {
    const {
      username,
      email,
      errors: { username: usernameValid, email: emailValid }
    } = this.props.value;
    const { username_faild_en, email_faild_en } = this.alertMessages;
    return (
      <Form onSubmit={this.props.submitItem} noValidate>
        <Form.Label style={styleTitle}>Send me a message</Form.Label>
        <Form.Group>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={this.props.change}
            placeholder="Name"
          />
        </Form.Group>

        {usernameValid && <Alert variant="danger">{username_faild_en}</Alert>}

        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={this.props.change}
            placeholder="Email"
          />
        </Form.Group>

        {emailValid && <Alert variant="danger">{email_faild_en}</Alert>}

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
  }
}

export default AddContact;
