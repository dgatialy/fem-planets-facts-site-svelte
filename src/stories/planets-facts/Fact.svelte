<script lang="ts">
	import type { Fact } from '../../types/Fact';
	export let data: Fact = {} as Fact;
</script>

{#if data}
	<dl>
		<dt>{data.term}</dt>
		<dd>{data.definition}</dd>
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
		margin-block-start: var(--size-1);
	}
	dl {
		font-size: var(--size-fluid-3);
		font-family: var(--font-family-heading);
		font-weight: 600;
		line-height: var(--font-lineheight-1);
		display: flex;
		flex-basis: 100%;

		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: var(--size-fluid-2);
		padding: var(--size-fluid-2) var(--size-fluid-3);

		gap: var(--size-fluid-2);

		border: var(--border-size-1) solid var(--gray-3);
	}
</style>
