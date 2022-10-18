<script lang="ts">
	import { page } from '$app/stores';
	import StatsBox from '../../components/statsBox.svelte';
	import DetailBox from '../../components/detailBox.svelte';

	$: data = $page.data.stats;
	$: planet = $page.data.planet;
</script>

<DetailBox {planet} />
<StatsBox {data} />
