<template>
    <a 
        class="wallet"
        @click.prevent="onConnect"
    >
        {{ isConnected ? 'Connected' : 'Connect Wallet' }} 
    </a>
</template>

<script>
import { Wallet } from '../plugins/wallet';
import { useWalletStore } from '../store/WalletStore';
import { computed } from 'vue'
export default {
    setup() {
        const WalletStore = useWalletStore()

        const isConnected = computed(() => {
            return !!WalletStore.address
        })

        const onConnect = async () => {
            await Wallet.onConnect()
        }
       
        return {
            onConnect,
            WalletStore,
            isConnected
        }
    },
}
</script>