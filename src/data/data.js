import avatar from "../images/avatar.jpg";
import laptop from "../images/laptop.jpg";

const data = {
  menu: [
    { id: 1, name_en: "Home", name_pl: "Start", path: "/", exact: true },
    { id: 2, name_en: "Projects", name_pl: "Projekty", path: "/projects" },
    { id: 3, name_en: "Contact", name_pl: "Kontakt", path: "/contact" },
    { id: 4, name_en: "About", name_pl: "O mnie", path: "/about" }
  ],
  jumboContent: {
    title: "Hello, world!",
    titleParagraph:
      "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
    button: "Let's start"
  },
  dataContactItems: [
    {
      id: 0,
      image: avatar,
      name: "Jarosław Sochacki",
      email: "inz.jaroslawsochacki@gmail.com",
      description_en:
        "Hey, welcome on my website if u like you can leave the message here.",
      description_pl:
        "Witam na mojej stronie, jeśli sobie życzysz możesz zostawić tu wiadomość",
      facebookLink: "https://www.facebook.com/profile.php?id=100001667016208"
    }
  ],
  options_en: [
    "Thank you for adding",
    "I hope you will check some other pages",
    "My gratitude for visit and interested",
    "Thank you so much for a post!",
    "I hope you like here",
    "Hey how are you feel today ?",
    "Nice to see you"
  ],

  homeContent: [
    {
      key: 0,
      id: "start",
      h2: "Web Design",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore iste ullam iure id asperiores sunt nihil sit cum nulla, vitae ex ratione quos nemo obcaecati sed. Repudiandae, corrupti odio.",
      img: laptop
    },
    {
      key: 1,
      id: "1",
      h2: "Web Second",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore iste ullam iure id asperiores sunt nihil sit cum nulla, vitae ex ratione quos nemo obcaecati sed. Repudiandae, corrupti odio.",
      img: laptop
    }
  ]
};

export default data;
