<script lang="ts">
	// Imports
	import { onMount } from "svelte";

	// Exports
	export let entry: {
		id: number;
		timestamp: Date;
		author: string;
		avatar: string;
		location: { country: string, city: string }[];
		language: number;
		text: string;
		rating: number;
	};

	// Lets
	let daysAgo: string;

	// Days Counter
	const daysAgoCounter = () => {
		let firstDate = new Date();
		let secondDate = new Date(entry.timestamp);
		const daysSingle = 24 * 60 * 60 * 1000;
		const daysDiff = Math.round(
			Math.abs((firstDate - secondDate) / daysSingle)
		);
		return (daysAgo = daysDiff);
	};

	// Trigger Days Counter
	onMount(() => {
		daysAgoCounter();
	});
</script>

<!-- DEMO -->
<!-- <article>
	<ul style="border: 1px solid blue; display: flex; flex-direction: column; padding: 20px;">
		<li>{entry.id}</li>
		<li>{entry.timestamp}</li>
		<li>{@html entry.author}</li>
		<img src="https://joeschmoe.io/api/v1/{entry.avatar}" alt="{entry.avatar}" height="50" width="50"/>
		<li>{@html entry.location.country}, {@html entry.location.city}</li>
		<li>{entry.language}</li>
		<li>{entry.text}</li>
		<li>{entry.rating}</li>
	</ul>
</article> -->

<!-- HTML -->
{#if entry}
	<article id="{entry.id}">
		<figure>
			<img src="https://joeschmoe.io/api/v1/{entry.avatar}" alt="avatar-{entry.avatar}" loading="lazy" width="60" height="60"/>
			<figcaption>
				<dl>
					<dt>{@html entry.author}</dt>
					<dd><time datetime="{entry.timestamp}">{daysAgo} days ago</time></dd>
				</dl>
			</figcaption>
		</figure>
		<p>{entry.text}</p>
		<button type="button">
			<svg width="30" height="30" stroke-width="1.8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14 14H2M10 10H2M6 6H2M18 18H2M19 14V4m0 0l3 3m-3-3l-3 3" stroke="#000000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			{entry.rating}
		</button>
	</article>
{/if}
