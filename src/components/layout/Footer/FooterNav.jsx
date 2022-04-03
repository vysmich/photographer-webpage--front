import Link from "next/link";

function FooterNav(FooterNavData) {
  return (
    <nav className="hidden h-full w-full grid-cols-2 gap-y-3 py-12 text-center uppercase lg:grid ">
      <Link href="/">
        <a>{FooterNavData.FooterNavData.Item_1}</a>
      </Link>
      <Link href="/">
        <a>{FooterNavData.FooterNavData.Item_2}</a>
      </Link>
      <Link href="/">
        <a>{FooterNavData.FooterNavData.Item_3}</a>
      </Link>
      <Link href="/">
        <a>{FooterNavData.FooterNavData.Item_4}</a>
      </Link>
    </nav>
  );
}

export default FooterNav;
