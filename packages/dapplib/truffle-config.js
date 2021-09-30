require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture street cruise situate clutch hundred light army gesture'; 
let testAccounts = [
"0xc88ea77e3cc7a6f3584d5526a7f3698528b18ce2556dd854f22d3d13815287d5",
"0x0ed51482d12fae46aa2c253afa7774552326dc3f08a8b73f0985d22238364868",
"0xe15b78460134b66ee3f21ca970c935e843a499a933ac9313bfbe5fac153c0c05",
"0xc129f7c224355f01bc0d1dca04a7946c4c66a22ba9ceaf9ce51551e72af9ce6d",
"0xd6bb38a19ac1ccdb1bb46ebc2cef9e850ee00a87b2c12dcc8cd5eb7334644acc",
"0xd3b621379f78c38c66d79bf927500282c16998c9dca9acb4b590e5f00d03fc8c",
"0x0623902650ddf2d298176453b500309adf8266f1b377c87858259882888247da",
"0x92f4c5f9d90d59ac440bea20de9b717fee333367553472874fae7d1bdb4fe24f",
"0x3c12ef4436c5c48b7be265bc131cd5ff8ca8d98bc3a522e9500402e7976b95f0",
"0xd183751517c806a1b05deb0aea60aefd5d0109633247eb924f49b65b9f81e851"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


