import LangSwitch from "./LangSwitch";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <LangSwitch />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
