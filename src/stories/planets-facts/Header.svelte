<script lang="ts">
	import Navigation from './Navigation.svelte';
	import Logo from './Logo.svelte';
</script>

<header>
	<div><Logo /></div>
	<div><Navigation /></div>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-7);
		padding-inline-start: var(--size-7);
		padding-inline-end: var(--size-7);
		border-bottom: var(--border-size-1) solid var(--md-sys-color-surface-variant);
	}

	header > * {
		flex-grow: 1;
		flex-basis: calc((10rem - 100%) * 999);
		max-inline-size: 100%;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		header {
			gap: var(--size-2);
		}
		header > * {
			flex-basis: 100%;
		}
	}

	@media (max-width: 320px) {
		header {
			flex-wrap: nowrap;
			min-width: max-content;
		}
	}
</style>
