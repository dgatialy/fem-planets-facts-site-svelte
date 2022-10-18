<script lang="ts">
	import Navigation from '../../components/Navigation.svelte';
	import Logo from './Logo.svelte';
</script>

<header>
	<Logo />
	<Navigation />
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-inline-start: var(--size-8);
		padding-inline-end: var(--size-7);		
		border-bottom: var(--border-size-1) solid var(--gray-3);
	}

	@media (max-width: 610px) {
		header {
			flex-wrap: nowrap;
			gap: var(--size-6);
		}
	}

	@media (min-width: 768px) {
		header {
			flex-wrap: nowrap;
			gap: var(--size-6);
		}
	}
</style>
