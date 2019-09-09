import avatar from "../images/avatar.jpg";
import laptop from "../images/laptop.jpg";
import page1 from "../images/my_page1.jpg";
import m_tablet from "../images/m_tablet.jpg";
// import v_mobile from "../images/v_mobile.jpg";
// import v_tablet from "../images/v_tablet.jpg";
import v_all_devices from "../images/v_all_devices.jpg";
import reactbootstrap from "../images/reactbootstrap.svg";
import js from "../images/js.jpg";
import styled from "../images/styled.jpg";
import react from "../images/react.jpg";
import css from "../images/css.jpg";
import jsx from "../images/jsx.jpg";
import html from "../images/html.jpg";
import phone from "../images/phone.jpg";
import git from "../images/git.jpg";
import sass from "../images/sass.jpg";
import yarn from "../images/yarn.jpg";

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
    // "To jest strona, na której możesz znaleźć informacje o mnie, moim doświadczeniu programistycznym i jaki jest mój cel w kodowaniu. Możesz także sprawdzić stronę kontaktową, na której strona automatycznie odpowiem na Twój post.",
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
        { code: "render() {" },
        { code: "return (" },
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
        { code: "</Switch>" },
        { code: " );" },
        { code: "};" }
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
        { code: "// Useing styled-components: " },
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
        {
          id: 0,
          img: reactbootstrap,
          name: "react-bootstrap",
          url: "https://react-bootstrap.github.io/"
        },
        {
          id: 1,
          img: js,
          name: "javascript",
          url: "https://developer.mozilla.org/pl/docs/Web/JavaScript"
        },
        { id: 2, img: react, alt: "react", url: "https://reactjs.org/" },
        {
          id: 3,
          img: styled,
          name: "styled-component",
          url: "https://www.styled-components.com/"
        },
        {
          id: 4,
          img: css,
          name: "CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
          id: 5,
          img: jsx,
          name: "JSX",
          url: "https://reactjs.org/docs/introducing-jsx.html"
        },
        { id: 6, img: git, name: "Github", url: "https://github.com/" },
        { id: 7, img: sass, name: "Sass", url: "https://sass-lang.com/" },
        { id: 8, img: yarn, name: "yarn", url: "https://yarnpkg.com/" }
      ],
      text2_en:
        "For styling I use tools like css, styled-components and react-bootstrap. Styled-component is a strong tool and useful in creating applications in React because it uses tagged template literals (the latest addition to JavaScript) and the power of CSS, styled-components allows you to write real CSS code to style components. It also removes mapping between components and styles - using components as a low-level styling structure. In contrast, the react-bootstrap component model gives me more control over the form and function of each component.",
      text2_pl:
        "Do stylowania używam narzędzi jakim jest css, styled-components oraz react-bootstrap. Styled- component jest silinym narzędziem i przydanym w tworzeniu aplikacji w React dlatego, że wykorzystuje otagowane literały szablonów (najnowszy dodatek do JavaScript) i moc CSS, styled-components pozwala pisać rzeczywisty kod CSS do stylizowania komponentów. Usuwa również mapowanie między komponentami i stylami - użycie komponentów jako niskopoziomowej konstrukcji do stylizacji. Natomiast react-bootstrap model komponentu daje mi większą kontrolę nad formą i funkcją każdego komponentu."
    },
    {
      key: 2,
      h2_en: "Responsive websites",
      h2_pl: "Responsywne strony internetowe",
      text1_en:
        "When creating websites, I stick to certain rules, such as the mobile first principle. For this I also had to use the tools which is react-bootstrap, which will allow the website to be responsive, where it will fit on most mobile phones as well as desktop devices. Another tool for handling the responsiveness of the site is CSS itself, where, with the help of flex and grid, they allow you to control the displayed graphics and components.",
      text1_pl:
        "Przy tworzeniu stron internetowych trzymam się pewnych zasad jak między innymi zasada mobile first. Do tego również przyszło mi wykorzystać narzędzi jakim jest react-bootstrap, które pozwoli aby strona była responsywna, gdzie będzie się układać na większości telefonów komórkowych jak i urządzenia desktopowe. Innym narzędziem do obsługi responsywności strony jest sam CSS, gdzie przy pomocy flex oraz grid, pozowli na kotrolowanie wyświetlających się grafik i komponentów.",
      img: phone,
      codeExample: "",
      icons: "",
      text2_en: "",
      text2_pl: ""
    }
  ],
  projectsContent: [
    {
      key: 0,
      img: page1,
      cardTitle: "Omegiufix",
      id: "omegiumfix",
      descriptionCard_en:
        " When deciding on how to build this site I wanted to take advantage of pure JavaScript and Css. This project was made for commercial use.",
      descriptionCard_pl:
        "Decydując się na budowę tej strony, chciałem skorzystać z czystego JavaScript i CSS. Ten projekt został stworzony do użytku komercyjnego.",
      programingTools: [
        {
          id: 0,
          img: js,
          name: "javascript",
          url: "https://developer.mozilla.org/pl/docs/Web/JavaScript"
        },
        {
          id: 1,
          img: css,
          name: "CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
          id: 2,
          img: html,
          name: "HTML",
          url: "https://developer.mozilla.org/pl/docs/Glossary/HTML"
        },
        { id: 3, img: sass, alt: "Sass", url: "https://sass-lang.com/" }
      ],
      detailsContenet: [
        {
          id: 0,
          title_en: "Building some think i dont know im tired OmegiumFix",
          title_pl: "Budowa czegoś tam nie wiem jescze co",
          description_en: "This will be a disripction of this page",
          description_pl: "To będzie opis tej strony ale nie wiem co",
          m_img: m_tablet
        },
        {
          id: 1,
          title_en:
            "About technical and used tools to create a page Omegiumfix",
          title_pl: "Strona techniczna i jakie narzędzia zostały użyte",
          description_en: "Description what tools i use to create a website",
          description_pl: "Opis jakich narzędzi użyłem by stworzyć stronę",
          m_img: v_all_devices
        }
      ],
      buttonDetails: [
        {
          id: 0,
          name_en: "GitHub",
          name_pl: "GitHub",
          url: "https://github.com/jaroslaw1984/web"
        },
        {
          id: 1,
          name_en: "Live",
          name_pl: "Na Żywo",
          url: "http://omegiumfix.pl"
        }
      ]
    },
    {
      key: 1,
      img: page1,
      cardTitle: "Portfolio",
      id: "portfolio",
      descriptionCard_en: "Here will be description about my portfolio",
      descriptionCard_pl: "Tu będzie opis mojego portfolio",
      programingTools: [
        { id: 1, img: react, name: "react", url: "https://reactjs.org/" },
        {
          id: 2,
          img: jsx,
          name: "JSX",
          url: "https://reactjs.org/docs/introducing-jsx.html"
        },
        {
          id: 3,
          img: css,
          name: "CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
          id: 4,
          img: styled,
          name: "styled-component",
          url: "https://www.styled-components.com/"
        },
        { id: 5, img: yarn, name: "yarn", url: "https://yarnpkg.com/" }
      ],
      detailsContenet: [
        {
          id: 0,
          title_en: "Building some think i dont know im tired Portfolio",
          title_pl: "Budowa czegoś tam nie wiem jescze co",
          description_en:
            "The goal of the site was to create a portfolio using various functional tools and a powerful programming language such as JavaScript. Use the React library was obvious to me because it does something cool. The user interface is completely defined in JavaScript, so thanks to the rich functionality of this language you can do everything you can inside the template. React helps to create the most complex user interfaces.",
          description_pl:
            "Celem strony było realizacja utworzenia portfolio zastosowaniem różnych funkcjonalnych narzędzi jak i mocnego języka programowania jakim jest JavaScript.  Użcie biblioteki React było dla mnie oczywiste, bo robi coś fajnego. Interfej użytkownika jest w całości zdefiniowany w JavaScript, więc dzięki bogatym funcjonalnalnością tego języka można wewnątrz szablonu robić wszystko co się da. React pomaga ona tworzyć najbardziej skomplikowane interfejsy uzytkownika.",
          m_img: m_tablet
        },
        {
          id: 1,
          title_en: "About technical and used tools to create a page Portfolio",
          title_pl: "Strona techniczna i jakie narzędzia zostały użyte",
          description_en:
            "For styling I use tools like css, styled-components and react-bootstrap. Styled-component is a strong tool and useful in creating applications in React because it uses tagged template literals (the latest addition to JavaScript) and the power of CSS, styled-components allows you to write real CSS code to style components. It also removes mapping between components and styles - using components as a low-level styling structure. In contrast, the react-bootstrap component model gives me more control over the form and function of each component.",
          description_pl:
            "Do stylowania używam narzędzi jakim jest css, styled-components oraz react-bootstrap. Styled- component jest silinym narzędziem i przydanym w tworzeniu aplikacji w React dlatego, że wykorzystuje otagowane literały szablonów (najnowszy dodatek do JavaScript) i moc CSS, styled-components pozwala pisać rzeczywisty kod CSS do stylizowania komponentów. Usuwa również mapowanie między komponentami i stylami - użycie komponentów jako niskopoziomowej konstrukcji do stylizacji. Natomiast react-bootstrap model komponentu daje mi większą kontrolę nad formą i funkcją każdego komponentu.",
          m_img: m_tablet
        }
      ],
      buttonDetails: [
        {
          id: 0,
          name_en: "GitHub",
          name_pl: "GitHub",
          url: "https://github.com/jaroslaw1984/web"
        },
        {
          id: 1,
          name_en: "Live",
          name_pl: "Na Żywo",
          url: "http://omegiumfix.pl"
        }
      ]
    }
  ],
  aboutContent: {
    description_en: "Hard working person to become Frontend Developer",
    description_pl: "Ciężko pracująca osoba, aby zostać programistą Frontend"
  }
};

export default data;
