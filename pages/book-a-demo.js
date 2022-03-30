import Head from "next/head";
import Header from "./shared/header";
import Footer from "./shared/Footer";
import Bookdemoform from "./shared/Bookdemoform";
function BookaDemo() {
  return (
    <div className="services container-fluid px-0">
      <Head>
        <title>Commercial Permit Design</title>
        <meta
          name="description"
          content="Generated by create next app shubham"
        />
        <link
          rel="preload"
          href="../../../public/fonts/GTWalsheimPro-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <div
        className="container form-container"
        style={{ margin: "150px auto" }}
      >
        <Bookdemoform />
      </div>
      <Footer />
    </div>
  );
}

export default BookaDemo;
