import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { About, Experience, Landing, Projects, Skills } from "~~/components/portfolio/sections";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </>
  );
};

export default Home;
