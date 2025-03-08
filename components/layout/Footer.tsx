import { FooterProps, Page } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ data }: { data: FooterProps }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer>
        <div className="footer-area-three">
          <div className="footer-top-three">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <div className="fw-logo">
                      <Link href="#home">
                        <Image
                          src={data.logo}
                          alt="Logo"
                          width={200}
                          height={100}
                        />
                      </Link>
                    </div>
                    <div className="footer-content">
                      {/* <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea, iure earum sunt, iste eligendi atque sit quaerat
                        assumenda natus ab enim totam eos alias veritatis.
                        Similique adipisci dignissimos dicta eum.
                      </p> */}
                      <p className="">{data.description}</p>
                      {/* <div className="footer-social footer-social-three">
                        <ul className="list-wrap">
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
                              <i className="fab fa-pinterest-p" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-youtube" />
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-2 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Menu</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/about">Company</Link>
                        </li>
                        <li>
                          <Link href="/contact">Careers</Link>
                        </li>
                        <li>
                          <Link href="/contact">Press media</Link>
                        </li>
                        <li>
                          <Link href="/blog">Our Blog</Link>
                        </li>
                        <li>
                          <Link href="/contact">Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-3 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Pages</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        {data.pages.map((i: Page, index: number) => (
                          <li key={index}>
                            <Link href={`#${i.link}`}>{i.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-7">
                  <div className="footer-widget">
                    <h4 className="fw-title">Contact Info</h4>
                    <div className="footer-info">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-pin" />
                          </div>
                          <div className="content">
                            <p>{data.info.address}</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <Link href={`tel:${data.info.phone}`}>
                              <p> +{data.info.phone}</p>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-mail" />
                          </div>
                          <div className="content">
                            <Link href={`mail:${data.info.email}`}>
                              <p>{data.info.email}</p>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-mail" />
                          </div>
                          <div className="content">
                            <Link href={`mail:${data.info.email2}`}>
                              <p>{data.info.email2}</p>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-three">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text-two text-center">
                    <p>Copyright © {year} DevJustin | All Right Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
