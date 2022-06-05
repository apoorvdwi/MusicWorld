import React, { useState, useEffect, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      const publicKey = response.publicKey.toString();
      console.log('Connected with Public Key:', publicKey);
      setWalletAddress(publicKey);
    }
  };

  useEffect(() => {}, []);

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
