import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const address = "0x41f727fA294E50400aC27317832A9F78659476B9";
    // Base URL
    const url = `https://arb-mainnet.g.alchemy.com/nft/v3/${process.env.ALCHEMY_API_KEY}/getNFTsForOwner?owner=${address}&withMetadata=true`;

    // Fetch data
    const response = await fetch(url);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`API responded with status code ${response.status}`);
    }

    const data = await response.json();
    console.log("data", data.ownedNfts[0]);
    const nfts = data.ownedNfts;

    // MAY BE CAUSING ERROR WITH SERVERLESS FUNCTION DEPLOYED TO VERCEL
    // Process the data
    // const nfts = data.ownedNfts.map((nft: any) => ({
    //   image: nft.image?.originalUrl,
    //   description: nft.description,
    //   name: nft.name,
    // }));

    res.status(200).json(nfts);
  } catch (error) {
    // Log the error for server-side debugging
    console.error("Failed to fetch NFT data:", error);

    // Send a generic error response to the client
    res.status(500).json({ error: "Failed to fetch NFT data" });
  }
}
