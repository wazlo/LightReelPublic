<template>
    <a class="button scroll" @mouseup="onMouseUp"> 
        MINT NFT
    </a>
</template>

<script>
import { computed } from 'vue'
import { useWalletStore } from '../store/WalletStore'
import { Wallet } from '../plugins/wallet'
import LightReelNFT from '../../artifacts/contracts/LightreelNFT.sol/LightReel.json'
import { ethers } from 'ethers'
export default {
    name: 'Mint Button',
    props: {
        amountSelected: {
            type: Number,
            required: false,
            default: 1
        }
    },
    setup(props) {
        const WalletStore = useWalletStore();

        const onMouseUp = async () => {
            // If the user is not connected, alert the user
            if (!WalletStore.address || !WalletStore.connected) {
                // Wallet.onConnect();
                alert("Connect Wallet to Mint NFT")
                return;
            }

            // If the user does not have a valid connection, alert them to chain their network
            if (!WalletStore.valid_connection) {
                alert("Make sure your wallet is on the correct network before minting")
                return;
            }

            // Get the address of the nft
            const nft_address = import.meta.env.VITE_NFT_ADDRESS

            // Get the signer
            const signer = Wallet.getSigner();

            // Mint Token
            const contract = new ethers.Contract(
                nft_address,
                LightReelNFT.abi,
                signer
            )

            // Ensure the contract is deployed
            const contract_deployed = await contract.deployed();

            // If the contract is deployed, alert the user and return
            if (!contract_deployed) {
                alert("Contract is not deployed")
                return;
            }

            // Get the NFT buyer address
            const buyer_address = WalletStore.address;

            // Get the amount the buyer wants
            const amount_to_buy = props.amountSelected;

            // Get the price of a single nft
            const price = await contract.PRICE();
            
            // Get the total cost buy multiplying the price by the amount wanted to buy
            const total_cost = price.mul(amount_to_buy)

            // The contract expects the value like this
            const value = {
                value: total_cost
            }

            // Mint the token and get the transaction
            const tx = await contract.mint(buyer_address, amount_to_buy, value)

            // Wait for the transaction to finish
            await tx.wait()

            // At this point the transaction was successful (woo 🥳)
        }

        return {
            WalletStore,
            onMouseUp
        }
    },
}
</script>