import Link from "next/link";
import MobileMenu from "@/components/common/MobileMenu";
import OffcanvusMenu from "@/components/common/OffcanvusMenu";
import { useState } from "react";
import { Page } from "@/types/types";
import { NavbarProps } from "@/types/types";
import Image from "next/image";

export default function Navbar({
  scroll,
  // isMobileMenu,
  handleMobileMenu,
  isOffcanvus,
  handleOffcanvus,
  data,
}: {
  scroll: boolean;
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
  isOffcanvus: boolean;
  handleOffcanvus: () => void;
  data: NavbarProps;
}) {
  const [isActive, setIsActive] = useState<{
    status: boolean;
    key: number;
  }>({
    status: false,
    key: 0,
  });

  const handleToggle = (key: number) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: 0,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <header
        id="sticky-header"
        className={`transparent-header header-style-two ${
          scroll ? "sticky-menu" : ""
        }`}
      >
        <div className="container custom-container">
          <div className="heder-top-wrap">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location" />
                      {data.info.address}
                    </li>
                    <li>
                      <i className="flaticon-mail" />
                      <Link href={`mailto:${data.info.email}`}>
                        {data.info.email}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header-top-right">
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link
                          href="https://github.com/MrMargwa/devjustin-website"
                          target="_blank"
                        >
                          <i className="fab fa-github" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="header-top-btn">
                    <Link href="#contact">
                      <i className="flaticon-briefcase" />
                      Neem contact op
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-area">
            <div className="row">
              <div className="col-12">
                {/* <div className="mobile-nav-toggler" onClick={handleMobileMenu}> */}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars" />
                </div>

                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="#home">
                        <Image
                          src={data.logo}
                          alt="Logo"
                          width={200}
                          height={100}
                          style={{
                            objectFit: "cover",
                            transform: "scale(1.1,1.5)",
                          }}
                        />
                      </Link>
                    </div>

                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        {data.pages.map((i: Page, index: number) => (
                          <li
                            key={index}
                            className={`${
                              isActive.key == index ? "active" : ""
                            }`}
                            onClick={() => handleToggle(index)}
                          >
                            <Link href={`#${i.isMenuItem && i.link}`}>
                              {i.isMenuItem && i.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-contact-two">
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <span>Telefoonnummer</span>
                            <Link href={`tel:${data.info.phone}`}>
                              +{data.info.phone}
                            </Link>
                          </div>
                        </li>

                        <li
                          className="offcanvas-menu"
                          onClick={handleOffcanvus}
                        >
                          <Link href="#home" className="menu-tigger">
                            <span />
                            <span />
                            <span />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>

                    <div className="nav-logo">
                      <Link href="/">
                        <Image
                          src={data.logo}
                          alt="Logo"
                          width={200}
                          height={100}
                          style={{
                            objectFit: "cover",
                            transform: "scale(1.1,1.5)",
                          }}
                        />
                      </Link>
                    </div>

                    {/* <div className="mobile-search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="flaticon-search" />
                        </button>
                      </form>
                    </div> */}

                    <div className="menu-outer">
                      <MobileMenu data={data} />
                    </div>

                    {/* <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
        <OffcanvusMenu
          isOffcanvus={isOffcanvus}
          handleOffcanvus={handleOffcanvus}
          data={data}
        />
      </header>
    </>
  );
}
