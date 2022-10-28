<script lang="ts">
	import { page } from '$app/stores';
	import Facts from '../../stories/planets-facts/Facts.svelte';
	import DetailBox from '../../components/detailBox.svelte';


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

<DetailBox {planet} />
<Facts {facts} />
