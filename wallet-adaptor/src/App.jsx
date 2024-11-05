import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import {Airdrop} from './airdrop';
function App() {

  return (
    <>
    {/* these are providers*/}
            <ConnectionProvider endpoint={"https://api.devnet.solana.com"}> {/*here we need to place the RPC endpoint for the blockchain provider */}
            <WalletProvider wallets={[]} autoConnect> {/*this provider will identify your wallet you are using, and empty array will automatically identify your wallet available in the browser */}
                <WalletModalProvider>
                  <WalletMultiButton/> {/*this component is for connect button thing */} 
                 <br></br>
                  <WalletDisconnectButton/> {/*this is for disconnecting the wallet */}
      <Airdrop/>
      </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </>
  )
}

export default App
