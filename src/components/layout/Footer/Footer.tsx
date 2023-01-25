//components
import Link from "next/link";
import FooterTextNav from "./FooterTextNav";
import FooterNav from "./FooterNav";
import SocialLinks from "./SocialLinks";
//types
import { LayoutData } from "src/query/HomepageGql";
import {FC} from "react";

interface FooterProps {
  footerData: LayoutData;
}

const Footer: FC<FooterProps> = ({ footerData }) => {
  const { TextPageNav, Nav } = footerData;
  return (
    <footer className=" color relative z-10 bg-dark py-14 text-white ">
      <div className=" container ">
        <div className=" mx-auto grid max-w-screen-lg items-center justify-items-center sm:grid-cols-2 sm:divide-x lg:grid-cols-3  xl:pb-6">
          <FooterTextNav links={TextPageNav.navItem} />
          <FooterNav links={Nav.navItem} />
          <div className="px-8  lg:py-12">
            <SocialLinks color={"fill-white"} align={"justify-center"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
