import avatar from "../images/avatar.jpg";
import avatar2 from "../images/mini_me.jpg";

export const data = {
  contact: [
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
  ],
  menu: [
    { id: 1, name_en: "Home", name_pl: "Start", path: "/", exact: true },
    { id: 2, name_en: "Projects", name_pl: "Projekty", path: "/projects" },
    { id: 3, name_en: "Contact", name_pl: "Kontakt", path: "/contact" },
    { id: 4, name_en: "About", name_pl: "O mnie", path: "/about" }
  ]
};
