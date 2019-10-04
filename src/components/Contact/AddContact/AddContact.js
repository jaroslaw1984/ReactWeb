import React, { Component } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import color from "../../../Colors/Colors";
import size from "../../../Fonts/Fonts";

const fadeIn = () => keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }

`;

const Style = styled.div`
  .alertEnter {
    opacity: 0;
    transform: translateY(-50px);
    transition: 0.3s ease;
    animation: ${fadeIn} 0.5s both;
    font-size: ${size.IPXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.IPSm};
    }
  }
  .styleTitle {
    font-weight: 700;
    color: ${color.light_blue};
    font-size: ${size.IH2Xs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.IH2Sm};
    }
  }
  .textStyle {
    font-size: ${size.IPXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.IPSm};
    }
  }
  .formWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 15px;
    width: 100%;
  }
  .input {
    width: 100%;
    @media screen and (min-width: 600px) and (orientation: portrait) {
      width: 70%;
    }
    @media screen and (max-width: 736px) and (orientation: landscape) {
      width: 70%;
    }
  }
  .requierdColor {
    border-color: ${color.alertForm};
  }
  .btnSubmit {
    font-size: ${size.BtnLinkXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.BtnLinkSm};
    }
  }
`;

class AddContact extends Component {
  alertMessages = {
    username_faild_en: "Typed name is to short. Must have at least 3 signs.",
    username_faild_pl:
      "Imię  podane jest za krótkie. Powinno składać się przynajmniej z 3 znaków",
    email_faild_miss_en: 'You miss "@" at your email',
    email_faild_miss_pl: 'Brakuje znaku "@" w emailu',
    email_faild_toShort_en: "Your email is to short",
    email_faild_toShort_pl: "Twój email jest za krótki",
    link_faild_en:
      'This is not a facebook or twitter link. Please enter correct path like "https://www.twitter.com/..." or leave this field blank',
    link_faild_pl:
      "To nie jest link do Facebooka ani Twittera. Wprowadź poprawną ścieżkę, np. „https: //www.twitter.com / ...” lub pozostaw to pole puste"
  };

  render() {
    const {
      username,
      email,
      link,
      image,
      textarea,
      errors: { username: usernameValid, email: emailValid, link: linkValid }
    } = this.props.value;
    const {
      username_faild_en,
      username_faild_pl,
      email_faild_miss_en,
      email_faild_miss_pl,
      email_faild_toShort_en,
      email_faild_toShort_pl,
      link_faild_en,
      link_faild_pl
    } = this.alertMessages;
    const { checked, submitItem, change, click, modal } = this.props;
    const message_en = "Send me a message";
    const message_pl = "Wyślij mi wiadomość";
    const sendButton_en = "Send";
    const sendButton_pl = "Wyślij";
    function showAlertMessage(typeValid, valid, en_message, pl_message) {
      return (
        typeValid &&
        (valid ? null : (
          <Alert variant="danger" className="alertEnter">
            {checked ? en_message : pl_message}
          </Alert>
        ))
      );
    }

    return (
      <Style>
        <Form className="formWrapper" onSubmit={submitItem} noValidate>
          <Form.Label className="styleTitle">
            {checked ? message_en : message_pl}
          </Form.Label>
          <Form.Group className="input">
            <Form.Control
              className={
                username.length >= 3 ? null : "requierdColor textStyle"
              }
              type="text"
              name="username"
              value={username}
              onChange={change}
              placeholder={checked ? "Name (requierd)" : "Imię (wymagane)"}
            />
          </Form.Group>
          {usernameValid &&
            (username.length >= 3 ? null : (
              <Alert variant="danger" className="alertEnter">
                {checked ? username_faild_en : username_faild_pl}
              </Alert>
            ))}
          <Form.Group className="input">
            <Form.Control
              className={
                email.indexOf("@") !== -1 && email.length >= 6
                  ? null
                  : "requierdColor textStyle"
              }
              type="email"
              name="email"
              value={email}
              onChange={change}
              placeholder={checked ? "Email (requierd)" : "Email (wymagane)"}
            />
          </Form.Group>
          {showAlertMessage(
            emailValid,
            email.indexOf("@") !== -1,
            email_faild_miss_en,
            email_faild_miss_pl
          ) ||
            showAlertMessage(
              emailValid,
              email.length >= 6,
              email_faild_toShort_en,
              email_faild_toShort_pl
            )}
          <Form.Group className="input">
            <Form.Control
              className="textStyle"
              type="text"
              name="link"
              value={link}
              onChange={change}
              placeholder={
                checked
                  ? "http:// Facebook or Twitter"
                  : "http:// Facebook lub Twitter"
              }
            />
          </Form.Group>
          {linkValid &&
            (link === "" ||
            link.indexOf("https://www.facebook.com/") !== -1 ||
            link.indexOf("https://twitter.com/") !== -1 ? null : (
              <Alert variant="danger" className="alertEnter">
                {checked ? link_faild_en : link_faild_pl}
              </Alert>
            ))}
          <Form.Group className="input">
            <Form.Control
              className="textStyle"
              type="text"
              name="image"
              value={image}
              onChange={change}
              placeholder={
                checked
                  ? "Image from http:// or blank"
                  : "Obrazek z http:// lub puste"
              }
            />
            <div className="addImg" onClick={modal}></div>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlTextarea1"
            className="input"
          >
            <Form.Control
              className="textStyle"
              type="text"
              name="textarea"
              value={textarea}
              onChange={change}
              as="textarea"
              rows="3"
              placeholder={checked ? "Message" : "Wiadomość"}
            />
          </Form.Group>
          <Button
            type="submit"
            className="btnSubmit"
            variant="primary"
            onClick={click}
          >
            {checked ? sendButton_en : sendButton_pl}
          </Button>
        </Form>
      </Style>
    );
  }
}

export default AddContact;
