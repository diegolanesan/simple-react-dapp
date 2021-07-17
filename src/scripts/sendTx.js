require('dotenv').config()
const axios = require('axios')
const EthereumTx = require('ethereumjs-tx')
const Web3 = require('web3')

// Web3 instance
const web3 = new Web3(`https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_ACCESS_TOKEN}`)

const destinationAddress = process.env.REACT_APP_DESTINATION_WALLET_ADDRESS
const privateKey = new Buffer.from(process.env.REACT_APP_WALLET_PRIVATE_KEY, 'hex')

export async function getBalance(account) {
    const balance = await web3.eth.getBalance(account)
    return web3.utils.fromWei(balance, 'ether')

}

export async function createTransaction(amount, account, gasPrices) {
    
    const gas = gasPrices.high * 1.10
   // Getting the transaction number 
    web3.eth.getTransactionCount(account, (err , txCount) => {
        
        let transaction = {
            to: destinationAddress,
            value: web3.utils.toHex(web3.utils.toWei(String(amount) || '0', 'ether')),
            gasPrice: web3.utils.toHex(web3.utils.toWei(String(gas), 'gwei')),
            gasLimit: 21000,
            nonce: web3.utils.toHex(txCount),
            // Issues with nonce and gasPrice

        }
    
    
    const tx = new EthereumTx(transaction)

    // Signing the transaction
    tx.sign(privateKey)


    const serializedTx = tx.serialize().toString('hex')
   
    web3.eth.sendSignedTransaction('0x' + serializedTx)
    .on('receipt', console.log)
})

}

