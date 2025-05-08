import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default HomeLayout;
