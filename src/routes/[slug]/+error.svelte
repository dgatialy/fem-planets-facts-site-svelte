<script lang="ts">
	import Header from '../../stories/planets-facts/Header.svelte';
	import { page } from '$app/stores';		
	
</script>

<div data-theme="earth" class="theme">
	<Header />

	<main>
		<h1>{$page.status}</h1>
        <h2>{$page.error?.message}</h2>
	</main>
</div>
