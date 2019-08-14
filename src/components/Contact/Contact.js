import React, { Component } from "react";
import Wrapper from "./Wrapper/Wrapper";
// import avatar from "../../images/avatar.jpg";
import avatar2 from "../../images/mini_me.jpg";
import AddContact from "./AddContact/AddContact";
import data from "../../data/data";
// const dataArrayItems = [
//   {
//     id: 0,
//     image: avatar,
//     name: "Jarosław Sochacki",
//     email: "inz.jaroslawsochacki@gmail.com",
//     description_en:
//       "Hey, welcome on my website if u like you can leave the message here.",
//     description_pl:
//       "Witam na mojej stronie, jeśli sobie życzysz możesz zostawić tu wiadomość",
//     facebookLink: "https://www.facebook.com/profile.php?id=100001667016208"
//   }
// ];
// const options_en = [
//   "Thank you for adding",
//   "I hope you will check some other pages",
//   "My gratitude for visit and interested",
//   "Thank you so much!",
//   "I hope you like here",
//   "Hey how are you feel today ?",
//   "Nice to see you"
// ];

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
        name: "Jarosław Sochacki",
        email: "inz.jaroslawsochacki@gmail.com",
        facebookLink: "https://www.facebook.com/profile.php?id=100001667016208",
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
      <div id="start">
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
