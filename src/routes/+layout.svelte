<script lang="ts">
	import { page, navigating } from '$app/stores';
	import Preloader from '$lib/Preloader.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	$: section = $page.url.pathname.split('/')[1];
</script>

<Nav {section} />

{#if $navigating}
	<Preloader />
{/if}

<main>
	<slot />
</main>