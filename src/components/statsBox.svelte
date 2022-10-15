<script lang="ts">
	import type { Stats } from 'src/types/Stats';
	export let data: Stats;

	/*
	
<dl>
	<dt>Rotation Time</dt>
	<dd>{data.rotation}</dd>

	<dt>Revolution Time</dt>
	<dd>{data.revolution}</dd>

	<dt>Radius</dt>
	<dd>{data.radius}</dd>

	<dt>Average Temp.</dt>
	<dd>{data.temperature}</dd>
</dl>
	*/
</script>

<div class="statsBox">
	<div>
		<dl>
			<dt>Rotation Time</dt>
			<dd>{data.rotation}</dd>
		</dl>
	</div>

	<div>
		<dl>
			<dt>Revolution Time</dt>
			<dd>{data.revolution}</dd>
		</dl>
	</div>
	<div>
		<dl>
			<dt>Radius</dt>
			<dd>{data.radius}</dd>
		</dl>
	</div>
	<div>
		<dl>
			<dt>Average Temp.</dt>
			<dd>{data.temperature}</dd>
		</dl>
	</div>
</div>

<style lang="scss">
	@media screen and (min-width: 421px) {
		.statsBox {
			dl {
				flex-direction: column;
			}
		}
	}

	@media screen and (max-width: 767px) {
		.statsBox {
			dl {
				flex-direction: row;
				justify-content: space-between;
				width: 100%;
			}
			dd {
				text-align: right;
			}
		}
	}

	@media screen and (min-width: 768px) {
		.statsBox {
			div:nth-child(1) {
				grid-column: col-start / span 3;
			}
			div:nth-child(2) {
				grid-column: 4 / span 3;
			}
			div:nth-child(3) {
				grid-column: 7 / span 3;
			}

			div:nth-child(4) {
				grid-column: 10 / -1;
			}
		}
	}

	@media screen and (max-width: 767px) {
		.statsBox div {
			grid-column: col-start / span 12;
		}
	}

	.statsBox {
		/*display: flex;
		gap: var(--size-fluid-2);*/
		display: grid;
		grid-template-columns: repeat(12, [col-start] minmax(0, 1fr));
		gap: 20px;

		div {
			grid-column: col-start / span 12;

			display: flex;
			flex-basis: 100%;
			padding: var(--size-fluid-2);
			border: var(--border-size-1) solid var(--gray-3);
		}

		dl {
			display: flex;
			align-items: stretch;
			gap: var(--size-fluid-2);
		}
	}
</style>
