<script>
	import Account from "$lib/illustrations/Account.svelte";
	import Deposit from "$lib/illustrations/Deposit.svelte";
	import Trade from "$lib/illustrations/Trade.svelte";
	import Withdraw from "$lib/illustrations/Withdraw.svelte";
</script>

<div
	class="mx-auto flex max-w-screen-md flex-col py-10 px-6 text-white md:py-20 xl:max-w-screen-lg xl:py-28"
>
	<h2
		class="mx-auto text-lg uppercase tracking-wider text-anakiwa sm:text-2xl md:mb-4 lg:text-3xl xl:mb-12 xl:text-4xl"
	>
		Getting started on Stelo
	</h2>
	<div
		class="group relative flex h-fit justify-between rounded-lg p-8 transition-colors xl:px-9 xl:pb-16 xl:hover:bg-neutral-950"
	>
		<div class="absolute top-10 left-0 h-full w-2 bg-neutral-800" />
		<div
			class="absolute top-10 -left-1.5 h-5 w-5 rounded-full bg-neutral-800 transition-colors group-hover:bg-anakiwa"
		/>
		<div class="xl:w-1/2">
			<h3 class="text-xl font-medium lg:text-2xl">Create an account</h3>
			<p class="mt-5 text-sm text-neutral-100 lg:text-base xl:text-lg">
				To use the Stelo platform, you'll first need to create an account. With your account you get
				a personal wallet, think of it like a bank account for any items you want to deposit. You
				can then send these items to anyone else on Stelo.
			</p>
		</div>
		<div class="hidden w-52 xl:block">
			<Account className="grayscale group-hover:grayscale-0" />
		</div>
	</div>
	<div
		class="group relative flex h-fit justify-between rounded-lg p-8 transition-colors xl:px-9 xl:pb-16 xl:hover:bg-neutral-950"
	>
		<div class="absolute top-0 left-0 h-full w-2 bg-neutral-800" />
		<div
			class="absolute top-9 -left-1.5 h-5 w-5 rounded-full bg-neutral-800 transition-colors group-hover:bg-anakiwa"
		/>
		<div class="xl:w-1/2">
			<h3 class="text-xl font-medium lg:text-2xl">Deposit items</h3>
			<p class="mt-5 text-sm text-neutral-100 lg:text-base xl:text-lg">
				Now that you have an account, you'll need to put items in it to trade with. Head to your
				nearest Stelo partnered warehouse in BitCraft, and deposit your goods with them that you'd
				like on your stelo account.
			</p>
		</div>
		<div class="hidden w-52 xl:block">
			<Deposit className="grayscale group-hover:grayscale-0" />
		</div>
	</div>
	<div
		class="group relative flex h-fit justify-between rounded-lg p-8 transition-colors xl:px-9 xl:pb-16 xl:hover:bg-neutral-950"
	>
		<div class="absolute top-0 left-0 h-full w-2 bg-neutral-800" />
		<div
			class="absolute top-9 -left-1.5 h-5 w-5 rounded-full bg-neutral-800 transition-colors group-hover:bg-anakiwa"
		/>
		<div class="xl:w-1/2">
			<h3 class="text-xl font-medium lg:text-2xl">Trade your items</h3>
			<p class="mt-5 text-sm text-neutral-100 lg:text-base xl:text-lg">
				With items in your wallet, you can now do whatever you'd like with them on the Stelo
				platform! You can send them to a friend, sell them on an exchange, donate them to a cause,
				and much more!
			</p>
		</div>
		<div class="hidden w-52 xl:block">
			<Trade className="grayscale group-hover:grayscale-0" />
		</div>
	</div>
	<div
		class="group relative flex h-fit justify-between rounded-lg p-8 transition-colors xl:px-9 xl:pb-16 xl:hover:bg-neutral-950"
	>
		<div class="absolute top-0 left-0 h-10 w-2 bg-neutral-800" />
		<div
			class="absolute top-9 -left-1.5 h-5 w-5 rounded-full bg-neutral-800 transition-colors group-hover:bg-anakiwa"
		/>
		<div class="xl:w-1/2">
			<h3 class="text-xl font-medium lg:text-2xl">Withdraw items</h3>
			<p class="mt-5 text-sm text-neutral-100 lg:text-base xl:text-lg">
				Have some items that you want to withdraw back into the world of BitCraft? Go to your local
				Stelo partnered warehouse and request from them what items you'd like to withdraw from your
				account!
			</p>
		</div>
		<div class="hidden w-60 items-center xl:flex">
			<Withdraw className="grayscale group-hover:grayscale-0" />
		</div>
	</div>
</div>
