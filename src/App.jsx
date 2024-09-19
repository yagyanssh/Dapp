import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import './App.css'

import '@solana/wallet-adapter-react-ui/styles.css';
import { RequestAirdrop } from './RequestAirdrop';
import { ShowBalance } from './ShowBalance';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';

function App() {


  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div >
              Welcome to my Dapp
            </div>
            <WalletMultiButton />
            {/* <RequestAirdrop /> */}
            {/* <ShowBalance /> */}
            {/* <SendTokens /> */}
            <SignMessage />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>


    </>
  )
}

export default App
