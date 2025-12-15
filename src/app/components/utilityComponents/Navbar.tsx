"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import disableScroll from "disable-scroll";

type Page = "home" | "blog" | "book" | "contact";

type NavBarProps = {
  page: Page;
};

const NavBar = ({ page }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className="flex justify-between relative overflow-hidden sticky top-0
    full-bleed content-padding border-b-(--red) border-b-3 border-t-(--red) border-t-3 bg-black/90 h-[124px] z-100"
    >
      <Link href={"/"} className="2xl:px-0 px-4 w-[189px] my-auto">
        <Image
          loading="eager"
          src={"/assets/Logo.png"}
          width={228}
          height={54}
          alt={"logo"}
          className="2xl:px-0 px-4 min-w-[189px]"
        />
      </Link>
      <button
        onClick={() => {
          setMenuOpen((prev) => !prev);
          disableScroll.on();
        }}
        className="lg:hidden px-4 mr-2 scale-[1.4] flex flex-col gap-2 my-auto"
      >
        <span className="block w-8 h-[4px] rounded-2xl bg-white"></span>
        <span className="block w-8 h-[4px] rounded-2xl bg-white"></span>
        <span className="block w-8 h-[4px] rounded-2xl bg-white"></span>
      </button>
      {menuOpen && (
        <div className="lg:hidden w-full h-screen fixed inset-0 bg-black/90 z-40 items-center grid">
          <Image
            onClick={() => {
              setMenuOpen((prev) => !prev), disableScroll.off();
            }}
            loading="eager"
            src={"/assets/icon/iconCross.svg"}
            width={45}
            height={24}
            alt={"logo"}
            className="absolute top-[40px] right-[40px]"
          />
          <ul className="grid w-full [&>*]:uppercase [&>*]:text-center [&>*]:min-w-[128px] gap-8 col-[1/2] row-[1/2]">
            <Link href={"/"} onClick={() => disableScroll.off()}>
              {page === "home" ? (
                <li
                  className="
            text-(--red) flex flex-col items-center"
                >
                  Home
                  <Image
                    loading="eager"
                    src={"/assets/bottom_line.png"}
                    width={128}
                    height={10}
                    alt={"logo"}
                  />
                </li>
              ) : (
                <li className="hover:text-(--red) transition-all duration-200 ease-in">
                  Home
                </li>
              )}
            </Link>
            <Link href={"/blogPost"} onClick={() => disableScroll.off()}>
              {page === "blog" ? (
                <li className="text-(--red) flex flex-col items-center">
                  blog
                  <Image
                    loading="eager"
                    src={"/assets/bottom_line.png"}
                    width={128}
                    height={10}
                    alt={"logo"}
                  />
                </li>
              ) : (
                <li className="hover:text-(--red) transition-all duration-200 ease-in">
                  blog
                </li>
              )}
            </Link>
            <Link href={"/book"} onClick={() => disableScroll.off()}>
              {page === "book" ? (
                <li className="text-(--red) flex flex-col items-center">
                  book table
                  <Image
                    loading="eager"
                    src={"/assets/bottom_line.png"}
                    width={128}
                    height={10}
                    alt={"logo"}
                  />
                </li>
              ) : (
                <li className="hover:text-(--red) transition-all duration-200 ease-in">
                  book table
                </li>
              )}
            </Link>
            <Link href={"/contact"} onClick={() => disableScroll.off()}>
              {page === "contact" ? (
                <li className="text-(--red) flex flex-col items-center">
                  contact us
                  <Image
                    loading="eager"
                    src={"/assets/bottom_line.png"}
                    width={128}
                    height={10}
                    alt={"logo"}
                  />
                </li>
              ) : (
                <li className="hover:text-(--red) transition-all duration-200 ease-in">
                  contact us
                </li>
              )}
            </Link>
          </ul>
        </div>
      )}
      <ul className="hidden lg:flex [&>*]:uppercase [&>*]:text-center [&>*]:min-w-[128px] gap-8 my-auto">
        <Link href={"/"}>
          {page === "home" ? (
            <li
              className=" mr-[-1rem]
            text-(--red) flex flex-col items-center"
            >
              Home
              <Image
                loading="eager"
                src={"/assets/bottom_line.png"}
                width={128}
                height={10}
                alt={"logo"}
              />
            </li>
          ) : (
            <li className="hover:text-(--red) transition-all duration-200 ease-in mr-[-1rem]">
              Home
            </li>
          )}
        </Link>
        <Link href={"/blogPost"}>
          {page === "blog" ? (
            <li className="text-(--red) flex flex-col items-center">
              blog
              <Image
                loading="eager"
                src={"/assets/bottom_line.png"}
                width={128}
                height={10}
                alt={"logo"}
              />
            </li>
          ) : (
            <li className="hover:text-(--red) transition-all duration-200 ease-in">
              blog
            </li>
          )}
        </Link>
        <Link href={"/book"}>
          {page === "book" ? (
            <li className="text-(--red) flex flex-col items-center">
              book table
              <Image
                loading="eager"
                src={"/assets/bottom_line.png"}
                width={128}
                height={10}
                alt={"logo"}
              />
            </li>
          ) : (
            <li className="hover:text-(--red) transition-all duration-200 ease-in">
              book table
            </li>
          )}
        </Link>
        <Link href={"/contact"}>
          {page === "contact" ? (
            <li className="text-(--red) flex flex-col items-center ml-6">
              contact us
              <Image
                loading="eager"
                src={"/assets/bottom_line.png"}
                width={128}
                height={10}
                alt={"logo"}
              />
            </li>
          ) : (
            <li className="hover:text-(--red) transition-all duration-200 ease-in  ml-6">
              contact us
            </li>
          )}
        </Link>
        <li className="hover:text-(--red) transition-all duration-200 ease-in">
          log in
        </li>
      </ul>
      <span className="absolute w-[68px] h-[68px] rotate-45 bg-(--red) top-[-34px] left-[-34px]"></span>
      <span className="absolute w-[68px] h-[68px] rotate-45 bg-(--red) bottom-[-34px] right-[-34px]"></span>
    </nav>
  );
};
export default NavBar;
