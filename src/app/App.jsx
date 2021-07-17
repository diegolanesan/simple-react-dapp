import React, {useState, useEffect} from 'react'
import Header from '../components/Header/Header';
import GasPrices from '../components/GasPrices/GasPrices';
import TransactionCreator from '../components/TransactionCreator/TransactionCreator';
import {MetaMask} from '../components/MetaMask/MetaMask';
import { Web3ProviderWrapper } from '../utils/providers';
import { getCurrentGasPrices } from '../scripts/getPrices'
require('dotenv').config()


function App() {

  const [gasPrices, setGasPrices] = useState({low: 0, medium: 0, high: 0})
    
    useEffect(() => {
        async function currentGasPrices() {
            const currentPrices = await getCurrentGasPrices()
            setGasPrices(currentPrices)
        }  
        currentGasPrices()
    }
    , [])

    return (
    <Web3ProviderWrapper>
      <div class="w-full py-0 mx-auto h-screen bg-grey font-lato sm:py-10">
        <div class="flex flex-col items-center sm:w-2/5 w-full mx-auto rounded-xl py-16" style={{backgroundColor: 'white'}}>
          <Header />
          <GasPrices gasPrices={gasPrices} />
          <MetaMask />
          <TransactionCreator gasPrices={gasPrices}/>
        </div>
      </div>
    </Web3ProviderWrapper> 
  )
}

export default App;
