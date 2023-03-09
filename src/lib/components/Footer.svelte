<script>
	import LogoFull from "../icons/LogoFull.svelte";

	let links = [
		{
			href: "https://docs.stelo.finance",
			title: "Docs"
		},
		{
			href: "https://discord.gg/t6gM7v7V7T",
			title: "Discord"
		},
		{
			href: "https://github.com/stelofinance",
			title: "GitHub"
		}
	];
</script>

<div class="flex items-center gap-4 py-4 px-3 text-white lg:gap-10 lg:py-6 lg:px-16 2xl:gap-12">
	<LogoFull className="w-24 h-auto mr-auto lg:w-32 2xl:w-36" />

	{#each links as { href, title }}
		<a class="text-sm lg:text-base 2xl:text-lg" {href} rel="noopener noreferrer" target="_blank"
			>{title}</a
		>
	{/each}
</div>
