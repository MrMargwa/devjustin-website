// -----=Navbar Data=-----//
const NavbarData = {
  logo: "/assets/img/logo/logo.png",
  info: {
    address: "8701GJ Friesland, Bolsward",
    email: "jharinga@devjustin.nl",
    email2: "253258@student.firda.nl",
    phone: "0644446502",
  },
  pages: [
    {
      title: "Home",
      link: "home",
      isMenuItem: true,
    },
    {
      title: "Over Mij",
      link: "about",
      isMenuItem: true,
    },
    {
      title: "Projecten",
      link: "projects",
      isMenuItem: true,
    },
    {
      title: "CV",
      link: "cv",
      isMenuItem: true,
    },
    {
      title: "Contact",
      link: "contact",
      isMenuItem: false,
    },
  ],
};

// -----=Hero Data=-----//
const HeroData = {
  title: "Hallo, Ik ben Justin Haringa",
  subtitle: "Web Developer & Designer",
  description:
    "Een paar jaar geleden begon ik met programmeren, maar ik had geen idee waar ik mee bezig was. Tot mijn vader me liet zien wat je allemaal kunt doen met code. Vanaf dat moment ging ik meer leren over verschillende programmeertalen en Programmeer omgevingen, en kreeg ik steeds meer plezier in programmeren.",
  btnText: "Bekijk Projecten",
  btnUrl: "/projects",
};

// -----=Skills Data=----- //
const SkillsData = [
  {
    // HTML
    image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    // CSS
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
  },
  {
    // JavaScript
    image:
      "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  },
  {
    //NextJS
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv57CseYKDfcVCRw2mYMpxyqSML5dT2MOe1A&s",
  },
  {
    // React
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    // TailwindCSS
    image:
      "https://cdn.creazilla.com/icons/3257079/file-type-tailwind-icon-md.png",
  },
  {
    // Bootstrap
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
  },
  {
    // C#
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png",
  },
  {
    // .NET
    image: "https://teqnation.com/wp-content/uploads/2019/05/net-logo.png",
  },
];

// -----=Footer Data=-----//
const FooterData = {
  logo: "/assets/img/logo/w_logo.png",
  description:
    "  Lorem ipsum dolor sit amet consectetur \nadipisicing elit. Ea, iure earum sunt, iste \neligendi atque sit quaerat assumenda natus \nab enim totam eos alias veritatis. Similique \nadipisci dignissimos dicta eum.",
  pages: [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "Over Mij",
      link: "about",
    },
    {
      title: "Projecten",
      link: "projects",
    },
    {
      title: "CV",
      link: "cv",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ],
  info: {
    address: "8701GJ Friesland, Bolsward",
    phone: "0644446502",
    email: "jharinga@devjustin.nl",
    email2: "253258@student.firda.nl",
  },
};

export { NavbarData, HeroData, SkillsData, FooterData };
