<script>
	// get current page url
	import { page } from '$app/stores';
	$: currentURL = $page.url.pathname.split('/').pop() || $page.url.pathname;

	// nav bar
	let links = ['home', 'projects', 'blog', 'about'];
	const style =
		'inline m-2 border-dark p-2 uppercase no-underline font-contrail text-lg text-dark transition-color duration-300 delay-100 ease-in-out';
</script>

<nav class="mb-24 flex justify-center">
	{#each links as link}
		{#if link === 'home'}
			<a
				class={`${style} ${
					currentURL === '/'
						? 'text-light border-b-2 border-light'
						: 'hover:text-light hover:border-light'
				}`}
				href={`/`}
			>
				{link}
			</a>
		{:else if link === currentURL}
			<a
				class={`${style} ${link === currentURL && 'text-light border-b-2 border-light'}`}
				href={link === 'home' ? '/' : `/${link}`}
			>
				{link}
			</a>
		{:else}
			<a
				class={`${style} hover:text-light hover:border-light`}
				href={link === 'home' ? '/' : `/${link}`}
			>
				{link}
			</a>
		{/if}
	{/each}
</nav>
