import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { About, Achievements, Experience, Landing, Projects, Skills } from "~~/components/portfolio/sections";

// export const getServerSideProps = async () => {
//   const nftResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-nfts`);
//   // console.log("nftResponse", nftResponse);
//   const nfts = await nftResponse.json();
//   // console.log("nfts", nfts);
//   return { props: { nfts: nfts.data } };
// };

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Skills />
    </>
  );
};

export default Home;
