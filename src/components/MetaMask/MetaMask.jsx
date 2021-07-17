import * as React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { MetaMaskLogo } from './MetaMaskLogo'

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

export const MetaMask = () => {

    const {
        account,
        activate,
        connector,
        error,
    } = useWeb3ReactCore()
    
    const [activatingConnector, setActivatingConnector] = React.useState();

    const handleConnectWallet = React.useCallback(() => {
        if (account) {
            window.console.log('[MetaMask] - successfully connected');
        } else {
            setActivatingConnector(injected);
            activate(injected);
        }
    }, [account, activate]);

    React.useEffect(() => {
        if (activatingConnector &&
            activatingConnector === connector &&
            account
        ) {
            window.console.log('[MetaMask] - successfully connected');
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector, account]);

    React.useEffect(() => {
        if (!!error) {
            window.console.error('[MetaMask] - something went wrong!');
        }

    }, [error]);

    return (
        <div class="flex flex-col text-center items-center my-5">
            <MetaMaskLogo
                onClick={handleConnectWallet}
            />
            {account ? (
                <><span class="my-4 font-bold">Account address</span> <span>{account}</span></>
            ) : (
                <span class="my-5">No connected accounts</span>
            )}
        </div>
    );
};
