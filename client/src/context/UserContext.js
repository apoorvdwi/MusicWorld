import React, { useState, useEffect, createContext } from 'react';
import idl from '../idl.json';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import {
  Program, Provider, web3,
} from '@project-serum/anchor';

// SystemProgram is a reference to the Solana runtime!
const { SystemProgram, Keypair } = web3;

// Create a keypair for the account that will hold the GIF data.
const baseAccount = Keypair.generate();

// Get our program's id from the IDL file.
const programID = new PublicKey(idl.metadata.address);

// Set our network to devnet.
const network = clusterApiUrl('devnet');

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: 'processed',
};

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [songsList, setSongsList] = useState([]);

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      const publicKey = response.publicKey.toString();
      console.log('Connected with Public Key:', publicKey);
      setWalletAddress(publicKey);
    }
  };

  const getSongsList = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);

      console.log('Got the account', account);
      setSongsList(account.songsList);
    } catch (error) {
      console.log('Error in getSongsfList: ', error);
      setSongsList(null);
    }
  };

  useEffect(() => {
    if (walletAddress) {
      console.log('Fetching Songs list...');

      getSongsList();

      setSongsList([]);
    }
  }, [walletAddress]);

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new Provider(
      connection, window.solana, opts.preflightCommitment,
    );
    return provider;
  };

  const createSongAccount = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      console.log('ping');
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      });
      console.log('Created a new BaseAccount w/ address:', baseAccount.publicKey.toString());
      await getSongsList();
    } catch (error) {
      console.log('Error creating BaseAccount account:', error);
    }
  };

  const contextProps = {
    walletAddress,
    setWalletAddress,
    loading,
    setLoading,
    connectWallet,
  };

  return (
    <UserContext.Provider value={contextProps}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
