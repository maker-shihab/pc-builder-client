import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-900 text-center text-white">
        <div className="p-4 text-center">
          ©2023 Copyright
          <Link
            target="blank"
            className="text-whitehite"
            href="https://pc-builder96.io/"
          >
           &nbsp; PC-Builder96
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
