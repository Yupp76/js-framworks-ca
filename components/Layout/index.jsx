import Footer from "./Footer";
import CustomNav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <CustomNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
