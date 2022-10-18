<script lang="ts">
	import Navigation from 'src/components/Navigation.svelte';
	import Header from '../../stories/planets-facts/Header.svelte';
	import DetailBox from '../../components/detailBox.svelte';
	import { default as StatsData } from '../../components/statsBox.svelte';

	import type { Planet } from 'src/types/Planet';
	import type { Stats } from 'src/types/Stats';
	let planets: Planet[];
	let stats: Stats;
	/*PlanetStore.subscribe((data) => {
		planets = data;
		const { radius, revolution, rotation, temperature } = data[0];
		stats = {
			temperature: temperature,
			revolution: revolution,
			radius: radius,
			rotation: rotation
		};
	});*/
	$: planet = planets[0];
</script>

<hr />
<Navigation />
<hr />
<Header />
<hr />
<StatsData data={stats} />
<hr />
<DetailBox {planet} />
