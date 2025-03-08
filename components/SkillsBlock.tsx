"use client";
import { SkillsProps } from "@/types/types";
import Image from "next/image";
import Slider from "react-slick";

export default function SkillsBlock({ skills }: { skills: SkillsProps[] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="brand-aera-two pb-80 pt-80">
        <div className="container">
          <Slider {...settings} className="row brand-active">
            {skills.map((i: SkillsProps, index: number) => (
              <div key={index} className="col-lg-12">
                <div className="brand-item">
                  <Image width={100} height={100} src={i.image} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
