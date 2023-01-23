import { useEffect, useState, useRef } from "react";
//components
import LangSwitch from "./AsideNav";
import Footer from "./Footer/Footer";
import MainNav from "./MainNav";
//utils
import throttle from "lodash.throttle";
//locomotive scroll
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function Layout({ children, contextLocale, layoutData, hero, data }) {
  const containerRef = useRef(null);
  return (
    <div>
      <header
        className={
          "fixed relative z-10 flex w-full translate-y-0 flex-row-reverse items-center bg-bgsecondary transition duration-700 ease-in-out xl:flex-row "
        }
      >
        <MainNav navData={layoutData.Nav.navItem} />
        <h1 className=" -ml-3 flex-1 py-5 text-center text-3xl xl:ml-0">
          Barbora Vyskočilová
        </h1>
        <LangSwitch contextLocale={contextLocale} />
      </header>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          tablet: {
            smooth: true,
            breakpoint: 0,
            direction: "vertical",
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          <main>{children}</main>
          <Footer footerData={layoutData} />
        </div>
      </LocomotiveScrollProvider>
    </div>
  );
}

export const getLayout = (page, { layoutData, hero, data }) => (
  <Layout layoutData={layoutData} hero={hero} data={data}>
    {page}
  </Layout>
);
