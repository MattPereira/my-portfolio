import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Base URL
  const baseUrl = `https://arb-mainnet.g.alchemy.com/nft/v3/${process.env.ALCHEMY_API_KEY}/getNFTsForOwner`;

  // Create a URL object
  const url = new URL(baseUrl);

  // Add query parameters
  url.searchParams.append("owner", "0x41f727fA294E50400aC27317832A9F78659476B9");
  url.searchParams.append("withMetadata", "true");
  url.searchParams.append("pageSize", "100");

  // Fetch data
  const response = await fetch(url.toString());
  const data = await response.json();

  const nftsData = data.ownedNfts.map((nft: any) => ({
    image: nft.image.originalUrl,
    description: nft.description,
    name: nft.name,
  }));

  res.status(200).json({ data: nftsData });
}
