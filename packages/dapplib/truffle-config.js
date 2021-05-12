require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember modify imitate private fresh suggest'; 
let testAccounts = [
"0xf02c848e347fb4d86aff4be19a255eafd82b2b07037d62442f781f24f42cee41",
"0xb90c235275cce0acfa89621fe2056af5c40abcc68ff0db533c5ffcee935ffdaf",
"0xcef9a85f7b19250c67d15faff6369a3d58d5a879ed112fcc94b9af949f3d77db",
"0x67f85643b555ed7c125a59d53a6366d211230220695587c1a26cecf68bdda23c",
"0x73dddbdaa0ffff8285c6e2f106fac7b3285bf3ba93bb09897b5d8fdba236af25",
"0xe365deafe95f61694f30e2e2a3cee81b073236d1e6d1065a5eb72f12d43a9bf9",
"0x696eaf29c57e832b374c3ce20c02e380cc6451afe6beb4eb083b83b4909e5333",
"0x0de0b1ec225c41605395912a5358541484aae88a4dfc91137744f09cac4cb8f8",
"0x6497abe6017be7ddcee667d1b5451ec27363d7ee696f3ffba6bfb423a659d213",
"0x9a8a3c8be9ff3ab388cb51c24b14af7171cfc1435cbb447406b7b0d33e24f5a2"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
