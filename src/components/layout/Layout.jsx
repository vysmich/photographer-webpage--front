import LangSwitch from "./AsideNav";
import Footer from "./Footer/Footer";
import MainNav from "./MainNav";

function Layout({ children, layoutData, contextLocale }) {
  return (
    <div>
      <LangSwitch contextLocale={contextLocale} />
      <div className="absolute top-75vh z-10 text-white">
        <MainNav navData={layoutData.Nav.navItem} />
      </div>
      <main>{children}</main>
      <Footer footerData={layoutData} />
    </div>
  );
}

export default Layout;
