import avatar from "../images/avatar.jpg";
import page1 from "../images/my_page1.jpg";
import m_tablet from "../images/m_tablet.jpg";
import m_project from "../images/m_project.jpg";
import all_devices from "../images/all_devices.jpg";
import all_devices_2 from "../images/all_devices_2.jpg";
import v_all_devices from "../images/v_all_devices.jpg";
import learn from "../images/learn.jpg";
import portfolio from "../images/portfolio.jpg";
import portfolio2 from "../images/portfolio2.jpg";
import reactbootstrap from "../images/reactbootstrap.svg";
import js from "../images/js.jpg";
import styled from "../images/styled.jpg";
import react from "../images/react.jpg";
import css from "../images/css.jpg";
import jsx from "../images/jsx.jpg";
import html from "../images/html.jpg";
import git from "../images/git.jpg";
import sass from "../images/sass.jpg";
import yarn from "../images/yarn.jpg";
import linux from "../images/linux.jpg";
import gimp from "../images/gimp.jpg";
import { faAt, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const data = {
  nameOfPage: "OmegiumFix",
  menu: [
    { id: 1, name_en: "Home", name_pl: "Start", path: "/", exact: true },
    { id: 2, name_en: "Projects", name_pl: "Projekty", path: "/projects" },
    { id: 3, name_en: "Czat", name_pl: "Rozmowa", path: "/czat" },
    { id: 4, name_en: "About", name_pl: "O mnie", path: "/about" }
  ],
  jumboContent: {
    title_en: "Welcome to my portfolio",
    title_pl: "Witam na moim portfolio",
    titleParagraph_en: "Web development &",
    titleParagraph_pl: "Tworzenie stron &",
    titleSecondParagraph_en: "Internet applications",
    titleSecondParagraph_pl: "Aplikacje internetowe"
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
      class_name: "cell-0",
      h2_en: "designing",
      h2_pl: "projektowanie",
      text1_en:
        "I am learning programming and website design since 2018. I do projects only for myself, thanks to which I can create my visions, ideas and above all I love challenges. I am currently looking for a job as a Junior Frontend Developer.",
      text1_pl:
        "Uczę się programowania i projektowania stron internetowych od 2018. Projekty wykonuje wyłącznie dla siebie, dzięki temu mogę tworzyć swoje wizje, pomysły i przede wszystkim uwielbiam wyzwania. Aktualnie poszukuje pracy jako Junior Frontend Developer. ",
      img: learn,
      codeExample: "",
      icons: "",
      text2_en: "",
      text2_pl: ""
    },
    {
      key: 1,
      class_name: "cell-1",
      h2_en: "programing and tools",
      h2_pl: "programowanie i narzędzia",
      text1_en:
        "JavaScript is a powerful programming tool and language. It contains a collection of complicated and diverse mechanisms which allows achieving amazing results.",
      text1_pl:
        "JavaScript jest potężnym narzędziem oraz językiem programowania. Zawiera kolekcję skomplikowanych i zróżnicowanych mechanizmów, co pozwala osiągnąc niesamowite efekty.",
      img: m_project,
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
        // { id: 2, img: react, alt: "react", url: "https://reactjs.org/" }
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
        }
        // {
        //   id: 5,
        //   img: jsx,
        //   name: "JSX",
        //   url: "https://reactjs.org/docs/introducing-jsx.html"
        // },
        // { id: 6, img: git, name: "Github", url: "https://github.com/" },
        // { id: 7, img: sass, name: "Sass", url: "https://sass-lang.com/" }
        // { id: 8, img: yarn, name: "yarn", url: "https://yarnpkg.com/" }
      ],
      text2_en:
        "The user interface is a key element of any web application, therefore it uses the available styling tools, i.e. CSS3, Sass, style-componets and react-bootstrap if the website uses React technologies. I do not present all the tools I use, because every other project requires different solutions to facilitate work.",
      text2_pl:
        "Interfejs użytkownika to kluczowy element każdej aplikacji internetowej, dlatego wykorzytuje dostępne narzędzia do stylizacji czyli CSS3, Sass, style-componets oraz react-bootstrap jeśli strona wykorzystuje technologie React. Nie przedstawiam wszystkich narzędzi jakich używam, gdyż każdy inny projekt wymaga różnych rozwiązń ułatwiające pracę."
    },
    {
      key: 2,
      class_name: "cell-2",
      h2_en: "responsive websites",
      h2_pl: "responsywne strony internetowe",
      text1_en:
        "When creating websites, I stick to certain rules, such as the mobile first principle. For this I also had to use the tools which is react-bootstrap, which will allow the website to be responsive, where it will fit on most mobile phones as well as desktop devices. Another tool for handling the responsiveness of the site is CSS itself, where, with the help of flex and grid, they allow you to control the displayed graphics and components.",
      text1_pl:
        "Przy tworzeniu stron internetowych trzymam się pewnych zasad jak między innymi zasada mobile first. Do tego również przyszło mi wykorzystać narzędzi jakim jest react-bootstrap, które pozwoli aby strona była responsywna, gdzie będzie się układać na większości telefonów komórkowych jak i urządzenia desktopowe. Innym narzędziem do obsługi responsywności strony jest sam CSS, gdzie przy pomocy flex oraz grid, pozowli na kotrolowanie wyświetlających się grafik i komponentów.",
      img: all_devices,
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
      cardTitle: "OmegiumFix",
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
          title_en: "A website like no other",
          title_pl: "Strona jak żadna inna ",
          description_en:
            "At this stage, as a beginner, I wanted to create a website that would challenge me and help me take my skills to the next level. This project taught me many aspects of problem solving in pure javascript.",
          description_pl:
            "Na tym etapie, jako początkujący, chciałem stworzyć stronę internetową, która rzuciłaby mi wyzwanie i pomogłaby przenieść moje umiejętności na wyższy poziom. Ten projekt nauczył mnie wielu aspektów rozwiązywania problemów w czystym javascript.",
          m_img: m_tablet
        },
        {
          id: 1,
          title_en: "Technical page of omegiumfix",
          title_pl: "Strona techniczna omegiumfix",
          description_en:
            "Thanks to this project, I realized that you don't necessarily need a JavaScript library or framework to create a professional website. I decided to build this OmegiumFix site with HTML5, SASS and JavaScript to create cool animations that will improve the user experience and give the website an aesthetic.",
          description_pl:
            "Dzięki temu projektowi zdałem sobie sprawę z tego, że do stworzenia profesjonalnej strony internetowej niekoniecznie jest potrzebna biblioteka albo framework JavaScript. Zdecydowałem się zbudować tę witrynę OmegiumFix z HTML5, SASS oraz JavaScript, aby stworzyć fajne animacje, które poprawią wrażenia użytkownika i nadadzą stronie estetyki.",
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
      img: portfolio,
      cardTitle: "Portfolio",
      id: "portfolio",
      descriptionCard_en:
        "This is a page where you can find information about me, my experience and what is my purpose in coding websites. You can also check the contact page where the page will automatically reply to your message.",
      descriptionCard_pl:
        "To jest strona, na której możesz znaleźć informacje o mnie, moich doświadczeniach i jaki jest mój cel w kodowaniu stron internetowych. Możesz także sprawdzić stronę kontaktową, na której strona automatycznie odpowie na Twóją wiadomość.",
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
          title_en: "Portfolio in React",
          title_pl: "Portfolio w React",
          description_en:
            "The goal of the site was to create a portfolio using different functional tools and a powerful programming language such as JavaScript. Use the React library was a cool and creative adventure for me. The user interface is completely defined in JavaScript, so thanks to the rich functionality of this language you can do everything inside the template. React helps to create the most complex user interfaces.",
          description_pl:
            "Celem strony było realizacja utworzenia portfolio zastosowaniem różnych funkcjonalnych narzędzi jak i mocnego języka programowania jakim jest JavaScript. Użcie biblioteki React było dla mnie fajną i kreatywną przygodą . Interfej użytkownika jest w całości zdefiniowany w JavaScript, więc dzięki bogatym funcjonalnalnością tego języka można wewnątrz szablonu robić wszystko co się da. React pomaga ona tworzyć najbardziej skomplikowane interfejsy uzytkownika.",
          m_img: portfolio2
        },
        {
          id: 1,
          title_en: "How it is made",
          title_pl: "Jak to jest zrobione",
          description_en:
            "For styling I use tools like css, styled-components and react-bootstrap. Styled-component is a strong tool and useful in creating applications in React because it uses tagged template literals (the latest addition to JavaScript) and the power of CSS, styled-components allows you to write real CSS code to style components. It also removes mapping between components and styles - using components as a low-level styling structure. In contrast, the react-bootstrap component model gives me more control over the form and function of each component.",
          description_pl:
            "Do stylowania używam narzędzi jakim jest css, styled-components oraz react-bootstrap. Styled- component jest silinym narzędziem i przydanym w tworzeniu aplikacji w React dlatego, że wykorzystuje otagowane literały szablonów (najnowszy dodatek do JavaScript) i moc CSS, styled-components pozwala pisać rzeczywisty kod CSS do stylizowania komponentów. Usuwa również mapowanie między komponentami i stylami - użycie komponentów jako niskopoziomowej konstrukcji do stylizacji. Natomiast react-bootstrap model komponentu daje mi większą kontrolę nad formą i funkcją każdego komponentu.",
          m_img: all_devices_2
        }
      ],
      buttonDetails: [
        {
          id: 0,
          name_en: "GitHub",
          name_pl: "GitHub",
          url: "https://github.com/jaroslaw1984/portfolio"
        },
        {
          id: 1,
          name_en: "Live",
          name_pl: "Na Żywo",
          url: "http://www.portfolio.omegiumfix.pl/"
        }
      ]
    }
  ],
  aboutContent: [
    {
      id: 0,
      title_en: "Who am I?",
      title_pl: "Kim jestem?",
      description_en:
        "Hello, my name is Jarosław Sochacki and I come from Włocławek. I have two children, a daughter named Nadia and a son, Alan. In addition to family and programming, I love rollerblading and relaxing with a good Sc-fi movie.",
      description_pl:
        "Witam, nazywam się Jarosław Sochacki i pochodzę z Włocławka i mam dwójkę dzieci. Poza rodziną i programowaniem uwielbiam jeździć na rolkach i relaksować się przy dobrym filmie Sc-fi."
    },
    {
      id: 1,
      title_en: "Why I'd like to become as programer frontend?",
      title_pl: "Dlaczego chcę zostać programistą frontend?",
      description_en:
        "I am looking for opportunities to become a better programmer because I found a goal in my life. Being part of the team, I could bring new ideas, solve many problems and gain better knowledge",
      description_pl:
        "Szukam możliwości, aby zostać lepszym programistą, ponieważ znalazłem cel w swoim życiu. Będąc częścią zespołu mógłbym wnieść nowe pomysły, rozwiązać wiele problemów i zdobyć lepszą wiedzę."
    },
    {
      id: 2,
      title_en: "What I'm good at?",
      title_pl: "Moje mocne strony?",
      description_en:
        "The biggest of my advantage is that I never give up if I have a problem, the best solution counts most. Communicability, especially in english, to better use this language and acquire new acquaintances. Tendency to learn new technologies, especially Linux. Free operating system widely used in computer hardware. I have about 5 years of experience in this system and I use it as the main operating system for everyday use and work. Organization of work is also my strength. I set a plan of the day to be able to work, learn and spend time with my family and do something for myself.",
      description_pl:
        "Mają największą zaletą jest to, że nigdy się nie poddaję, jeśli mam problem, to liczy się najlepsze rozwiązanie. Komunikatywność, a szczególnie po angielsku, aby lepiej posługiwać się tym językiem i nabywać nowe znajomości.  Skłonność do poznawania nowych technologii, a szczególnie Linux. Darmowy system operacyjny szeroko stosowany w sprzęcie komputerowym. Mam około 5 lat doświadczenia w tym systemie i używam go jako głównego systemu operacyjnego do codziennego użytku i pracy. Organizacja pracy to także moja siła. Ustalam plan dnia, aby móc pracować, uczyć się i spędzać czas z rodziną i zrobić coś dla siebie."
    },
    {
      id: 3,
      title_en: "What studies did you graduate from?",
      title_pl: "Jakie studia skończyłem?",
      description_en:
        "I graduated from the University of Information Technology in Łódź for 3.5 years and I graduated with an engineer degree in „Computer Networks”. My defense of engineering work was to create a shop website with CMS in PHP.",
      description_pl:
        "Ukończyłem studia, które trwały 3.5 roku na Wyższej Szkole Informatyki w Łodzi i skończyłem je z tytułem inżyniera na specjalności „Sieci komputerowe”. Moja obrona pracy inżynierskiej polegała na utworzeniu serwisu sklepowego wraz CMS'em w języku PHP."
    }
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
    { id: 8, img: yarn, name: "yarn", url: "https://yarnpkg.com/" },
    {
      id: 9,
      img: linux,
      name: "Linux",
      url: "https://pl.wikipedia.org/wiki/Linux"
    },
    { id: 10, img: gimp, name: "Gimp", url: "https://www.gimp.org/" }
  ],
  footerContent: {
    name: { tag: "Jarosław Sochacki", icon: faUser },
    email: { tag: "inz.jaroslawsochacki@gmail.com", icon: faAt },
    socialIcons: [
      {
        id: 0,
        name: "twitter",
        link: "https://twitter.com/JarekSochacki",
        icon: faTwitter
      },
      {
        id: 1,
        name: "facebook",
        link: "https://www.facebook.com/profile.php?id=100001667016208",
        icon: faFacebook
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com/jaroslaw1984/",
        icon: faGithub
      }
    ],
    experience: {
      description_pl:
        "Tutaj można pobrać moje udokumentowane doświadczenie zawodowe w forme Curriculum Vitae (CV).",
      description_en:
        "Here you can download my documented professional experience in the form of Curriculum Vitae (CV)."
    }
  }
};

export default data;
