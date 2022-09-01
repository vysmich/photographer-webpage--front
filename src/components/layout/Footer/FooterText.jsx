import Link from "next/link";

function FooterText({ links }) {
  return (
    <div className="mb-5 flex flex-col lg:mb-0">
      {links.map((item) => (
        <Link key={item.title} href={item.link}>
          <a className="text-center text-sm">{item.title}</a>
        </Link>
      ))}
    </div>
  );
}

export default FooterText;
