import Link from "next/link";

import FooterText from "./FooterText";
import FooterNav from "./FooterNav";
import SocialLinks from "./SocialLinks";
import FooterInsta from "./FooterInsta";

function Footer({ footerData }) {
  return (
    <footer className=" color relative z-10 bg-dark py-14 text-white ">
      <div className=" container ">
        <div className=" mx-auto grid max-w-screen-lg items-center justify-items-center sm:grid-cols-2 sm:divide-x lg:grid-cols-3  xl:pb-6">
          <FooterText links={footerData.TextPageNav.navItem} />
          <FooterNav links={footerData.Nav.navItem} />
          <div className="px-8  lg:py-12">
            <SocialLinks color={"fill-white"} align={"justify-center"} />
          </div>
        </div>
        {/* <FooterInsta text={footerData.instaText} /> */}
      </div>
    </footer>
  );
}

export default Footer;
