<script lang="ts">
	import { Status } from '../../types/Planet';
	import type { Images } from '../../types/Planet';

	export let current: Status = Status.Overview;
	export let images: Images;
</script>

<div class="gallery">
	<img
		src={images.planet}
		alt="Shows the surface of the planet."
		class:visible={current === Status.Overview || current === Status.Geology}
	/>
	<img
		src={images.internal}
		alt="Shows the structure of the planet."
		class:visible={current === Status.Structure}
	/>
	<img
		src={images.geology}
		alt="Shows the geology of the planet."
		class="pin"
		class:visible={current === Status.Geology}
	/>
</div>

<style lang="scss">
	@media screen and (max-width: 767px) {
		.gallery {
			grid-column: col-start / end !important;
		}
	}

	.gallery {
		grid-column: col-start / span 7;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: var(--size-8);
		aspect-ratio: 1;
		align-self: center;

		justify-self: center;
		max-height: 500px;

		img {
			display: none;
			position: relative;
			object-fit: contain;
			max-width: 100%;
			max-height: 100%;

			&.visible {
				display: block;
			}

			&.pin {
				position: absolute;
				width: 18%;
				top: 65%;
			}
		}
	}
</style>
