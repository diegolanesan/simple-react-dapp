import React, {useState, useEffect} from 'react'
import { getBalance } from '../../scripts/sendTx'


function Balance({account}) {
    
    const [balance, setBalance] = useState("")
    
    useEffect(() => {
        

        async function fetchBalance(account) {
            const updatedBalance = await getBalance(account)
            setBalance(updatedBalance)
        }
        if(account) {
        fetchBalance(account)
        }
    }, [account])


    return (
        <> { account ? (
            <div class="flex flex-col justify-center text-center mb-6">
                <h3 class="font-bold my-4"> Your balance </h3>
                <p class="mx-2"> {balance} </p>
            </div> ) : ""
       }
       </>
    )

}

   
   

export default Balance
