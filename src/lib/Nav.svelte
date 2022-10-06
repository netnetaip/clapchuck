<script lang="ts">
	// Exports
	export let section: string;
</script>

<!-- HTML -->
<header>
	<figure>
		<svg width="28" height="28"><use xlink:href="sprite.svg#logo" href="sprite.svg#logo"></use></svg>
		<figcaption>{section}</figcaption>
	</figure>
	<nav>
		<a sveltekit:prefetch href="/about" class:selected={section === '/about'}>
			<svg width="24" height="24"><use xlink:href="sprite.svg#plus" href="sprite.svg#plus"></use></svg>
		</a>
		<a sveltekit:prefetch href="/wall" class:selected={section === 'wall'}>
			<svg width="24" height="24"><use xlink:href="sprite.svg#home" href="sprite.svg#home"></use></svg>
		</a>
	</nav>
</header>