// import type { NextPage } from "next";
import type { InferGetStaticPropsType } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { About, Achievements, Experience, Landing, Projects, Skills } from "~~/components/portfolio/sections";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-nfts`);
  const nfts = await res.json();
  return { props: { nfts: nfts.data } };
};

export default function Page({ nfts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <MetaHeader />
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Achievements nfts={nfts} />
      <Skills />
    </>
  );
}
