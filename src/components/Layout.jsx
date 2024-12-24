import Navbar from "./Navbar";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar";
import ScrollToTopButton from "./ScrollToTop";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainNavbar />
      
      <main className="flex-grow   ">{children}</main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
