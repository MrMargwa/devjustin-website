import { HeroProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function HeroBlock({ data }: { data: HeroProps }) {
  return (
    <>
      <section
        id="home"
        className="banner-area-two banner-bg-two"
        data-background="/assets/img/banner/h2_banner_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content-two">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  {data.subtitle}
                </span>
                <h2 className="title" data-aos="fade-up" data-aos-delay={300}>
                  {data.title}
                </h2>
                <p data-aos="fade-up" data-aos-delay={500}>
                  {data.description}
                </p>
                <div className="banner-btn">
                  <Link
                    href={data.btnUrl}
                    className="btn"
                    data-aos="fade-right"
                    data-aos-delay={700}
                  >
                    {data.btnText}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img text-center">
                <Image
                  src="/assets/img/banner/h2_banner_img.png"
                  alt=""
                  data-aos="fade-left"
                  data-aos-delay={400}
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape-wrap">
          <Image
            src="/assets/img/banner/h2_banner_shape01.png"
            alt="logo"
            width={100}
            height={100}
          />
          <Image
            src="/assets/img/banner/h2_banner_shape02.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            src="/assets/img/banner/h2_banner_shape03.png"
            alt=""
            data-aos="zoom-in-up"
            data-aos-delay={800}
            width={500}
            height={200}
          />
        </div>
      </section>
    </>
  );
}
