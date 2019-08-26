import React from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

const Style = styled.div`
  .wrapper {
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    width: 95vw;
  }
`;

const ModalAddImg = ({ modal }) => {
  return (
    <Style>
      <Modal.Dialog className="wrapper">
        <Modal.Header closeButton onClick={modal}>
          <Modal.Title>Add image</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-primary">Add</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Style>
  );
};

export default ModalAddImg;
