import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="min-h-[100vh] flex flex-col">
      <Header />
      <div className="flex-1 ">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
