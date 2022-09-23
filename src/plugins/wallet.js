import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWalletStore } from '../store/WalletStore';
import { ethers } from "ethers";

export const Wallet = {

    onConnect: async () => {
        const WalletStore = useWalletStore();

        WalletStore.$reset();
        WalletStore.fetching = true;

        const web3_modal = Wallet.initWeb3Modal();
        const instance = await web3_modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        Wallet.subscribeWallet(instance, provider);

        const network = await provider.getNetwork();
        const accounts = await provider.listAccounts();
        const network_id = network.name
        const chain_id = network.chainId

        WalletStore.$patch({
            chain_id: chain_id,
            accounts: accounts,
            network_id: network_id,
            fetching: false,
            connected: true,
            provider: provider,
            web3_modal: instance
        });
    },

    getProviderOptions: () => {
        const provider_options = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: import.meta.env.VITE_INFURA_PROJECT_ID
                }
            }
        }

        return provider_options;
    },

    initWeb3Modal: () => {
        return new Web3Modal({
            network: 'mainnet',
            cacheProvider: true,
            providerOptions: Wallet.getProviderOptions()
        });
    },

    initWeb3: (provider) => {
        const web3 = new Web3(provider);

        web3.eth.extend({
            methods: [{
                name: "chainId",
                call: "eth_chainId",
                outputFormatter: web3.utils.hexToNumber
            }]          
        });

        return web3;
    },

    subscribeWallet: (web3_modal_instance, provider) => {
        if (!web3_modal_instance || !web3_modal_instance.on) return

        const WalletStore = useWalletStore();

        web3_modal_instance.on("disconnect", () => {
            console.log('[LOG]: Wallet Disconnected')
            WalletStore.$reset();
        });
        web3_modal_instance.on("accountsChanged", (accounts) => {
            console.log('[LOG]: Accounts Changed')
            WalletStore.accounts = accounts
        });
        web3_modal_instance.on("chainChanged", async (chain_id) => {
            console.log('[LOG]: Chain ID changed');

            const p = new ethers.providers.Web3Provider(web3_modal_instance);
            const n = await p.getNetwork();

            WalletStore.chain_id = chain_id;
            WalletStore.network_id = n.name;
        });
    },

    getSigner() {
        const WalletStore = useWalletStore();

        const instance = WalletStore.web3_modal;
        if (!instance) return;

        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();

        return signer
    }
}