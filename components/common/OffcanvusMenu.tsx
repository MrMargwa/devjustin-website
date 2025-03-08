import { NavbarProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface OffcanvusMenuProps {
  isOffcanvus: boolean;
  handleOffcanvus: () => void;
  data: NavbarProps;
}

export default function OffcanvusMenu({
  isOffcanvus,
  handleOffcanvus,
  data,
}: OffcanvusMenuProps) {
  return (
    <>
      <div className={`extra-info ${isOffcanvus ? "active" : ""}`}>
        <div className="close-icon menu-close" onClick={handleOffcanvus}>
          <button>
            <i className="far fa-window-close" />
          </button>
        </div>
        <div className="logo-side mb-30">
          <Link href="/">
            <Image
              src="/assets/img/logo/logo.png"
              alt="Logo"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <div className="side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Adres</h4>
            <p>{data.info.address}</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Telefoonnummer</h4>
            <p>+{data.info.phone}</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Email</h4>
            <p>{data.info.email}</p>
          </div>
          <div className="contact-list mb-30">
            <h4>School Email</h4>
            <p>{data.info.email2}</p>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas-overly ${isOffcanvus ? "active" : ""}`}
        onClick={handleOffcanvus}
      />
    </>
  );
}
