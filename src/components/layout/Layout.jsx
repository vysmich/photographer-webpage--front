import LangSwitch from "./LangSwitch";
import Footer from "./Footer/Footer";

function Layout({ children, footer }) {
  return (
    <div>
      <LangSwitch />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
}

export default Layout;
