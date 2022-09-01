import React from "react";
import Link from "next/link";

const custom404 = ({ locale }) => {
  return (
    <>
      {locale == "en" ? (
        <div className="container flex h-[100vh] flex-col items-center justify-center">
          <h1>404</h1>
          <h2 className="mb-10">
            The page does not exist, try returning to the homepage.
          </h2>
          <Link href="/en">
            <a className="btn-primary">Homepage</a>
          </Link>
        </div>
      ) : (
        <div className="container flex h-[100vh] flex-col items-center justify-center">
          <h1>404</h1>
          <h2 className="mb-10">
            Stránka neexistuje, zkuste se vrátit zpět na úvodní stránku.
          </h2>
          <Link href="/">
            <a className="btn-primary">Úvodní stránka</a>
          </Link>
        </div>
      )}
    </>
  );
};

export async function getStaticProps({ locale }) {
  return { props: { locale } };
}

export default custom404;
