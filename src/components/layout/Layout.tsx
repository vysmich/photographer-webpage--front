import { useEffect, useState, useRef } from "react";
//components
import LangSwitch from "./AsideNav";
import Footer from "./Footer/Footer";
import MainNav from "./MainNav";
//locomotive scroll
import { LocomotiveScrollProvider, Scroll } from "react-locomotive-scroll";
//router
import { useRouter } from "next/router";
//types
import { FC, ReactNode, ReactElement } from "react";
import { LayoutData } from "src/query/HomepageGql";

interface LayoutProps {
  layoutData: LayoutData;
  children:ReactNode
}

const Layout:FC<LayoutProps> = ({ children, layoutData }) => {
  const { asPath, back } = useRouter();
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
        <LangSwitch  />
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
        location={asPath}
        onLocationChange={(scroll:Scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
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

export const getLayout: (
  page: ReactElement,
  {
    layoutData,
  }: {
    layoutData: LayoutData;
  }
) => ReactNode = (page, { layoutData }) => (
  <Layout layoutData={layoutData}>{page}</Layout>
);

