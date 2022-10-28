<script lang="ts">
	import type { Fact } from '../../types/Fact';
	import StyledFact from './Fact.svelte';
	export let facts: Fact[];
</script>

{#if facts}
	<div class="facts">
		{#each facts as fact}
			<StyledFact data={{ ...fact }} />
		{/each}
	</div>
{/if}

<style lang="scss">
	@media screen and (min-width: 768px) {
		.facts :global(dl) {
			flex-direction: column;
			gap: var(--size-fluid-1);
			align-items: flex-start;
		}
	}

	@media screen and (min-width: 768px) {
		.facts :global(dl) {
			&:nth-child(1) {
				grid-column: col-start / span 3;
			}
			&:nth-child(2) {
				grid-column: 4 / span 3;
			}
			&:nth-child(3) {
				grid-column: 7 / span 3;
			}

			&:nth-child(4) {
				grid-column: 10 / -1;
			}
		}
	}

	@media screen and (max-width: 767px) {
		.facts :global(dl) {
			grid-column: col-start / span 12;
		}
	}

	.facts {
		display: grid;
		grid-template-columns: repeat(12, [col-start] minmax(0, 1fr));
		gap: 20px;

		:global(dl) {
			grid-column: col-start / span 12;
			display: flex;
			flex-basis: 100%;
		}
	}
</style>
