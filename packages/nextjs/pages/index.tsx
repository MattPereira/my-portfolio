import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { Landing } from "~~/components/portfolio/Landing";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <Landing />
    </>
  );
};

export default Home;
