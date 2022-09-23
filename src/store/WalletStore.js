import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
    state: () => {
        return {
            chain_id: null,
            connected: false,
            network_id: null,
            fetching: null,
            accounts: null,
            provider: {},
            web3_modal: {}
        }
    },
    getters: {
        address: (state) => !!state.accounts ? state.accounts[0] : null,
        valid_connection: (state) => {
            // Check if the env is on production build
            const is_production = import.meta.env.PROD;
            let valid = true;

            // Ensure the chain_id and network_id matches up
            if (is_production) {
                valid = (state.chain_id == 1 || state.chain_id == '0x1') &&
                        (state.network_id == 'homestead' || state.network_id == 'ethereum')
            }
            else {
                valid = (state.chain_id == 4 || state.chain_id == '0x4') &&
                        (state.network_id == 'rinkeby')
            }

            // Ensure connected flag is set and the wallet address is set
            valid = valid && state.connected && !!state.address

            return valid;
        }
    },
})