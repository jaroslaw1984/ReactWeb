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
      h2_en: `Being like a modern Frankenstein "it's alive"`,
      h2_pl: "Będąc jak współczesny Frankenstein „to żyje”",
      text1_en:
        "My goal is to gain knowledge about programming, thanks to which I can create my visions, ideas and I love challenges. Programming has become a part of my life since I can remember. The first program I wrote was a flying balloon on the screen created in Commodore 64, of course, the book helped me, but I felt like Frankenstein who brings something to life. My other works were born at the University of Information Technology, but my greatest pride was to create a bookstore in PHP with a full administrative panel for the defense of engineering work. It was a task full of adventures and frustration. I felt that the PHP programming language isn't for me. After a few years of drifting aimlessly, I found my holy grail which has become javascript. I started learning programming from scratch, the most obscure topics were explained to me by courses that were previously not so popular. Now I am more patient, I work harder to get better results and knowledge, which thanks my family for their patience that they give me a chance to achieve my goal.",
      text1_pl:
        "Moim celem jest zdobycie wiedzy programowania, dzięki której mogę tworzyć swoje wizje, pomysły i uwielbiam wyzwania. Programowanie stało się częścią mojego życia, odkąd pamiętam. Pierwszy program, który napisałem, to latający balon na ekranie stworzonym w Commodore 64, oczywiście pomogła mi w tym książka, ale czułem się jak Frankenstein który przywołuje coś do życia. Moje inne dzieła narodziły się na Wyższej Szkole Informatyki, ale moją największą dumą było stworzenie księgarni w języku PHP z pełnym panelem administracyjnym dla obrony pracy inżynierskiej. To było zadanie pełne przygód i frustracji. Czułem, że ten język programowania PHP nie jest dla mnie. Po paru latach dryfowania bez celu znalazłem swój święty gral jakim stał się  javascript. Zacząłem uczyć się programowania od zera, najbardziej niejasne zagadnienia wyjaśniły mi kursy, które wcześniej nie były tak popularne. Teraz jestem bardziej cierpliwy, pracuję ciężej, aby uzyskać lepsze efekty i wiedzę, co dziękuje mojej rodzinie za cierpliwość, że dają mi szansę na osiągnięcie celu.",
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
        "Czysty kod jest ważny jak wygląd strony, który przedstawia styl twórcy, dlatego nowe technologie pomagają osiągnąc wizualny cel. Niżej przedstawiam skrawek kodu w jaki sposób wykorzystuje stylizacji komponentów w React:",
      img: "",
      codeExample: [
        { code: "import styled from 'styled-components';" },
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
        "The user interface is a key element of any web application, therefore it uses the available styling tools, i.e. CSS3, Sass, style-componets and react-bootstrap if the website uses React technologies. However to work in a team and backups is using github. I do not present all the tools I use, because every other project requires different solutions to facilitate work.",
      text2_pl:
        "Interfejs użytkownika to kluczowy element każdej aplikacji internetowej, dlatego wykorzytuje dostępne narzędzia do stylizacji czyli CSS3, Sass, style-componets oraz react-bootstrap jeśli strona wykorzystuje technologie React. Natomiast do pracy w zespole i kopii zapasowych używam github'a. Nie przedstawiam wszystkich narzędzi jakich używam, gdyż każdy inny projekt wymaga różnych rozwiązń ułatwiające pracę."
    },
    {
      key: 2,
      h2_en: "Web design in React",
      h2_pl: "Projektowanie stron w React",
      text1_en:
        "Why did I choose React library ? Only a few years ago, when creating web applications, you had to prepare numerous separate pages. It was a very simple solution, although from the user's point of view it worked completely natural, because the current page disappeared and a new one appeared. Nowadays, this trend is becoming a thing of the past, because modern applications use the SPA (single-page-application) model. A model in which it does not move between different pages at all, or even reload them. The following code shows how to navigate between pages using the React Router:",
      text1_pl:
        "Dlaczego wybrałem bibliotekę React ? Jeszcze kilka lat temu, utworzenie aplikacje WWW, trzeba było przygotować liczne, osobne strony. Było to bardzo proste rozwiązanie, choć z punku widzenia użytkownika działało zupełnie naturalne, bo bieżąca strona znikała i pojawiała się nowa. Teraz w dzisiejszych czas ten trend idzie w niepamięć, bo w nowoczesnych aplikacjach wykorzystuje sie model SPA (ang. single-page-application -- aplikacja jednostronowa). Model, w którym w ogóle nie przechodzi się pomiędzy różnymi stronami, ani nawet ich nie przeładowuje. Poniższy kod przedstawia jak można przechodzić między stronami za pomocą React Router:",
      img: laptop,
      codeExample: [
        { code: "import { Router, Route, Switch } from 'react-router-dom';" },
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
      key: 3,
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
          title_pl:
            "Strona techniczna i jakie narzędzia zostały użyte do utworzenia Portfolio",
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
