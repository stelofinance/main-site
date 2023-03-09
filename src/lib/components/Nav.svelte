<script>
	import LogoFull from "../icons/LogoFull.svelte";
</script>

<div
	class="sticky top-0 z-30 flex items-center gap-3 bg-neutral-900 py-2 px-3  text-white
	lg:py-4 lg:px-10 2xl:px-20"
>
	<a href="/" aria-label="Go to homepage">
		<LogoFull className="w-28 h-auto mr-auto 2xl:w-32" />
	</a>

	<!-- 
	<a href="docs.stelo.finance">Docs</a>
	<a href="/" aria-disabled="true">Register</a>
	<a href="/" aria-disabled="true">Login</a>
	-->
</div>

<style>
	:global(*) {
		--header-offset: 61.3px;
	}

	@media (min-width: 1024px) {
		:global(*) {
			--header-offset: 77.3px;
		}
	}

	@media (min-width: 1536px) {
		:global(*) {
			--header-offset: 83.76px;
		}
	}
</style>
