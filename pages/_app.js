import "../styles/globals.css";
import Footer from "../components/header/Footer";
import Header from "../components/header/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
