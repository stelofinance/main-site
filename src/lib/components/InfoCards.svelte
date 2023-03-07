<script lang="ts">
	let info = [
		{
			title: "Convienent in every way",
			body: "One of Stelo's core goals is to be a convienent way for managing all your finances. Once you've created your account and it has been confirmed, the entire platform is at your fingertips."
		},
		{
			title: "Connecting the physical to the digial",
			body: "Every item in the Stelo ecosystem is backed by the real asset in game. Whenever you want any of your digital goods in game, just visit a Stelo partnered warehouse and you'll receive the items from your account."
		},
		{
			title: "Built to be built upon",
			body: "By leveraging Stelo's OAuth and webhook enabled wallets, you can build finance bots, investment markets, tax systems, and so much more! If you're daring enough, you could even build another entire finance platform ontop."
		},
		{
			title: "A simplistic currency",
			body: "The Stelo currency is a divisible, limited supply currency built into the Stelo platform. It's main purpose is to be the collateral against assets stored in Stelo partnered warehouses."
		},
		{
			title: "A free platform",
			body: "Stelo's core functionality is completely free! No monthly subscription, no transactions fees on anything. Stelo will be monetized by other means if needed. But free doesn't stop there, we also mean free as in libre, all core functionality is “copy-left” licensed."
		},
		{
			title: "A global exchange",
			body: "To showcase the power of the smart wallet system, Stelo will be creating a global exchange where users can sell goods to anyone, anytime, anywhere. This utility will be only just the start of the Stelo ecosystem."
		}
	];
</script>

<div class="bg-gradient-to-b from-anakiwa-300 to-melrose py-10 px-4 lg:py-16 lg:px-10">
	<div
		class="mx-auto grid max-w-sm grid-cols-1 gap-4 sm:max-w-screen-xl sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
	>
		{#each info as { title, body }}
			<div
				class="flex flex-col rounded-lg bg-white bg-opacity-20 py-5 px-3 text-center shadow-md xl:p-8"
			>
				<p class="text-lg font-medium xl:text-2xl">{title}</p>
				<p class="mt-2 text-sm font-light xl:mt-6 xl:text-lg xl:leading-tight">{body}</p>
			</div>
		{/each}
	</div>
</div>
