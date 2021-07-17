import React, {useState, useEffect} from 'react'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import {createTransaction} from '../../scripts/sendTx'
import Balance from '../Balance/Balance';


function TransactionCreator({gasPrices}) {
    const {account} = useWeb3ReactCore()
    const [isTxLoading, setIsTxLoading] = React.useState(false)
    const [amount, setAmount] = useState('')
    const [executedTxId, setExecutedTxId] = React.useState(undefined)
    const [address, setAddress] = React.useState('')


    const handlePrepareTransaction = async (e) => {
        e.preventDefault()
        createTransaction(amount, account, gasPrices)
    }

    return (
        <>
        <div>
            <Balance account={account} />
            <h3 class="text-center text-2xl font-bold mb-5">Send some eth!</h3>
            <form>
                <input class="border p-2 rounded-xl mx-4" 
                type="text" value={amount} placeholder="Enter amount to send" 
                onChange={(e) => setAmount(e.target.value)}/>
                <button class="p-2 px-4 rounded-xl bg-blue-900 text-white hover:bg-black" 
                type="submit" onClick={handlePrepareTransaction}> Send </button>
            </form>
        </div>

            {executedTxId ? (
                <div>
                    <a href={`https://rinkeby.etherscan.io/tx/${executedTxId}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    > 
                        {`https://rinkeby.etherscan.io/tx/${executedTxId}`}
                    </a>
                </div>
            ) : null }
            {isTxLoading ? (
                <span> Loading...</span>
            ) : null }
        </>
    )
}


    export default TransactionCreator
