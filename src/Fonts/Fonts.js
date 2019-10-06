//this is a configuration file for font size to mobile and desktop

const fontsSize = {
  // ***********
  // Portrait **
  // ***********

  // ***************************************************************************
  // project is created for mobile first and it is start with 375px as default

  // mobile size > 414px
  resolutionSm: "414px",
  // middle size > 768px
  resolutionMd: "768px",

  // ***************************************************************************

  // ************
  // Landscape **
  // ************
  resolutionXsLands: "480px",

  // *****************************************
  // all text titles (>H2>)
  // *****************************************
  // mobile size > 375px
  H2Xs: "1.6rem",
  // mobile size > 414px
  H2Sm: "2rem",
  // middle size > 768px
  H2Md: "2.5rem",

  // *****************************************
  // all paragraph text (<P>)
  // *****************************************
  // mobile size > 375px
  PXs: "1.1rem",
  // mobile size > 414px
  PSm: "1.3rem",
  // middle size > 768px
  PMd: "1.5rem",

  // *****************************************
  // all paragraph line-height (<P>)
  // *****************************************
  lineHeight: "5vh",

  // *****************************************
  // all buttons size that lead to subpages
  // *****************************************
  // mobile size > 375px
  BtnLinkXs: "0.9rem",
  // mobile size > 414px
  BtnLinkSm: "1.1rem",
  // middle size > 768px
  BtnLinkMd: "1.4rem",

  // *****************************************
  // scroll button size that lead to top
  // *****************************************
  // mobile size > 375px
  BtnScrollTopXs: "2rem",
  // middle size > 768px
  BtnScrollTopMd: "2.3rem",

  // -----------------------------------------

  //component Header.js navBar

  // mobile size > 375px
  menuTextXs: "1.2rem",

  // mobile size > 414px
  menuTextSm: "1.5rem",

  // middle size > 768px
  menuTextMd: "1.35rem",

  // -----------------------------------------

  //component Jumbo.js

  // mobile size > 375px
  JTitleXs: "1.1rem",
  JH2Xs: "1.5rem",

  // mobile size > 414px
  JTitleSm: "1.3rem",
  JH2Sm: "2rem",

  // middle size > 768px
  JTitletMd: "2.1rem",
  JH2Md: "3rem",

  // -----------------------------------------

  // component ProjectsContent.js

  // mobile size > 375px
  PCCardTitleXs: "1.3rem",
  PCCardTextXs: "1rem",

  // mobile size > 414px
  PCCardTitleSm: "1.5rem",
  PCCardTextSm: "1.2rem",

  // middle size > 768px
  PCCardTitleMd: "1.7rem",
  PCCardTextMd: "1.4rem",
  PCCardBtnMd: "1.4rem",

  // -----------------------------------------

  // component Contact.js > Item.js

  // mobile size > 375px
  IH2Xs: "1.1rem", //common with title form
  IH6Xs: "0.8rem",
  IPXs: "1rem", // common with alert text

  // mobile size > 414px
  IH2Sm: "1.5rem", //common with title form
  IH6Sm: "1rem",
  IPSm: "1.2rem", // common with alert text

  // middle size > 768px
  IH2Md: "1.9rem", //common with title form
  IH6Md: "1.2rem",
  IPMd: "1.4rem", // common with alert text

  // -----------------------------------------

  // component Contact.js > AddContact.js (>Form>)
  // Inherits properties from Item.js

  // component About.js

  // mobile size > 375px
  APXs: "1rem",
  TH3Xs: "1.2rem",

  // mobile size > 414px
  APSm: "1.3rem",
  TH3Sm: "1.4rem",

  // middle size > 768px
  APMd: "1.7rem",
  TH3Md: "1.6rem",
  IconSizeFileMd: "2.5rem",

  // component About.js > Tags.js

  // mobile size > 375px
  IconSizeFileXs: "1.6rem",
  // mobile size > 414px
  IconSizeFileSm: "2rem",
  // middle size > 768px
  IconActiveTag: "3rem",

  // -----------------------------------------

  // component Footer.js

  // mobile size > 375px
  fMailAdressXs: "1rem",
  fMailIconSizeXs: "2rem",
  fSocialIconSizeXs: "2.4rem",

  // mobile size > 414px
  fMailAdressSm: "1.3rem",
  fMailIconSizeSm: "2.2rem",
  fSocialIconSizeSm: "3rem",

  // middle size > 768px
  fMailAdressMd: "1.5rem",
  fMailIconSizeMd: "2.5rem",
  fSocialIconSizeMd: "3.5rem",

  // -----------------------------------------

  // ************
  // landscape **
  // ************

  //component Jumbo.js

  // mobile size > 414px
  JTitleXsLands: "1.1rem",
  JH2XsLands: "1.6rem"
};

export default fontsSize;
