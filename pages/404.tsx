import React from "react";
import Link from "next/link";
import { NextPage } from "next";

interface Props404 {
  locale: string;
}

const custom404: NextPage<Props404> = ({ locale }) => {
  return (
    <>
      {locale == "en" ? (
        <div className="container flex h-[100vh] flex-col items-center justify-center">
          <h1>404</h1>
          <h2 className="mb-10 text-center">
            The page does not exist, try returning to the homepage.
          </h2>
          <Link href="/en">
            <a className="btn-primary">Homepage</a>
          </Link>
        </div>
      ) : (
        <div className="container flex h-[100vh] flex-col items-center justify-center">
          <h1>404</h1>
          <h2 className="mb-10 text-center">
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
