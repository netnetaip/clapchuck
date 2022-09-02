<script lang="ts">
	// Exports
	export let section: string;
</script>

<!-- HTML -->
<header>
	<a sveltekit:prefetch href="/board">
		<svg width="30" height="30" stroke-width="1.8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M19 10a7 7 0 10-14 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
	</a>
	<nav>
		<a sveltekit:prefetch href="/board" class:selected={section === 'board'}>
			<svg width="24" height="24" stroke-width="1.8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M9 12h3m3 0h-3m0 0V9m0 3v3M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
		</a>
		<a sveltekit:prefetch href="/about" class:selected={section === 'about'}>
			<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.8" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M4 18v3M5 10V5a2 2 0 012-2h10a2 2 0 012 2v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.5 10a2.5 2.5 0 00-2.5 2.5V14H7v-1.5a2.5 2.5 0 10-3 2.45V18h16v-3.05a2.5 2.5 0 00-.5-4.95zM20 18v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
		</a>
	</nav>
</header>