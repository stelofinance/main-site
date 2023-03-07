<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import InfoCards from "$lib/components/InfoCards.svelte";
	import Walkthrough from "$lib/components/Walkthrough.svelte";
</script>

<svelte:head>
	<title>Stelo Finance</title>
	<meta
		name="description"
		content="A finance platform for the game BitCraft. Free for any to use or even build apps on through our API."
	/>
</svelte:head>

<Hero />
<InfoCards />
<Walkthrough />
