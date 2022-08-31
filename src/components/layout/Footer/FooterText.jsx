import Link from "next/link";

function FooterText({ links }) {
  return (
    <div className="flex flex-col">
      {links.map((item) => (
        <Link key={item.title} href={item.link}>
          <a className="text-center text-sm">{item.title}</a>
        </Link>
      ))}
    </div>
  );
}

export default FooterText;
