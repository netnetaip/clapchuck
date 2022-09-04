<script lang="ts">	
	// Imports
	import Article from "$lib/article/Article.svelte";
	import type { PageData } from '../../../.svelte-kit/types/src/routes/board/$types';

	// Exports
	export let data: PageData;

	// Lets
	let dataMoreEntries: any = [];
	let page = 1;
	let limit = 40;

	// Fetch More Data
	const fetchMore = async () => {
		const response = await fetch(
			`https://6016e904f534300017a4509d.mockapi.io/board?page=${page}&limit=${limit}`
		);
		dataMoreEntries = await response.json();
		console.log("Entries Fill — ", dataMoreEntries);
	};

	// Spread Data Entries
	$: data.entries = [...data.entries, ...dataMoreEntries];

	// DEVELOPMENT
	$: console.log("Entries Data — ", data);
</script>

<!-- Head -->
<svelte:head>
	<title>Board</title>
	<meta name="description" content="" />
</svelte:head>

<!-- DEVELOPMENT -->
<!-- <div style="background-color: pink; position: fixed; bottom: 20px; z-index: 999; padding: 10px;">
	<p>Entries int - {data.entries.length}</p>
	<p>Entries add - {dataMoreEntries.length}</p>
	<p>Entries addition all loaded? - {dataMoreEntries.length === 0 || dataMoreEntries.length >= 40 ? 'no' : 'yes'}</p>
</div> -->

<!-- Cards -->
<section>
	<h1>Collective<br />forgiveness</h1>
	{#if data.entries.length === 0}
		<pre>Nothing here yet</pre>
	{:else}
		{#each data.entries as entry}
			<Article {entry} />
		{/each}
	{/if}
	{#if dataMoreEntries.length === 0 || dataMoreEntries.length >= 40}
		<button on:click={() => {page++; fetchMore()}}>Load more...</button>
	{/if}
</section>
