import Link from "next/link";

import FooterText from "./FooterText";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterInsta from "./FooterInsta";

function Footer(footerData) {
  return (
    <footer className=" color bg-dark py-14 text-white ">
      <div className=" container ">
        <div className=" mx-auto grid max-w-screen-lg items-center justify-items-center sm:grid-cols-2 sm:divide-x lg:grid-cols-3  xl:pb-6">
          <FooterText FooterTextData={footerData.footer.Footer_text} />
          <FooterNav FooterNavData={footerData.footer.Footer_nav} />
          <FooterContact FooterNavData={footerData.footer.Footer_nav} />
        </div>
        <FooterInsta FooterInstaData={footerData.footer.Insta_text} />
      </div>
    </footer>
  );
}

export default Footer;
