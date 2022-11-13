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
		color: var(--md-sys-color-on-background);
	}

	dt {
		font-size: var(--font-size-0);
		font-weight: 700;
		font-family: var(--font-family-body);
		letter-spacing: var(--font-letterspacing-4);
		margin-block-start: var(--size-1);		
		opacity: 0.5;
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

		border: var(--border-size-1) solid var(--md-sys-color-outline-variant);		
	}
</style>
