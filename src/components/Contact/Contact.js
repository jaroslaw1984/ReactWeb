import React, { Component } from "react";
import Wrapper from "./Wrapper/Wrapper";
import avatar from "../../images/avatar.jpg";
import avatar2 from "../../images/mini_me.jpg";
import AddContact from "./AddContact/AddContact";

const dataArrayItems = [
  {
    id: 1,
    image: avatar,
    name: "Jarosław Sochacki",
    description_en:
      "Hey, welcome on my website if u like you can leave the message here. Thank you so much!",
    description_pl:
      "Witam na mojej stronie, jeśli sobie życzysz możesz zostawić tu wiadomość",
    facebookLink: "https://www.facebook.com/profile.php?id=100001667016208"
  },
  {
    id: 2,
    image: avatar2,
    name: "Jerry",
    description_en: "This is second description",
    description_pl:
      "Witam na mojej stronie, jeśli sobie życzysz możesz zostawić tu wiadomość",
    facebookLink: "https://www.facebook.com/profile.php?id=100001667016208"
  }
];

class Contact extends Component {
  state = {
    items: [...dataArrayItems]
  };

  handleAddItem = e => {
    e.preventDefault();

    const AddItem = {
      id: this.state.items.length + 1,
      name: e.target[0].value,
      facebookLink: e.target[1].value,
      image: e.target[2].value,
      description_en: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, AddItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <>
        <Wrapper items={this.state.items} />
        <AddContact submitItem={this.handleAddItem} />
      </>
    );
  }
}
export default Contact;
