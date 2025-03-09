// Losse Props
export interface Page {
  title: string;
  link: string;
  isMenuItem?: boolean;
}

export interface Bulletpoint {
  title: string;
  description: string;
}

// Navbar Props
export interface NavbarProps {
  logo: string;
  info: {
    address: string;
    email: string;
    email2: string;
    phone: string;
  };
  pages: Page[];
}

// Hero Props
export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  btnText: string;
  btnUrl: string;
}

// Skill Props
export interface SkillsProps {
  image: string;
}

// About Props
export interface AboutProps {
  title: string;
  subtitle: string;
  description: string;
  bulletpoints: Bulletpoint[];
  description2: string;
}

// Footer Props
export interface FooterProps {
  logo: string;
  description: string;
  pages: Page[];
  info: {
    address: string;
    phone: string;
    email: string;
    email2: string;
  };
}
