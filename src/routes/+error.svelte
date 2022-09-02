<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;

	const title = offline ? 'Offline' : $page.status;
	const message = offline ? 'Find the internet and try again' : $page.error.message;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<pre>{message}</pre>

{#if dev && $page.error.frame}
	<pre>{$page.error.frame}</pre>
{/if}
{#if dev && $page.error.stack}
	<pre>{$page.error.stack}</pre>
{/if}