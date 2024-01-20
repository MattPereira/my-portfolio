import { Network } from "alchemy-sdk";
import type { GetServerSideProps } from "next";

type Balance = {
  [key: string]: string; // Dynamic keys for each network
};

type WalletData = {
  name: string;
  balances: Balance;
};

type WalletsData = WalletData[];

export const getServerSideProps: GetServerSideProps<{ wallets: WalletsData }> = async () => {
  const networks = [Network.ETH_MAINNET, Network.ARB_MAINNET, Network.OPT_MAINNET];
  const balanceMaps: Map<string, string>[] = [];

  for (const network of networks) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-balances?network=${network}`);
    const balances = await res.json();
    balanceMaps.push(new Map(balances.map((wallet: any) => [wallet.name, wallet.balance])));
  }

  // Create wallets array with dynamic network keys
  const wallets = Array.from(balanceMaps[0].keys()).map(name => {
    const walletBalances = networks.reduce((acc, network, index) => {
      // Using network names as keys
      const networkKey = network.toLowerCase(); // Convert to a string key if needed
      acc[networkKey] = balanceMaps[index].get(name) || "0";
      return acc;
    }, {} as any);

    return {
      name,
      balances: walletBalances,
    };
  });

  return { props: { wallets } };
};

export default function Page({ wallets }: { wallets: WalletsData }) {
  return (
    <>
      <div className="p-16">
        <h1 className="text-center font-cubano text-5xl">Portfolio</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
          <div>
            <h4 className="text-center text-2xl font-bold">Native ETH Balances</h4>
            <div className="overflow-x-auto">
              <table className="table text-xl">
                <thead>
                  <tr className="text-xl">
                    <th>Wallet</th>
                    {Object.keys(wallets[0].balances).map(network => (
                      <th key={network}>{network}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {wallets.map(wallet => (
                    <tr key={wallet.name}>
                      <td>{wallet.name}</td>
                      {Object.values(wallet.balances).map((balance, index) => (
                        <td key={index}>{(+balance).toFixed(4)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
