import LangSwitch from "./AsideNav";
import Footer from "./Footer/Footer";
import MainNav from "./MainNav";

function Layout({ children, footer, contextLocale }) {
  return (
    <div>
      <LangSwitch contextLocale={contextLocale} />
      <MainNav />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
}

export default Layout;
