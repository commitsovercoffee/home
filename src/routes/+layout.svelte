<script>
	import '../app.css';
	import '@fontsource/contrail-one';
	import '@fontsource/ibm-plex-mono';
	import '@fontsource/ibm-plex-sans';
	import '@fontsource/ibm-plex-serif';
	import '@fontsource-variable/caveat';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
<slot />
<footer class="mt-24">
	© commitsovercoffee | Made with <a href="https://svelte.dev/">svelte</a>.
</footer>
