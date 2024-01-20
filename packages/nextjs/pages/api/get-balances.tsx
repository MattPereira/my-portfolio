import { Alchemy, Network } from "alchemy-sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { formatEther } from "viem";
import { WALLETS } from "~~/utils/portfolio/constants";

type WalletData = {
  name: string;
  balance: string;
};

type ResponseData = WalletData[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { network } = req.query;

  const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: network as Network,
  };
  const alchemy = new Alchemy(config);
  const balances = await Promise.all(
    WALLETS.map(async wallet => {
      const response = await alchemy.core.getBalance(wallet.address);
      const name = wallet.name;
      const balance = formatEther(BigInt(response._hex));
      return { name, balance };
    }),
  );

  res.status(200).json(balances);
}
