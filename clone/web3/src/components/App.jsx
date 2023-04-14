import React from "react";
import { useState,useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import Widgets from "./Widgets.jsx";
import "./App.css";

function App() {

  const [currentAccount, setCurrentAccount] = useState('');
  const [correctNetwork, setCorrectNetwork] = useState(false);

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId'})
      console.log('Connected to chain:' + chainId)

      const rinkebyChainId = '0x4'

      if (chainId !== rinkebyChainId) {
        alert('You are not connected to the Rinkeby Testnet!')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }

  // Checks if wallet is connected to the correct network
  const checkCorrectNetwork = async () => {
    const { ethereum } = window
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)

    const rinkebyChainId = '0x4'

    if (chainId !== rinkebyChainId) {
      setCorrectNetwork(false)
    } else {
      setCorrectNetwork(true)
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    connectWallet();
    checkCorrectNetwork();
  });



  return (
    <div className="bg-slate-50 flex justify-center pl-10">
    {currentAccount === '' ? (
      // <button
      // className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
      // onClick={connectWallet}
      // >
      // Connect Wallet
      // </button>
      <div className="flex app bg-gradient-to-r from-slate-800 to-slate-900 flex w-full"> {/* Body Color */}
        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
      </div>
      
      ) : correctNetwork ? (
        <div className="app">
          {/* <Sidebar /> */}
          {/* <Feed /> */}
          {/* <Widgets /> */}
        </div>
      ) : (
      <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
      <div>----------------------------------------</div>
      <div>Please connect to the Rinkeby Testnet</div>
      <div>and reload the page</div>
      <div>----------------------------------------</div>
      </div>
    )}
    </div>

  );
}

export default App;
