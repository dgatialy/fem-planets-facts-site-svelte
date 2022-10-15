<script lang="ts">
	import Navigation from './navigation.svelte';
</script>

<header>
	<div class="logo">THE PLANETS</div>
	<Navigation />
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-inline-start: var(--size-8);
		padding-inline-end: var(--size-7);
		height: var(--size-10);
		border-bottom: var(--border-size-1) solid var(--gray-3);
	}

	.logo {
		font-family: 'Antonio';
		font-style: normal;
		font-weight: 600;
		font-size: 28px;
		line-height: 36px;
		letter-spacing: -1.05px;
		text-transform: uppercase;
		margin-bottom: var(--size-2)
	}

	@media screen and (max-width: 768px) {
		header {
			flex-direction: column;
			justify-content: center;
			margin-top: var(--size-7);
			margin-bottom: var(--size-6);
			gap: 0;

			.logo {
				display: flex;
				justify-content: center;
			}
		}
	}
	@media screen and (max-width: 400px) {
		header {
			flex-direction: row;
			justify-content: space-between;
			padding-inline-start: var(--size-5);
			padding-inline-end: var(--size-5);
			margin-top: 0;
			margin-bottom: var(--size-3);
		}
	}
</style>
