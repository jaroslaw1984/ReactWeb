import avatar from "../images/avatar.jpg";
import laptop from "../images/laptop.jpg";
import page1 from "../images/my_page1.jpg";
import reactbootstrap from "../images/reactbootstrap.svg";
import js from "../images/js.jpg";
import styled from "../images/styled.jpg";
import react from "../images/react.jpg";
import css from "../images/css.jpg";
import html from "../images/html.jpg";

const data = {
  menu: [
    { id: 1, name_en: "Home", name_pl: "Start", path: "/", exact: true },
    { id: 2, name_en: "Projects", name_pl: "Projekty", path: "/projects" },
    { id: 3, name_en: "Contact", name_pl: "Kontakt", path: "/contact" },
    { id: 4, name_en: "About", name_pl: "O mnie", path: "/about" }
  ],
  jumboContent: {
    title_en: "Welcome to my portfolio",
    title_pl: "Witam w moim portfolio",
    titleParagraph_en: "I'm just only a human being who interact with a code",
    // "This is a page where you can find information about me, my programing experience and what is my purpose in coding. Also u can check contact page where the page will automatically respond for your post.",
    titleParagraph_pl:
      "Jestem tylko człowiekiem, który wchodzi w interakcję z kodem",
    // "To jest strona, na której możesz znaleźć informacje o mnie, moim doświadczeniu programistycznym i jaki jest mój cel w kodowaniu. Możesz także sprawdzić stronę kontaktową, na której strona automatycznie odpowie na Twój post.",
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
        "Hello, if you want talk to me leave a message and I will answer immediately",
      description_pl:
        "Witam, jeśli chcesz ze mną porozmawiać zostaw wiadomość, a odpowiem natychmiast",
      link: "https://www.facebook.com/profile.php?id=100001667016208"
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
      h2_en: "Web design in React",
      h2_pl: "Projektowanie stron w React",
      text1_en:
        "Why did I choose React? Only a few years ago, when creating web applications, you had to prepare numerous separate pages. It was a very simple solution, although from the user's point of view it worked completely natural, because the current page disappeared and a new one appeared. Nowadays, this trend is becoming a thing of the past, because modern applications use the SPA (single-page-application) model. A model in which it does not move between different pages at all, or even reload them.",
      text1_pl:
        "Dlaczego wybrałem React ? Jeszcze kilka lat temu, utworzenie aplikacje WWW, trzeba było przygotować liczne, osobne strony. Było to bardzo proste rozwiązanie, choć z punku widzenia użytkownika działało zupełnie naturalne, bo bieżąca strona znikała i pojawiała się nowa. Teraz w dzisiejszych czas ten trend idzie w niepamięć, bo w nowoczesnych aplikacjach wykorzystuje sie model SPA (ang. single-page-application -- aplikacja jednostronowa). Model, w którym w ogóle nie przechodzi się pomiędzy różnymi stronami, ani nawet ich nie przeładowuje.",
      img: laptop,
      codeExample: [
        { code: "<Switch>" },
        {
          code: '<Route exact path="/" component={Home} />'
        },
        {
          code: '<Route path="/contact" component={Contact} />'
        },
        {
          code: '<Route path="/about" component={About} />} />'
        },
        { code: "<Route component={ErrorSite} />" },
        { code: "</Switch>" }
      ],
      icons: "",
      text2_en:
        "Controlling the user interface and managing the state of applications in React is indeed simple and you only need to do one thing: the final state of the interface, and the rest with the correct display of the user interface will take the React library.",
      text2_pl:
        "Kontrolowanie interfejsu użytkownika i zarządzanie stanem aplikacji w React jest w rzeczy samej proste  i wystarczy zajmować się tylko jedną rzeczą: końcowym stanem interfejsu, a całą resztą z poprawnym wyświetlaniem interfejsu użytkownika zajmie się biblioteka React."
    },
    {
      key: 1,
      h2_en: "Programming languages and tools",
      h2_pl: "Języki programowania i narzędzia",
      text1_en:
        "The goal of the site was to create a portfolio using various functional tools and a powerful programming language such as JavaScript. Use the React library was obvious to me because it does something cool. The user interface is completely defined in JavaScript, so thanks to the rich functionality of this language you can do everything you can inside the template. React helps to create the most complex user interfaces.",
      text1_pl:
        "Celem strony było realizacja utworzenia portfolio zastosowaniem różnych funkcjonalnych narzędzi jak i mocnego języka programowania jakim jest JavaScript.  Użcie biblioteki React było dla mnie oczywiste, bo robi coś fajnego. Interfej użytkownika jest w całości zdefiniowany w JavaScript, więc dzięki bogatym funcjonalnalnością tego języka można wewnątrz szablonu robić wszystko co się da. React pomaga ona tworzyć najbardziej skomplikowane interfejsy uzytkownika.",
      img: "",
      codeExample: [
        { code: "const Title = styled.h1`" },
        { code: "font-size: 1.5em;" },
        { code: "text-align: center;" },
        { code: "color: palevioletred;" },
        { code: "`;" },
        { code: " " },
        { code: "const Wrapper = styled.section`" },
        { code: "padding: 4em" },
        { code: "background: blue" },
        { code: "`;" },
        { code: " " },
        { code: "render(" },
        { code: "<Wrapper>" },
        { code: "<Title>" },
        { code: "Hello World!" },
        { code: "</Title>" },
        { code: "</Wrapper>" },
        { code: ");" }
      ],
      icons: [
        { id: 0, img: reactbootstrap, alt: "react-bootstrap" },
        { id: 1, img: js, alt: "javascript" },
        { id: 2, img: react, alt: "react" },
        { id: 3, img: styled, alt: "styled component" },
        { id: 4, img: css, alt: "CSS" },
        { id: 5, img: html, alt: "HTML" }
      ],
      text2_en:
        "For styling I use tools like css, styled-components and react-bootstrap. Styled-component is a strong tool and useful in creating applications in React because it uses tagged template literals (the latest addition to JavaScript) and the power of CSS, styled-components allows you to write real CSS code to style components. It also removes mapping between components and styles - using components as a low-level styling structure. In contrast, the react-bootstrap component model gives me more control over the form and function of each component.",
      text2_pl:
        "Do stylowania używam narzędzi jakim jest css, styled-components oraz react-bootstrap. Styled- component jest silinym narzędziem i przydanym w tworzeniu aplikacji w React dlatego, że wykorzystuje otagowane literały szablonów (najnowszy dodatek do JavaScript) i moc CSS, styled-components pozwala pisać rzeczywisty kod CSS do stylizowania komponentów. Usuwa również mapowanie między komponentami i stylami - użycie komponentów jako niskopoziomowej konstrukcji do stylizacji. Natomiast react-bootstrap model komponentu daje mi większą kontrolę nad formą i funkcją każdego komponentu."
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
