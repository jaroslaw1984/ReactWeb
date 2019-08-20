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
    title_en: "Hello, world!",
    title_pl: "Witam wszystkich !",
    titleParagraph_en: "This will be a text in english",
    titleParagraph_pl: "To będzie tekst po polsku",
    button_en: "Let's start",
    button_pl: "Zaczynajmy"
  },
  dataContactItems: [
    {
      id: 0,
      image: avatar,
      name: "Jarosław Sochacki",
      email: "inz.jaroslawsochacki@gmail.com",
      description_en:
        "Hello, if you want to talk to me leave a message here and I will answer immediately",
      description_pl:
        "Witam, jeśli chcesz ze mną porozmawiać zostaw tu wiadomość, a odpowiem natychmiast",
      facebookLink: "https://www.facebook.com/profile.php?id=100001667016208"
    }
  ],
  options_en: [
    "Thank you for adding",
    "I hope you will be intrested to some other pages",
    "My gratitude for visit and interested",
    "Thank you so much for a post!",
    "I hope you like here",
    "Hey how are you feel today ?",
    "Nice to see you!"
  ],
  options_pl: [
    "Dziękuje za dodanie.",
    "Mam nadzieję, że inne podstrony też cię zainteresują",
    "Moja wdzięczność za wizytę i zainteresowanie",
    "Dziękuję bardzo za korespondencje",
    "Mam nadzieję, że Ci się tu podoba.",
    "Hey, jak się dzisiaj czujesz ?",
    "Miło Cię widzieć!"
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
      descriptionCard_en:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      descriptionCard_pl: "To będzie opis karty po polsku",
      urlGitCard: "https://github.com/jaroslaw1984/web",
      urlLiveCard: "http://omegiumfix.pl"
    },
    {
      key: 1,
      img: page1,
      cardTitle: "Portfolio",
      descriptionCard_en: "Here will be description about my portfolio",
      descriptionCard_pl: "Tu będzie opis mojego portfolio",
      urlGitCard: "https://github.com/jaroslaw1984/web",
      urlLiveCard: "http://omegiumfix.pl"
    }
  ],
  aboutContent: {
    description_en: "Hard working person to become Frontend Developer",
    description_pl: "Ciężko pracująca osoba, aby zostać programistą Frontend"
  }
};

export default data;
