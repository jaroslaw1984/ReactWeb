import React, { Component } from "react";
import Wrapper from "./Wrapper/Wrapper";
import avatar2 from "../../images/mini_me.jpg";
import AddContact from "./AddContact/AddContact";
import data from "../../data/data";

class Contact extends Component {
  state = {
    items: [...data.dataArrayItems],
    username: "",
    email: "",
    errors: {
      username: false,
      email: false
    }
  };

  handleChange = e => {
    const type = e.target.type;
    const value = e.target.value;
    const name = e.target.name;
    if (type === "text" || type === "email") {
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
        name: data.dataArrayItems[0].name,
        email: data.dataArrayItems[0].email,
        facebookLink: data.dataArrayItems[0].facebookLink,
        image: avatar2,
        description_en: data.options_en[random]
      }
    ];
    const addItem = {
      id: this.state.items.length + 1,
      name: e.target[0].value,
      email: e.target[1].value,
      facebookLink: e.target[2].value,
      image: e.target[3].value,
      description_en: e.target[4].value
    };
    if (validation.correct) {
      this.setState(prevState => ({
        items: [...prevState.items, addItem],
        username: "",
        email: "",
        errors: {
          username: false,
          email: false
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
          email: !validation.email
        }
      });
    }
    e.target.reset();
  };

  handleValidation = () => {
    let username = false;
    let email = false;
    let correct = false;

    if (this.state.username.length >= 3) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (username && email) {
      correct = true;
    }
    return {
      username,
      email,
      correct
    };
  };

  render() {
    return (
      <div>
        <Wrapper items={this.state.items} />
        <AddContact
          value={this.state}
          change={this.handleChange}
          submitItem={this.handleAddItem}
        />
      </div>
    );
  }
}
export default Contact;
