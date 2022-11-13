<script lang="ts">
	import Header from '../../stories/planets-facts/Header.svelte';
	import { page } from '$app/stores';
	import Facts from '../../stories/planets-facts/Facts.svelte';
	import DetailBox from '../../stories/planets-facts/Details.svelte';

	$: planet = $page.data.planet;
	$: facts = [
		{
			term: 'Rotation',
			definition: $page.data.planet.rotation
		},
		{
			term: 'Revolution Time',
			definition: $page.data.planet.revolution
		},
		{
			term: 'Radius',
			definition: $page.data.planet.radius
		},
		{
			term: 'Average Temp.',
			definition: $page.data.planet.temperature
		}
	];
</script>

<div data-theme={planet.name.toLowerCase()} class="theme">
	<Header />

	<main>
		<DetailBox {planet} />
		<Facts {facts} />
	</main>
</div>
