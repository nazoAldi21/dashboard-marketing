import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Layout {
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <main className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-5/6">
        <Navbar username="Fauzan" />
            {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
