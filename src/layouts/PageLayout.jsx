import Navbar from "../component/NavbarAndFooter/Navbar";
import Footer from "../component/NavbarAndFooter/Footer";

const PageLayout = ({ children, className }) => {
  return (
    <div className={className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;