<script lang="ts">
	// Imports
	import { onMount } from "svelte";

	// Exports
	export let user: string;
	export let entry: {
		id: string;
		timestamp: string;
		language: string;
		title: string;
		text: string;
		rating: number;
	};

	// Lets
	let daysAgo: number;
	let daysHolder: string = "Days ago";
	
	// // Days Counter
	// const daysAgoCounter = () => {
	// 	const firstDate: Date = new Date();
	// 	const secondDate: Date = new Date(entry.timestamp);
	// 	const daysSingle = 24 * 60 * 60 * 1000;
	// 	const daysDiff = Math.round(
	// 		Math.abs((firstDate.getTime() - secondDate.getTime()) / daysSingle)
	// 	);
	// 	return (daysAgo = daysDiff);
	// };

	// // Trigger Days Counter
	// onMount(() => {
	// 	daysAgoCounter();
	// });

	// Vote
	const voteup = async() => {
		if (entry.rating) {
			entry.rating++;
			// entry.rating = true;
		}

		// ({ entry } = await (entry.rating
		// 	? api.post(`entrys/${entry.slug}/favorite`, null, user && user.token)
		// 	: api.del(`entrys/${entry.slug}/favorite`, user && user.token)));
	}
</script>

<!-- HTML -->
{#if entry}
	<article id="{entry.id}">
		<!-- <img src="https://api.multiavatar.com/{entry.avatar}.svg" alt="avatar-{entry.avatar}" loading="lazy" width="60" height="60"/> -->
		<dl>
			<dt>{entry.title}</dt>
			<dd>{entry.text}</dd>
			<!-- <dd><time datetime="{entry.timestamp}">{daysAgo} {daysHolder}</time></dd> -->
		</dl>
		<button type="button" on:click|once={voteup}>
			<svg width="20" height="20"><use xlink:href="sprite.svg#like" href="sprite.svg#like"></use></svg>
			{entry.rating}
		</button>
	</article>
{/if}
