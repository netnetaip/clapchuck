<script lang="ts">	
	// Imports
	import Article from "$lib/article/Article.svelte";
	import type { PageData } from '../../../.svelte-kit/types/src/routes/wall/$types';

	// Exports
	export let data: PageData;

	// Lets
	let dataMoreEntries: any = [];
	let page: number = 1;
	let limit: number = 40;

	// Consts
	const title = "Wall of sins";

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
</script>

<!-- Head -->
<svelte:head>
	<title>{title}</title>
	<meta name="description" content="" />
</svelte:head>

<!-- Cards -->
<section>
	<h1>{title}</h1>
	{#if data.entries.length === 0}
		<pre>Nothing here yet</pre>
	{:else}
		{#each data.entries as entry}
			<Article {entry} />
		{/each}
	{/if}
	{#if dataMoreEntries.length === 0 || dataMoreEntries.length >= 40}
		<button on:click={() => {page++; fetchMore()}}>Load more</button>
	{/if}
</section>
