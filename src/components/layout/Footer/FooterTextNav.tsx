//components
import Link from "next/link";
//types
import {FC} from "react";
import { NavItem } from "src/query/HomepageGql";

interface FooterTextNavProps {
  links: NavItem[];
}

const FooterTextNav: FC<FooterTextNavProps> = ({ links }) => {
  return (
    <div className="mb-5 flex flex-col lg:mb-0">
      {links.map((item) => (
        <Link key={item.title} href={item.link}>
          <a className="text-center text-sm">{item.title}</a>
        </Link>
      ))}
    </div>
  );
};

export default FooterTextNav;
