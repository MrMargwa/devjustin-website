import Image from "next/image";

export default function AboutBlock() {
  return (
    <>
      <section id="about" className="about-area-three">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="about-img-wrap-three">
                <Image
                  src="/assets/img/images/h2_about_img01.jpg"
                  alt=""
                  width={450}
                  height={300}
                  data-aos="fade-down-right"
                  data-aos-delay={0}
                />
                <Image
                  src="/assets/img/images/h2_about_img02.jpg"
                  alt=""
                  width={250}
                  height={250}
                  data-aos="fade-left"
                  data-aos-delay={400}
                />
                <div
                  className="experience-wrap"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <br />
                  <br />
                  {/* <h2 className="title">
                    25 <span>Years</span>
                  </h2>
                  <p>Of Experience in This Finance Advisory Company.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-three">
                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                  <span className="sub-title">Get To know US</span>
                  <h2 className="title tg-element-title">
                    Innovative Business Solutions for Financial Company
                  </h2>
                </div>
                <p className="info-one">
                  Morem ipsum dolor sit amet, consectetur adipiscing elita
                  florai psum dolor sit amet, consecteture.Borem ipsum dolor sit
                  amet, consectetur adipiscing elita florai psum.
                </p>
                <div className="about-list-two">
                  <ul className="list-wrap">
                    <li>
                      <i className="fas fa-arrow-right" />
                      100% Better results
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Suspe ndisse suscipit sagittis
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      promis specific timelineI guarantee
                    </li>
                    <li>
                      <i className="fas fa-arrow-right" />
                      Review Credit Reports
                    </li>
                  </ul>
                </div>
                <p>
                  Morem ipsum dolor sit amet, consectetur adipiscing elita
                  florai psum dolor sit amet, consecteture.
                </p>
                {/* <div className="about-author-info">
                  <div className="thumb">
                    <Image
                      src="/assets/img/images/about_author.png"
                      alt=""
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="content">
                    <h2 className="title">Mark Stranger</h2>
                    <span>CEO, Gerow Finance</span>
                  </div>
                  <div className="signature">
                    <Image
                      src="/assets/img/images/signature.png"
                      alt=""
                      width={500}
                      height={200}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-wrap-two">
          <Image
            src="/assets/img/images/h2_about_shape01.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            src="/assets/img/images/h2_about_shape02.png"
            alt=""
            width={150}
            height={150}
          />
          <Image
            src="/assets/img/images/h2_about_shape03.png"
            alt=""
            width={350}
            height={350}
            data-aos="fade-left"
            data-aos-delay={500}
          />
        </div>
      </section>
    </>
  );
}
