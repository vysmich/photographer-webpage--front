import LangSwitch from "./AsideNav";
import Footer from "./Footer/Footer";
import MainNav from "./MainNav";

function Layout({ children, contextLocale, layoutData }) {
  return (
    <div>
      <LangSwitch contextLocale={contextLocale} />
      <div className="top-[90vh] z-10 text-white lg:absolute">
        <MainNav navData={layoutData.Nav.navItem} />
      </div>
      <main>{children}</main>
      <Footer footerData={layoutData} />
    </div>
  );
}

export const getLayout = (page, { layoutData }) => (
  <Layout layoutData={layoutData}>{page}</Layout>
);
