import Image from "next/image";
import useSWR from "swr";
import { SectionContainer, SectionHeader } from "~~/components/portfolio";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Achievements() {
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-nfts`, fetcher);

  // Process the data only if it's available
  const nfts = data
    ? data.map((nft: any) => ({
        image: nft.image?.originalUrl,
        description: nft.description,
        name: nft.name,
      }))
    : [];

  return (
    <SectionContainer>
      <SectionHeader title="Achievements" />
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {Array.from(Array(10).keys()).map((_, idx) => (
            <div key={idx} className="skeleton animate-pulse bg-base-100 rounded-xl w-full h-72"></div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center">Error loading achievement NFTs</div>
      ) : (
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
      )}
    </SectionContainer>
  );
}
