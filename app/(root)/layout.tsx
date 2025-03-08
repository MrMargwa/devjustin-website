// "use client";

// import "./globals.css";

// import { useEffect, useState } from "react";
// import AOS from "aos";
// import Preloader from "@/components/common/Preloader";
// import "@/public/assets/css/bootstrap.min.css";
// import "@/public/assets/css/animate.min.css";
// import "@/public/assets/css/magnific-popup.css";
// import "@/public/assets/css/fontawesome-all.min.css";
// import "@/public/assets/css/flaticon.css";
// import "@/public/assets/css/odometer.css";
// import "@/public/assets/css/jarallax.css";
// import "@/public/assets/css/swiper-bundle.min.css";
// import "@/public/assets/css/slick.css";
// import "@/public/assets/css/aos.css";
// import "@/public/assets/css/default.css";
// import "@/public/assets/css/style.css";
// import "@/public/assets/css/responsive.css";

// import Navbar from "@/components/layout/Navbar";
// import DataBg from "@/components/common/DataBg";
// import Footer from "@/components/layout/Footer";

// import { NavbarData } from "@/data/data";

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   const [scroll, setScroll] = useState<boolean>(false);
//   // Moblile Menu
//   const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
//   const handleMobileMenu = () => {
//     setMobileMenu(!isMobileMenu);
//     !isMobileMenu
//       ? document.body.classList.add("mobile-menu-visible")
//       : document.body.classList.remove("mobile-menu-visible");
//   };

//   const [isOffcanvus, setOffcanvus] = useState(false);
//   const handleOffcanvus = () => setOffcanvus(!isOffcanvus);

//   useEffect(() => {
//     document.addEventListener("scroll", () => {
//       const scrollCheck = window.scrollY > 100;
//       if (scrollCheck !== scroll) {
//         setScroll(scrollCheck);
//       }
//     });
//   }, []);

//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     AOS.init();
//   }, []);

//   return (
//     <>
//       {!loading ? (
//         <>
//           <DataBg />
//           <Navbar
//             scroll={scroll}
//             isMobileMenu={isMobileMenu}
//             handleMobileMenu={handleMobileMenu}
//             isOffcanvus={isOffcanvus}
//             handleOffcanvus={handleOffcanvus}
//             data={NavbarData}
//           />
//           <main className="antialiased fix">{children}</main>
//           <Footer />
//         </>
//       ) : (
//         <html lang="en">
//           <body>
//             <Preloader />
//           </body>
//         </html>
//       )}
//     </>
//   );
// }

"use client";

import "./globals.css";

import { useEffect, useState } from "react";
import AOS from "aos";
import Preloader from "@/components/common/Preloader";
import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/animate.min.css";
import "@/public/assets/css/magnific-popup.css";
import "@/public/assets/css/fontawesome-all.min.css";
import "@/public/assets/css/flaticon.css";
import "@/public/assets/css/odometer.css";
import "@/public/assets/css/jarallax.css";
import "@/public/assets/css/swiper-bundle.min.css";
import "@/public/assets/css/slick.css";
import "@/public/assets/css/aos.css";
import "@/public/assets/css/default.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";

import Navbar from "@/components/layout/Navbar";
import DataBg from "@/components/common/DataBg";
import Footer from "@/components/layout/Footer";

import { NavbarData, FooterData } from "@/data/data";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const [isOffcanvus, setOffcanvus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // // Moblile Menu
  // const handleMobileMenu = () => {
  //   setMobileMenu(!isMobileMenu);

  //   // Gebruik een if-statement in plaats van een ternary operator
  //   if (!isMobileMenu) {
  //     document.body.classList.add("mobile-menu-visible");
  //   } else {
  //     document.body.classList.remove("mobile-menu-visible");
  //   }
  // };

  // const handleOffcanvus = () => setOffcanvus(!isOffcanvus);

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY > 100;
  //     if (scrollCheck !== scroll) {
  //       setScroll(scrollCheck);
  //     }
  //   });
  // }, [scroll]);

  // // Moblile Menu
  // const handleMobileMenu = () => {
  //   setMobileMenu((prevState) => !prevState);
  //   document.body.classList.toggle("mobile-menu-visible", !isMobileMenu);
  // };

  // Moblile Menu
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    // Gebruik een if-statement in plaats van een ternary operator
    if (!isMobileMenu) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  const handleOffcanvus = () => setOffcanvus((prevState) => !prevState);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]); // We only want this effect to run once

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    AOS.init();
  }, []);

  return (
    <>
      {!loading ? (
        <html lang="en">
          <DataBg />
          <Navbar
            scroll={scroll}
            // isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            isOffcanvus={isOffcanvus}
            handleOffcanvus={handleOffcanvus}
            data={NavbarData}
          />
          <main className="fix">{children}</main>
          <Footer data={FooterData} />
        </html>
      ) : (
        <html lang="en">
          <body>
            <Preloader />
          </body>
        </html>
      )}
    </>
  );
}
