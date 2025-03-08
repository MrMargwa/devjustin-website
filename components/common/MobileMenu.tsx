import Link from "next/link";
import { useState } from "react";

import { NavbarProps, Page } from "@/types/types";

export default function MobileMenu({ data }: { data: NavbarProps }) {
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
      <ul className="navigation">
        {data.pages.map((i: Page, index: number) => (
          <li
            key={index}
            className={`${isActive.key == index ? "active" : ""}`}
            onClick={() => handleToggle(index)}
          >
            <Link href={`#${i.isMenuItem && i.link}`}>
              {i.isMenuItem && i.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
