import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  mainnet,
  sepolia,
  polygon,
  optimism,
  arbitrum,
  holesky,
  bsc,
} from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId =
  process.env.NEXT_PUBLIC_PROJECT_ID || "YOUR_PROJECT_ID";

if (!projectId) {
  console.warn(
    "Project ID is not defined. Consider getting one from https://cloud.reown.com"
  );
}

// Define networks you want to support
export const networks = [
  mainnet,
  holesky,
  sepolia,
  polygon,
  optimism,
  arbitrum,
  bsc,
];

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
