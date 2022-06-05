import React, { useContext, useEffect } from 'react';
import Container from './components/Container';
import { UserContext } from './context/UserContext';
import './App.scss';

const App = () => {
  const userContext = useContext(UserContext);
  const { setWalletAddress } = userContext;

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana && solana.isPhantom) {
        console.log('Phantom wallet found!');
        const response = await solana.connect({ onlyIfTrusted: true });
        const publicKey = response.publicKey.toString();
        console.log('Connected with Public Key:', publicKey);

        setWalletAddress(publicKey);
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    onLoad();
    // window.addEventListener('load', onLoad);
    // return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="App">
      <Container />
    </div>
  );
};

export default App;
