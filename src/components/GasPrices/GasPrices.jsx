import React, {useState, useEffect} from 'react'


function GasPrices({gasPrices}) {

    return (
        <div>
            <h2 class="text-center font-bold my-4 text-2xl"> Current gas prices </h2>
            <div class="w-full flex flex-row justify-center">
                <div class="p-4">
                    <p class="uppercase"> <span class="font-bold text-xl text-green-500"> {gasPrices.low} </span> Low </p>
                </div>
                <div class="p-4">
                    <p class="uppercase"> <span class="font-bold text-xl text-yellow-500"> {gasPrices.medium} </span> Medium </p>
                </div>
                <div class="p-4">
                    <p class="uppercase"> <span class="font-bold text-xl text-red-500"> {gasPrices.high} </span> High </p>
                </div>
            </div>
        </div>
    )
}



export default GasPrices
