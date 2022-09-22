import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container px-4 py-6 mx-auto md:px-6 md:py-12 md:w-9/12 sm:w-full">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
