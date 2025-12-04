"use client";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaSnapchatGhost } from "react-icons/fa";

const SoMeIcons = ({facebook,twitter,snapchat}: {facebook: string, twitter: string, snapchat: string}) => {
  return (
    <div
      className="flex flex-nowrap gap-4 justify-between min-w-0 max-w-[150px] [&>*]:aspect-square [&>*]:border-2 [&>*]:border-(--white)
      [&>*]:hover:border-(--red) transition-all duration-300 ease-in-out "
    >
      <a href={facebook} className="group">
        <div className="">
          <TiSocialFacebook size="100%" className=" group-hover:text-(--red) group-hover:scale-105" />
        </div>
      </a>
      <a href={twitter} className="group">
        <div className="">
          <TiSocialTwitter size="100%" className=" group-hover:text-(--red) group-hover:scale-105" />
        </div>
      </a>
      <a href={snapchat} className="group">
        <div className="">
          <FaSnapchatGhost size="100%" className=" group-hover:text-(--red) group-hover:scale-105" />
        </div>
      </a>
    </div>
  );
};

export default SoMeIcons;
