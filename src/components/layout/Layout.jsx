import LangSwitch from "./AsideNav";
import Footer from "./Footer/Footer";
import MainNav from "./MainNav";
import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

function Layout({ children, contextLocale, layoutData, hero, data }) {
  const [showHeader, setShowHeader] = useState(true);
  const headerClass = showHeader
    ? " z-10 flex relative xl:fixed w-full translate-y-0 flex-row-reverse items-center bg-bgsecondary xl:flex-row"
    : "-translate-y-28";
  useEffect(() => {
    window.addEventListener(
      "scroll",
      throttle(
        () =>
          window.pageYOffset > 500 ? setShowHeader(false) : setShowHeader(true),
        250
      )
    );
  }, []);

  return (
    <div>
      <header className={"transition duration-700 ease-in-out " + headerClass}>
        <MainNav navData={layoutData.Nav.navItem} />
        <h1 className=" flex-1 py-5 text-center text-3xl">
          Barbora Vyskočilová
        </h1>
        <LangSwitch contextLocale={contextLocale} />
      </header>
      <main>{children}</main>
      <Footer footerData={layoutData} />
    </div>
  );
}

export const getLayout = (page, { layoutData, hero, data }) => (
  <Layout layoutData={layoutData} hero={hero} data={data}>
    {page}
  </Layout>
);
