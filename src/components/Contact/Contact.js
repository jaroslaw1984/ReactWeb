import React, { Component } from "react";
import Wrapper from "./Wrapper/Wrapper";
import avatar2 from "../../images/mini_me.jpg";
import AddContact from "./AddContact/AddContact";
import data from "../../data/data";
import ModalAddImg from "./ModalAddImg/ModalAddImg";

class Contact extends Component {
  state = {
    items: [...data.dataContactItems],
    username: "",
    email: "",
    link: "",
    image: "",
    textarea: "",
    errors: {
      username: false,
      email: false,
      link: false
    },
    x: 800,
    modalOpen: false
  };

  handleViewAddedContact = () => {
    const validation = this.handleValidation();
    const { x } = this.state;
    if (validation.correct) {
      window.scrollTo({
        top: x,
        left: 0,
        behavior: "smooth"
      });
    }
  };

  handleChange = e => {
    const type = e.target.type;
    const value = e.target.value;
    const name = e.target.name;
    if (
      type === "text" ||
      type === "email" ||
      type === "link" ||
      type === "image" ||
      type === "textarea"
    ) {
      this.setState({
        [name]: value
      });
    }
  };

  handleAddItem = e => {
    e.preventDefault();

    const validation = this.handleValidation();
    const random = Math.floor(Math.random() * data.options_en.length);
    const reply = [
      {
        id: this.state.items.length + 2,
        name: data.dataContactItems[0].name,
        email: data.dataContactItems[0].email,
        link: data.dataContactItems[0].link,
        image: avatar2,
        description_en: data.options_en[random],
        description_pl: data.options_pl[random]
      }
    ];
    const addItem = {
      id: this.state.items.length + 1,
      name: e.target[0].value,
      email: e.target[1].value,
      link: e.target[2].value,
      image: e.target[3].value,
      description_pl: e.target[4].value,
      description_en: e.target[4].value
    };
    if (validation.correct) {
      this.setState(prevState => ({
        items: [...prevState.items, addItem],
        username: "",
        email: "",
        link: "",
        image: "",
        textarea: "",
        x: this.state.x + 650,
        errors: {
          username: false,
          email: false,
          link: false
        }
      }));
      setTimeout(
        () =>
          this.setState(prevState => ({
            items: [...prevState.items, ...reply]
          })),
        2000
      );
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          link: !validation.link
        }
      });
    }
  };

  handleValidation = () => {
    let username = false;
    let email = false;
    let link = false;
    let correct = false;

    if (this.state.username.length >= 3) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (
      this.state.link.length === 0 ||
      ((this.state.link.length !== 0 &&
        this.state.link.indexOf("https://www.facebook.com/") !== -1) ||
        this.state.link.indexOf("https://twitter.com/") !== -1)
    ) {
      link = true;
    }
    if (username && email && link) {
      correct = true;
    }
    return {
      username,
      email,
      link,
      correct
    };
  };

  handleOpenModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <>
        <Wrapper
          id={this.state.username}
          items={this.state.items}
          checked={this.props.checked}
        />
        <AddContact
          value={this.state}
          change={this.handleChange}
          submitItem={this.handleAddItem}
          checked={this.props.checked}
          click={this.handleViewAddedContact}
          modal={this.handleOpenModal}
        />
        {modalOpen && <ModalAddImg modal={this.handleOpenModal} />}
      </>
    );
  }
}
export default Contact;
