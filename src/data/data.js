import avatar from "../images/avatar.jpg";
import page1 from "../images/my_page1.jpg";
import m_tablet from "../images/m_tablet.jpg";
import v_mobile from "../images/v_mobile.jpg";
import m_project from "../images/m_project.jpg";
import v_all_devices from "../images/v_all_devices.jpg";
import reactbootstrap from "../images/reactbootstrap.svg";
import js from "../images/js.jpg";
import styled from "../images/styled.jpg";
import react from "../images/react.jpg";
import css from "../images/css.jpg";
import jsx from "../images/jsx.jpg";
import html from "../images/html.jpg";
// import phone from "../images/phone.jpg";
import git from "../images/git.jpg";
import sass from "../images/sass.jpg";
import yarn from "../images/yarn.jpg";
import linux from "../images/linux.jpg";
import gimp from "../images/gimp.jpg";
// import progr_1 from "../images/progr_1.jpg";
import { faAt, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const data = {
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
      h2_en: "Designing",
      h2_pl: "Projektowanie",
      text1_en:
        "I am learning programming and website design since 2018. I do projects only for myself, thanks to which I can create my visions, ideas and above all I love challenges. I am currently looking for a job as a Junior Frontend Developer.",
      text1_pl:
        "Uczę się programowania i projektowania stron internetowych od 2018. Projekty wykonuje wyłącznie dla siebie, dzięki temu mogę tworzyć swoje wizje, pomysły i przede wszystkim uwielbiam wyzwania. Aktualnie poszukuje pracy jako Junior Frontend Developer. ",
      img: "",
      codeExample: "",
      icons: "",
      text2_en: "",
      text2_pl: ""
    },
    {
      key: 1,
      h2_en: "Programing and tools",
      h2_pl: "Programowanie i narzędzia",
      text1_en:
        "Pure code is important as the page’s appearance represents the creator's style, which is why new technologies help achieve a visual goal. Below is a scrap of code on how it uses component styling in React:",
      text1_pl:
        "Czysty kod jest ważny jak wygląd strony, który przedstawia styl twórcy, dlatego nowe technologie pomagają osiągnąc wizualny cel.",
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
      h2_en: "Responsive websites",
      h2_pl: "Responsywne strony internetowe",
      text1_en:
        "When creating websites, I stick to certain rules, such as the mobile first principle. For this I also had to use the tools which is react-bootstrap, which will allow the website to be responsive, where it will fit on most mobile phones as well as desktop devices. Another tool for handling the responsiveness of the site is CSS itself, where, with the help of flex and grid, they allow you to control the displayed graphics and components.",
      text1_pl:
        "Przy tworzeniu stron internetowych trzymam się pewnych zasad jak między innymi zasada mobile first. Do tego również przyszło mi wykorzystać narzędzi jakim jest react-bootstrap, które pozwoli aby strona była responsywna, gdzie będzie się układać na większości telefonów komórkowych jak i urządzenia desktopowe. Innym narzędziem do obsługi responsywności strony jest sam CSS, gdzie przy pomocy flex oraz grid, pozowli na kotrolowanie wyświetlających się grafik i komponentów.",
      img: v_mobile,
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
            "In this stage of as a beginner, I wanted to build a website that would challenge me and help bring my skills to the next level. I believe this project taught me a many aspects to resolve a problems and patient. This will be not my last project in pure javascript. This project also show my other hobbies that i interesting and i hope in the future I could use it for commercial us",
          description_pl:
            "Na tym etapie, jako początkujący, chciałem stworzyć stronę internetową, która rzuciłaby mi wyzwanie i pomogłaby przenieść moje umiejętności na wyższy poziom. Wierzę, że ten projekt nauczył mnie wielu aspektów rozwiązywania problemów i cierpliwości. To nie będzie mój ostatni projekt w czystym javascript. Ten projekt pokazuje również moje inne hobby, które mnie interesują i mam nadzieję, że w przyszłości będę mógł go wykorzystać do celów komercyjnych.",
          m_img: m_tablet
        },
        {
          id: 1,
          title_en: "Technical page of omegiumfix",
          title_pl: "Strona techniczna omegiumfix",
          description_en:
            "I wanted to take things back to the basics to get a better understand of building a website from the ground up without popular javascript libraries. With this project I also realized one doesn't necessarily need a JavaScript library to produce a professional grade website. I chose to build this Omegium Fix Website with pure html, SASS, lots of JavaScript to create some nice animations to enhance the user experience and give the site a aesthetics.",
          description_pl:
            "Chciałem wrócić do podstaw, aby lepiej zrozumieć budowę witryny od podstaw bez popularnych bibliotek javascript. Dzięki temu projektowi zdałem sobie również sprawę z tego, że do stworzenia profesjonalnej strony internetowej niekoniecznie jest potrzebna biblioteka JavaScript. Zdecydowałem się zbudować tę witrynę Omegium Fix z czystym HTML, SASS i z dużą ilością JavaScript, aby stworzyć fajne animacje, które poprawią wrażenia użytkownika i nadadzą stronie estetyki.",
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
            "The goal of the site was to create a portfolio using various functional tools and a powerful programming language such as JavaScript. Use the React library was obvious to me because it does something cool. The user interface is completely defined in JavaScript, so thanks to the rich functionality of this language you can do everything you can inside the template. React helps to create the most complex user interfaces.",
          description_pl:
            "Celem strony było realizacja utworzenia portfolio zastosowaniem różnych funkcjonalnych narzędzi jak i mocnego języka programowania jakim jest JavaScript.  Użcie biblioteki React było dla mnie oczywiste, bo robi coś fajnego. Interfej użytkownika jest w całości zdefiniowany w JavaScript, więc dzięki bogatym funcjonalnalnością tego języka można wewnątrz szablonu robić wszystko co się da. React pomaga ona tworzyć najbardziej skomplikowane interfejsy uzytkownika.",
          m_img: m_tablet
        },
        {
          id: 1,
          title_en: "How it is made",
          title_pl: "Jak to jest zrobione",
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
  aboutContent: [
    {
      id: 0,
      title_en: "Who am I?",
      title_pl: "Kim jestem?",
      description_en:
        "Hello, my name is Jarosław Sochacki and I come from Włocławek. I have two children, a daughter named Nadia and a son, Alan. In addition to family and programming, I love rollerblading and relaxing with a good Sc-fi movie.",
      description_pl:
        "Witam, nazywam się Jarosław Sochacki i pochodzę z Włocławka. Mam dwójkę dzieci, córkę o imieniu Nadia oraz syna Alan. Poza rodziną i programowaniem uwielbiam jeździć na rolkach i relaksować się przy dobrym filmie Sc-fi."
    },
    {
      id: 1,
      title_en: "Why I'd like to become as programer frontend?",
      title_pl: "Dlaczego chcę zostać programistą frontend?",
      description_en:
        "I'm looking an opportunity to be a better programer as now i write UI websites in freetime day by day. Being part of team i could bring new ideas and solved many problems and achieve better knowledge",
      description_pl:
        "Szukam okazji, aby zostać lepszym programistą, ponieważ teraz piszę strony z interfejsem użytkownika w wolnym czasie z dnia na dzień. Będąc częścią zespołu mogłem wnieść nowe pomysły i rozwiązać wiele problemów i zdobyć lepszą wiedzę"
    },
    {
      id: 2,
      title_en: "What I'm good at?",
      title_pl: "Moje mocne strony?",
      description_en:
        "Well it is hard to say what I'm good at. As everyone have many skills that make him unique and my are is  that I never give up if I have problem. I'm sitting on till i will solve it. It doesn't matter whether it's life problems or programming, the best solution counts. I love talk to other people a specialty in english. Also I like experience with Linux as an open source, free to use operating system widely used for computer hardware. I got about 5 years experience on this system and i use is as a main operating system for fun and working. The organization of work is also my strength. I set the plan of the day so that I can work, learn and spend time with my family and done something to my self. The last skill is hard work and my also I call it as my weaknes. I like being a smart guy.",
      description_pl:
        "Trudno powiedzieć, w czym jestem dobry. Ponieważ każdy ma wiele umiejętności, które czynią go wyjątkowym, a moim jest to, że nigdy się nie poddaję, jeśli mam problem. Siedzę, dopóki go nie rozwiążę. Nie ma znaczenia, czy to problemy życiowe, czy programowanie, liczy się najlepsze rozwiązanie. Uwielbiam rozmawiać z innymi ludźmi po angielsku. Lubię też doświadczenie z Linuksem jako open source, darmowy system operacyjny szeroko stosowany w sprzęcie komputerowym. Mam około 5 lat doświadczenia w tym systemie i używam go jako głównego systemu operacyjnego do zabawy i pracy. Organizacja pracy to także moja siła. Ustalam plan dnia, aby móc pracować, uczyć się i spędzać czas z rodziną i zrobić coś dla siebie. Ostatnią umiejętnością jest ciężka praca, którą nazywam też moją słabością. Lubię być mądrym facetem."
    },
    {
      id: 3,
      title_en: "What studies did you graduate from?",
      title_pl: "Jakie studia skończyłem?",
      description_en:
        "After graduating from high school, I continued my studies at the Vocational College, where I received the title of „IT technician” . The next step was my studies, which lasted 3.5 years at the University of Computer Science in Lodz and finished with the title of engineer in the specialty of „Network computer”",
      description_pl:
        "Po ukończeniu liceum, kontynułowałem naukę w Studium Zawodowe, gdzie otrzymałem tytuł „Technik informatyk”. Następnym krokiem były studia, które trwały 3.5 roku na Wyższej Szkole Informatyki w Łodzi i skończyłem je z tytułem inżyniera na specjalności „Sieci komputerowe”"
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
    ]
  }
};

export default data;
