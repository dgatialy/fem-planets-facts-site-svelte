<script lang="ts">
	import type { PlanetContent, Images, Planet } from 'src/types/Planet';
	import Button from '../stories/planets-facts/Button.svelte';

	enum Status {
		Overview = 'overview',
		Structure = 'structure',
		Geology = 'geology'
	}

	export let planet: Planet;
	let current: Status = Status.Overview;
	$: content = planet[`${current}`];
	$: image = planet.images.planet;

	function handleMessage(event: CustomEvent) {
		current = event.detail.ref;
		switch (event.detail.ref) {
			case Status.Overview:
				image = planet.images.planet;
				break;
			case Status.Structure:
				image = planet.images.internal;
				break;
			case Status.Geology:
				image = planet.images.geology;
				break;
		}
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
	<div class="image">
		<div>
			<img src={image} alt="x" />
		</div>
	</div>

	<div class="description">
		<div class="text">
			<h1 class="display-1">{planet.name}</h1>

			<p>{content.content}</p>
			<small>Source: {content.source}</small>
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
		.image {
			grid-column: col-start / span 8;
		}

		.description {
			grid-column: 9 / -1;
		}
	}

	@media screen and (max-width: 767px) {
		.image {
			grid-column: col-start / span 12;
			img {
				min-width: 100%;
				max-height: 40vh;
			}
		}

		.description {
			grid-column: col-start / span 12;
			display: grid;
			grid-template-columns: repeat(12, [col-start] minmax(0, 1fr));
			gap: var(--size-4);
			align-items: center;
			.text {
				grid-column: col-start / span 6;
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
				box-shadow: inset 0 -1px 0 var(--gray-3);
				height: 1px;
				width: 100vw;
				left: calc(var(--size-7) * -1);
				bottom: 0;
				z-index: -1;
			}
		}
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: var(--size-fluid-3);
	}

	.image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.buttons {
		flex-direction: column;
		gap: var(--size-fluid-1);
		margin-top: var(--size-fluid-2);
		counter-reset: section;
	}
</style>
