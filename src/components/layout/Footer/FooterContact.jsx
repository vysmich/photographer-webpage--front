import Link from "next/link";

function FooterContact({ links }) {
  console.log(links);
  return (
    <div className="grid w-full px-8 lg:py-12">
      <div className="mb-4 flex justify-center">
        <a
          href="https://www.facebook.com/baravyskocilovaphoto"
          className="mr-4 hover:scale-110"
        >
          <svg
            className=" w-8 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M25 3C12.862 3 3 12.862 3 25c0 11.02 8.128 20.138 18.713 21.729l1.148.173V29.566h-5.197v-3.52h5.197v-4.673c0-2.878.691-4.774 1.834-5.963 1.144-1.19 2.833-1.789 5.184-1.789 1.88 0 2.611.114 3.307.2v2.88h-2.448a3.59 3.59 0 0 0-3.119 1.807c-.591 1.032-.775 2.264-.775 3.52v4.017h6.123l-.545 3.52h-5.578V46.93l1.135-.155C38.714 45.32 47 36.127 47 25c0-12.138-9.862-22-22-22zm0 2c11.058 0 20 8.942 20 20 0 9.73-6.964 17.732-16.156 19.533V31.564h5.293l1.162-7.52h-6.455v-2.017c0-1.037.19-1.967.51-2.525.32-.558.628-.8 1.384-.8h4.448V12.01l-.868-.117c-.6-.082-1.969-.272-4.44-.272-2.702 0-5.022.736-6.624 2.402-1.602 1.666-2.393 4.147-2.393 7.35v2.674h-5.197v7.52h5.197V44.47C11.817 42.555 5 34.624 5 25 5 13.942 13.942 5 25 5z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/baravyskocilovaphoto/"
          className="mr-4 hover:scale-110"
        >
          <svg
            className=" w-8 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13H16zm0 2h18c6.086 0 11 4.914 11 11v18c0 6.086-4.914 11-11 11H16C9.914 45 5 40.086 5 34V16C5 9.914 9.914 5 16 5zm21 6a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-12 3c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9z" />
          </svg>
        </a>
        <a
          href="mailto:info@barboravyskocilova.com"
          className="mr-4 hover:scale-110"
        >
          <svg
            className=" w-8 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path d="M44 40H4c-2.206 0-4-1.794-4-4V12c0-2.206 1.794-4 4-4h40c2.206 0 4 1.794 4 4v24c0 2.206-1.794 4-4 4zM4 10c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h40c1.103 0 2-.897 2-2V12c0-1.103-.897-2-2-2H4z" />
            <path d="M24 29.191 6.457 17.84a1 1 0 0 1 1.086-1.68L24 26.809 40.457 16.16a1 1 0 0 1 1.086 1.68L24 29.191zM6.001 34a1 1 0 0 1-.556-1.832l9-6a1 1 0 1 1 1.11 1.664l-9 6a1.004 1.004 0 0 1-.554.168zM41.999 34c-.19 0-.383-.055-.554-.168l-9-6a1 1 0 1 1 1.11-1.664l9 6A1 1 0 0 1 41.999 34z" />
          </svg>
        </a>
        <a href="tel:+420733550756" className="mr-4 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-8 fill-white"
            viewBox="0 0 128 128"
          >
            <path d="M91 0H37a11 11 0 0 0-11 11v106a11 11 0 0 0 11 11h54a11 11 0 0 0 11-11V11A11 11 0 0 0 91 0ZM32 22.69h64v76.89H32ZM37 6h54a5 5 0 0 1 5 5v5.69H32V11a5 5 0 0 1 5-5Zm54 116H37a5 5 0 0 1-5-5v-11.42h64V117a5 5 0 0 1-5 5Z" />
            <circle cx="64" cy="113.91" r="6" />
            <path d="M56.13 14.22h15.75a3 3 0 1 0 0-6H56.13a3 3 0 1 0 0 6Z" />
          </svg>
        </a>
      </div>
      {links.map((item) => (
        <Link key={item.title} href={item.link}>
          <a className="text-center text-sm">{item.title}</a>
        </Link>
      ))}
    </div>
  );
}

export default FooterContact;
