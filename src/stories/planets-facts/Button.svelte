<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let selected: boolean = false;
	export let name: String = 'Button';
	export let ref: any;
	export let variant: 'default' | 'compact' = 'default';

	const dispatch = createEventDispatcher();

	function handleOnClick() {
		dispatch('onClick', {
			ref: ref
		});
	}
</script>

<button class:selected class={variant} on:click={handleOnClick}>{name}</button>

<style lang="scss">
	button {
		display: flex;
		background: none;
		font-size: var(--font-size-0);
		text-transform: uppercase;
		font-weight: var(--font-weight-7);
		line-height: var(--font-lineheight-3);
		letter-spacing: var(--font-letterspacing-4);
	}

	button.compact {
		height: 30px;
		padding: 0;

		&.selected {
			border-bottom: 4px solid var(--planet-primary);
		}
	}

	button.default {
		text-align: left;
		padding: var(--size-3) var(--size-5);

		border-width: var(--border-size-1);
		gap: var(--size-fluid-2);

		&.selected {
			background-color: var(--planet-primary);
			color: white;
		}

		&::before {
			counter-increment: section;
			content: counter(section, decimal-leading-zero);
			display: block;
			max-inline-size: 2ch;
		}
	}
</style>
