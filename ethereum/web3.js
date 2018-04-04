import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamas is running.
    // console.log(window.web3.currentProvider.isMetaMask);
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* user is not running metamask
    // Influra
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/0Q0b5hO0PcY9U7qFN8IS'
    );

    web3 = new Web3(provider);
}

export default web3;
