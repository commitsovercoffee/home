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
<footer class="mt-24 font-plex_sans">
	<section class="flex justify-center items-center space-x-4 text-dark underline-offset-8">
		<p>© commitsovercoffee.</p>
		<a class="hover:no-underline" href="/">RSS</a>
		<a class="hover:no-underline" href="/">Github</a>
		<a class="hover:no-underline text-[#f96743]" href="/">Svelte</a>
	</section>
</footer>
