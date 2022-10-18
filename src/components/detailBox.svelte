<script lang="ts">
	import type { PlanetContent, Images, Planet } from 'src/types/Planet';

	enum Status {
		Overview = 'overview',
		Structure = 'structure',
		Geology = 'geology'
	}

	export let planet: Planet;
	let current: Status = Status.Overview;
	$: content = planet[`${current}`];
	$: image = planet.images.planet;
</script>

<div class="detailBox">
	<div class="buttons_top">
		<button
			class:selected={current === Status.Overview}
			on:click={() => {
				current = Status.Overview;
				image = planet.images.planet;
			}}><span>01</span>Overview</button
		>

		<button
			class:selected={current === Status.Structure}
			on:click={() => {
				current = Status.Structure;
				image = planet.images.internal;
			}}><span>02</span>Structure</button
		>

		<button
			class:selected={current === Status.Geology}
			on:click={() => {
				current = Status.Geology;
				image = planet.images.geology;
			}}><span>03</span>Geology</button
		>
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
			<button
				class:selected={current === Status.Overview}
				on:click={() => {
					current = Status.Overview;
					image = planet.images.planet;
				}}><span>01</span>Overview</button
			>

			<button
				class:selected={current === Status.Structure}
				on:click={() => {
					current = Status.Structure;
					image = planet.images.internal;
				}}><span>02</span>Structure</button
			>

			<button
				class:selected={current === Status.Geology}
				on:click={() => {
					current = Status.Geology;
					image = planet.images.geology;
				}}><span>03</span>Geology</button
			>
		</div>
	</div>
</div>

<style lang="scss">
	.detailBox {
		display: grid;
		grid-template-columns: repeat(12, [col-start] minmax(0, 1fr));
		gap: 20px;

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
			gap: 20px;
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
		}
	}

	button {
		display: flex;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: var(--size-fluid-2);
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

		button {
			padding: var(--size-3) var(--size-5);
			background: none;
			border-width: var(--border-size-1);

			&.selected {
				background-color: #ff3e00;
				color: white;
			}

			span {
				margin-right: var(--size-fluid-1);
			}
		}
	}
</style>
