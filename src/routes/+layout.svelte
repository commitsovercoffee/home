<script>
	import '../app.css';

	import '@fontsource/contrail-one';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource/ibm-plex-sans';
	import '@fontsource/ibm-plex-serif';
	import '@fontsource-variable/caveat';

	const links = ['Home', 'Projects', 'Blog', 'About'];
</script>

<nav class="mb-24 flex justify-center">
	{#each links as link}
		<a href="/" class="inline p-2 mx-4 my-2 no-underline">{link}</a>
	{/each}
</nav>
<slot />
<footer class="mt-24">
	© commitsovercoffee | Made with <a href="https://svelte.dev/">svelte</a>.
</footer>
