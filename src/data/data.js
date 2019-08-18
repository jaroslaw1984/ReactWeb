import avatar from "../images/avatar.jpg";
import laptop from "../images/laptop.jpg";
import page1 from "../images/my_page1.jpg";

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
        "Hey, welcome on my website if you like you can leave the message here.",
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
      h2: "Web Design",
      p_en: "This is the text in english language",
      p_pl: "To jest tekst po polsku",
      img: laptop
    },
    {
      key: 1,
      h2: "Programming Languages",
      p_en: "This will be second text in language i hope it will work ",
      p_pl: "A to będzie drugi tekst mam nadzieję, że zadziała ",
      img: laptop
    }
  ],
  projectsContent: [
    {
      key: 0,
      img: page1,
      cardTitle: "Omegiufix.pl",
      descriptionCard:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      urlGitCard: "https://github.com/jaroslaw1984/web",
      urlLiveCard: "http://omegiumfix.pl"
    },
    {
      key: 1,
      img: page1,
      cardTitle: "Portfolio",
      descriptionCard: "Here will be description about my portfolio",
      urlGitCard: "https://github.com/jaroslaw1984/web",
      urlLiveCard: "http://omegiumfix.pl"
    }
  ]
};

export default data;
