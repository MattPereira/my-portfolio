import Image from "next/image";
import { SectionContainer, SectionHeader } from "~~/components/portfolio";

export function Achievements({ nfts }: any) {
  return (
    <SectionContainer>
      <SectionHeader title="Achievements" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 rounded-xl">
        {nfts.map((nft: any, idx: number) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center border border-base-content rounded-xl p-3 bg-base-200"
          >
            <Image width={500} height={500} src={nft.image} alt={nft.name} className="w-48 h-48" />
            <p className="text-xl">{nft.name}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
