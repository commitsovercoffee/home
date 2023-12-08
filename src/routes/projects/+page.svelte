<script>
	import * as content from './content';
	const style =
		'rounded-xl m-2 border-2 border-darkest hover:border-dark px-4 py-2 no-underline bg-darkest transition-all duration-300 delay-100 ease-in-out';
</script>

<main class="grid grid-cols-1 lg:grid-cols-2">
	{#each content.projects as project}
		<section class="m-2 rounded-xl p-4 bg-darker">
			<ul class="p-0 list-inside list-none">
				<li class="font-bold font-contrail text-light">
					{project.name}
				</li>
				<li class="font-plex_sans text-dark">
					{project.desc}
				</li>

				<div class="flex">
					<a class={style} href={`https://github.com/commitsovercoffee/${project.repo}`}>source</a>

					{#if project.demo != ''}
						<a class={style} href={project.demo}>demo</a>
					{/if}
				</div>
			</ul>
		</section>
	{/each}
</main>
