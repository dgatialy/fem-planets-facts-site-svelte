<script lang="ts">
	import Header from '../components/header.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		margin-top: var(--size-fluid-4);
		gap: var(--size-fluid-5);
		padding-inline: var(--size-7);
		margin-bottom: var(--size-fluid-4);
	}
</style>
