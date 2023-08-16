import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>SeamlessClaims</title>
        <meta
          name="description"
          content="Seamlessclaims is an insurance tech company"
        />
        <link rel="icon" href="/img/fav-logo.svg" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        title=" Why should you use Seamlessclaims">
        Seamlessclaims implifies insurance-related tasks, providing a positive experience for vehicle owners
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle >
        Join the waitlist.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;