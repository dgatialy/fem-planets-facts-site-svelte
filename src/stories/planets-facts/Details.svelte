<script lang="ts">
	import { Status } from '../../types/Planet';
	import Gallery from './Gallery.svelte';
	import type { PlanetContent, Planet } from 'src/types/Planet';
	import Button from './Button.svelte';

	export let planet: Planet;
	let current: Status = Status.Overview;
	$: content = planet[current as keyof Planet] as PlanetContent;
	$: images = planet.images;

	function handleMessage(event: CustomEvent) {
		current = event.detail.ref;
	}
</script>

<div class="detailBox">
	<div class="buttons_top">
		<Button
			selected={current === Status.Overview}
			name={Status.Overview}
			ref={Status.Overview}
			variant="compact"
			on:onClick={handleMessage}
		/>
		<Button
			selected={current === Status.Structure}
			name={Status.Structure}
			ref={Status.Structure}
			variant="compact"
			on:onClick={handleMessage}
		/>
		<Button
			selected={current === Status.Geology}
			name={Status.Geology}
			ref={Status.Geology}
			variant="compact"
			on:onClick={handleMessage}
		/>
	</div>
	<Gallery {images} {current} />
	<div class="description">
		<div class="text">
			<h1 class="display-1">{planet.name}</h1>

			<p>{content.content}</p>
			<span class="source"
				>Source: <a href={content.source} target="_blank">Wikipedia</a><span
					class="source__icon"
				/></span
			>
		</div>
		<div class="buttons">
			<Button
				selected={current === Status.Overview}
				name={Status.Overview}
				ref={Status.Overview}
				on:onClick={handleMessage}
			/>
			<Button
				selected={current === Status.Structure}
				name={Status.Structure}
				ref={Status.Structure}
				on:onClick={handleMessage}
			/>
			<Button
				selected={current === Status.Geology}
				name={Status.Geology}
				ref={Status.Geology}
				on:onClick={handleMessage}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	.detailBox {
		display: grid;
		grid-template-columns: repeat(12, [col-start] minmax(0, 1fr));
		gap: var(--size-4);

		& > * {
			grid-column: col-start / span 12;
		}
	}

	@media screen and (min-width: 768px) {
		.description {
			grid-column: 9 / -1;
		}
	}

	@media screen and (max-width: 767px) {
		.description {
			grid-column: col-start / span 12;
			display: grid;
			grid-template-columns: repeat(12, [col-start] minmax(0, 1fr));
			gap: var(--size-4);

			.text {
				grid-column: col-start / span 6;
				color: var(--md-sys-color-on-background);
			}
			.buttons {
				grid-column: 8 / span 7;
			}
		}
	}

	@media screen and (max-width: 500px) and (orientation: portrait) {
		.buttons {
			display: none;
		}

		.detailBox {
			grid-template-rows: auto 1fr auto;
		}

		.description .text {
			grid-column: col-start / -1;
		}
	}

	@media screen and (min-width: 500px) {
		.buttons_top {
			display: none;
		}
		.buttons {
			display: flex;
		}
	}

	@media screen and (max-width: 500px) {
		.buttons_top {
			display: flex;
			position: relative;
			justify-content: space-between;
			gap: var(--size-3);

			&::after {
				content: '';
				position: absolute;
				box-shadow: inset 0 -1px 0 var(--md-sys-color-surface-variant);
				height: 1px;
				width: 100vw;
				left: calc(var(--size-7) * -1);
				bottom: 0;
				z-index: 0;
			}
		}
	}

	.source {
		opacity: 0.5;
		display: flex;
		gap: var(--size-1);
		align-items: baseline;

		a {
			color: inherit;
			text-decoration: underline;
			font-weight: 700;
		}
	}

	.source__icon {
		display: inline-block;
		width: 12px;
		height: 12px;
		mask: url('assets/icon-source.svg') no-repeat center;
		background-color: var(--md-sys-color-on-surface);
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: var(--size-fluid-3);
	}

	.buttons {
		flex-direction: column;
		gap: var(--size-fluid-1);
		margin-top: var(--size-fluid-2);
		counter-reset: section;
	}
</style>
