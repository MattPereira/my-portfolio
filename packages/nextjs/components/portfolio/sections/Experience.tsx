import Image from "next/image";
import { SectionContainer, SectionHeader } from "~~/components/portfolio";

const experiences = [
  {
    id: 2,
    title: "On Chain Developer",
    image: "/buidlguidl.svg",
    description: (
      <>
        Built decentralized applications with Scaffold ETH including Speedrun Chainlink, Vaults of Fortune, and upDev.
        Currently, a member of the Sanctum Cohort stream working on building Defi Challenges teach developers how to
        integrate with protocols including Sommolier, Yearn, and Chainlink.
      </>
    ),
  },
  {
    id: 1,
    title: "Full Stack Web Developer",
    image: "/hfla.png",
    description: (
      <>
        Hack for LA brings together civic-minded volunteers to build digital products, programs and services with
        community partners and local government to address issues in our LA region and to share these effective
        processes, practices, and code with the larger civic tech community.
      </>
    ),
  },

  {
    id: 3,
    title: "Peer Mentor",
    image: "/springboard.png",
    description:
      "After earning my certification from Springboard's full stack software engineering bootcamp, I volunteered as a peer mentor helping students overcome obstacles and achieve their goals.",
  },
];

export function Experience() {
  return (
    <SectionContainer bgcolor="">
      <SectionHeader title="Experience" />

      <div className="flex flex-col xl:flex-row lg:space-x-8">
        {experiences.map(exp => (
          <div key={exp.id} className="flex-1 mb-5">
            <div className="bg-white p-10 h-36 flex items-center justify-center rounded-2xl mb-5 overflow-hidden">
              <Image width={300} height={200} src={exp.image} alt={exp.title} />
            </div>
            <h5 className="text-3xl font-inter font-bold mb-2">{exp.title}</h5>
            <p className="text-xl">{exp.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
