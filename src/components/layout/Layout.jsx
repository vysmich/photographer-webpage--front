import LangSwitch from "./AsideNav";
import Footer from "./Footer/Footer";
import MainNav from "./MainNav";

function Layout({ children, contextLocale, layoutData, hero, data }) {
  return (
    <div>
      <header className="flex flex-row-reverse items-center bg-bgsecondary xl:flex-row">
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
