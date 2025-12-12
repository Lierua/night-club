import Link from "next/link";
import Image from "next/image";

type Page = "home" | "blog" | "book" | "contact";

type NavBarProps = {
  page: Page;
};

const NavBar = ({ page }: NavBarProps) => {
  return (
    <nav
      className="flex justify-between relative overflow-hidden sticky top-0
    full-bleed content-padding border-b-(--red) border-b-3 border-t-(--red) border-t-3 bg-black/90 h-[124px] [&>*]:my-auto z-100"
    >
      <Link href={"/"}>
        <Image
          loading="eager"
          src={"/assets/Logo.png"}
          width={228}
          height={54}
          alt={"logo"}
        />
      </Link>
      <ul className="[&>*]:uppercase [&>*]:text-center [&>*]:min-w-[128px] flex gap-8">
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
