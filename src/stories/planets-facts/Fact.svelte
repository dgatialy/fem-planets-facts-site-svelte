<script lang="ts">
	import type { Fact } from '../../types/Fact';
	export const fact: Fact = {} as Fact;
	export const variant: 'row' | 'column' = 'row';
</script>

{#if fact}
	<dl class={variant}>
		<dt>{fact.term}</dt>
		<dd>{fact.definition}</dd>
	</dl>
{/if}

<style lang="scss">
	dl,
	dt {
		text-transform: uppercase;
	}

	dt {
		font-size: var(--size-fluid-1);
		font-weight: 700;
		font-family: var(--font-family-body);
	}

	.column {
		flex-direction: column;
		max-inline-size: fit-content;
		gap: var(--size-fluid-1);
	}

	.row {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: var(--size-fluid-2);
		padding: var(--size-fluid-2) var(--size-fluid-3);

		dt {
			margin-block-start: var(--size-2);
		}
	}

	dl {
		font-size: var(--size-fluid-3);
		font-family: var(--font-family-heading);
		font-weight: 600;
		line-height: var(--font-lineheight-1);
		display: flex;

		padding: var(--size-fluid-2);
		border: var(--border-size-1) solid var(--gray-3);
	}
</style>
