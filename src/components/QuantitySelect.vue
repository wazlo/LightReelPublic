<template>
	<div class="qty">
		<vue-number-input
			v-model="data"
			:min="1"
			:max="Infinity"
			inline
			center
			controls
			@update:model-value="onChange"
		>
		</vue-number-input>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	name: 'QuantitySelect',
	emits: ['change'],
	setup(_, { emit }) {
		const data = ref(1);
		const onChange = (new_val) => {
			data.value = new_val
			emit('change', new_val)
		}

		return {
			data,
			onChange
		}
	},
}
</script>
<style scoped>

</style>