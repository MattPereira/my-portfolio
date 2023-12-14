import Image from "next/image";
import { SectionContainer, SectionHeader } from "~~/components/portfolio";

const skills = [
  {
    category: "Languages",
    items: [
      { title: "JavaScript", filename: "JavaScript" },
      { title: "Typescript", filename: "TypeScript" },
      { title: "Solidity", filename: "Solidity" },
      { title: "Python", filename: "Python-Dark" },
      { title: "Markdown", filename: "Markdown-Dark" },
    ],
  },
  {
    category: "FrontEnd",
    items: [
      { title: "React", filename: "React-Dark" },
      { title: "Nextjs", filename: "NextJS-Dark" },
      { title: "MaterialUI", filename: "MaterialUI-Dark" },
      { title: "Tailwind", filename: "TailwindCSS-Dark" },
      { title: "Bootstrap", filename: "Bootstrap" },
    ],
  },
  {
    category: "BackEnd",
    items: [
      {
        title: "Express",
        filename: "ExpressJS-Dark",
      },
      {
        title: "Django",
        filename: "Django",
      },
      {
        title: "Flask",
        filename: "Flask-Dark",
      },
      {
        title: "Postgres",
        filename: "PostgreSQL-Dark",
      },
      {
        title: "MongoDB",
        filename: "MongoDB",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      { title: "Git", filename: "Git" },
      { title: "Github", filename: "Github-Dark" },
      { title: "Docker", filename: "Docker" },
      { title: "Linux", filename: "Linux-Dark" },
      { title: "VSCode", filename: "VSCode-Dark" },
    ],
  },
];

export function Skills() {
  return (
    <SectionContainer>
      <SectionHeader title="Skills" />
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 font-gothic text-xl">
        {skills.map(({ category, items }) => (
          <div key={category} className="mb-5 text-start ">
            <div>
              <h5 className="text-3xl font-inter font-bold mb-10">{category}</h5>
              <ul className="text-2xl">
                {items.map(item => (
                  <li key={item.title} className="text-gothic flex gap-4 mb-6 items-center">
                    <Image
                      width="50"
                      height="50"
                      alt={item.title}
                      src={`https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/${item.filename}.svg`}
                    />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
