import { Link, SectionContainer, SectionHeader } from "~~/components/portfolio";

export function About() {
  return (
    <SectionContainer>
      <SectionHeader title="About" />

      <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 font-gothic text-xl">
        <div className="flex-1 mb-5">
          <h5 className="text-3xl font-inter font-bold mb-2">Past</h5>
          <p>
            My journey as a programmer started with a full stack software engineering bootcamp organized by{" "}
            <Link href="https://www.springboard.com/landing/software-engineering-career-track/" text="Springboard" />.
            After graduating, I stuck around as a peer mentor helping students learn the fundamentals of web
            development. I also joined <Link href="https://www.hackforla.org/" text="Hack for LA" /> as a volunteer
            software engineer contributing to open source projects including{" "}
            <a
              className="text-accent font-semibold underline"
              href="https://www.hackforla.org/projects/civic-tech-jobs"
            >
              Civic Tech Jobs
            </a>
            , where I learned to collaborate with other developers, designers, and project managers.
          </p>
        </div>
        <div className="flex-1 mb-5">
          <h5 className="text-3xl font-inter font-bold mb-2">Present</h5>
          <p>
            I recently joined the{" "}
            <a className="text-accent font-semibold underline" href="https://buidlguidl.com/">
              Buidl Guidl
            </a>{" "}
            community where we create products, prototypes, and tutorials to enrich the web3 ecosystem. My first
            creation was <Link text="Speedrun Chainlink" href="https://speedrun-chainlink.vercel.app/" />, a
            beginner&apos;s guide to implimenting Chainlink products with smart contracts. Building on top of what I
            learned, I then shipped <Link text="Vaults of Fortune" href="https://vaults-of-fortune.vercel.app/" />.
            After presenting my projects to the community, I was fortunate enough to earn a stream with the{" "}
            <Link text="Sanctum Cohort" href="https://sanctum.buidlguidl.com/" />
          </p>
        </div>
        <div className="flex-1 mb-5">
          <h5 className="text-3xl font-inter font-bold mb-2">Future</h5>
          <p>
            I am starting to compete in hackathons learning to collaborate in fast paced environments. My first
            hackathon entry was <Link text="upDev" href="https://updev-v1.vercel.app/" />, a universal profile for
            developers built with LUKSO . Additionally, I am starting to work on the offical{" "}
            <Link
              href="https://github.com/scaffold-eth/Scaffold-ETH-DeFi-Challenges"
              text="Scaffold Eth Defi Challenges"
            />{" "}
            where we are creating tutorials to help devs learn how to build adaptors that connect ERC-4626 vaults with
            the larger Defi ecosystem.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
