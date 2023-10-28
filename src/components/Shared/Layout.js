import Footer from "./Footer";
import Navbar2 from "./Navbar2";

export default function Layout({ children }) {

  return (
    <>
      <Navbar2 />
      <main>{children}</main>
      <Footer />
    </>
  );
}
