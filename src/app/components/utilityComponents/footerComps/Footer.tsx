"use client";
import Image from "next/image";
import Recents from "./Recents";
import SoMeIcons from "../SoMeIcons";

const Footer = () => {
  return (
    <footer
      className="full-bleed grid grid-cols-subgrid [&>*]:col-start-2  [&_h2]:text-(--red)
    footer-img before:content-[''] before:absolute before:inset-0 before:bg-black/85 
    before:pointer-events-none before:z-10 relative [&>*]:relative [&>*]:z-20

    "
    >
      <div className="m-8 flex flex-col gap-32">
        <div className="grid grid-cols-[1fr_2fr] gap-12">
          <div className="flex flex-col gap-8">
            <div className="min-w-0 relative w-fit h-auto">
              <Image src="/assets/Logo.png" alt="logo" width={175} height={90} className="object-cover" />
            </div>

            <span>
              <h2>Location</h2>
              <p>Kompagnistræde 278 1265 København k</p>
            </span>
            <span>
              <h2>Opening Hours</h2>
              <ul>
                <li>wed-thur:10:30 PM TO 3AM</li>
                <li>sat-sun:11 PM TO 5AM</li>
              </ul>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-12">
              <h2>Recent posts</h2>
              <Recents />
              <Recents />
            </div>
            <div className="flex flex-col gap-12">
              <h2>Recent tweets</h2>
              <Recents />
              <Recents />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end">
          <p className="flex-1">Night Club PSD Template - All Rights Reserved</p>
          <span className="flex flex-1 flex-col justify-center mx-auto items-center gap-4">
            <p>Stay Connected With Us</p>
            <SoMeIcons facebook="#" twitter="#" snapchat="#" />
          </span>
          <p className="flex-1 text-end">Copyright © NightClub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
