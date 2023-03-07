<script lang="ts">
	import LogoColored from "$lib/icons/LogoColored.svelte";
</script>

<div class="relative flex h-screen-available flex-col items-center justify-center">
	<div class="mb-40 flex flex-col items-center gap-4 text-white lg:flex-row lg:gap-10 2xl:gap-14">
		<LogoColored classList="h-32 w-32 lg:h-48 lg:w-48 2xl:h-64 2xl:w-64" />
		<div class="flex flex-col">
			<h1 class="text-center text-2xl font-medium lg:text-4xl 2xl:text-5xl 2xl:leading-tight">
				<a
					class="underline"
					rel="noopener noreferrer"
					target="_blank"
					href="https://bitcraftonline.com/">BitCraft</a
				>'s leading<br />finance platform
			</h1>
			<h2 class="mt-2 flex justify-center text-center text-sm lg:mt-3 lg:text-base 2xl:text-lg">
				Innovative.&nbsp;<span class="hidden lg:block">Player focused.&nbsp;</span>Player driven.
			</h2>
			<div class="mt-3 flex gap-5 lg:mt-5 lg:justify-center 2xl:gap-8">
				<p
					aria-label="Will be a link in the future"
					class="flex items-center gap-2 rounded-full bg-melrose py-1 px-4 text-sm font-medium
						text-boulder-800 lg:px-6 lg:text-base 2xl:py-2 2xl:px-14 2xl:text-lg"
				>
					Coming Soon
				</p>
				<a
					href="https://discord.gg/t6gM7v7V7T"
					rel="noopener noreferrer"
					target="_blank"
					class="flex items-center gap-2 rounded-full border border-white py-1 px-4 text-sm font-medium
						text-white lg:gap-3 lg:px-6 lg:text-base 2xl:py-2 2xl:px-14 2xl:text-lg"
				>
					Discord
					<svg
						aria-label="right arrow"
						class="h-3 w-3 lg:h-3.5 lg:w-3.5 2xl:h-4 2xl:w-4"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 8.73737V11.2626H15.1515L8.20707 18.2071L10 20L20 10L10 0L8.20707 1.79293L15.1515 8.73737H0Z"
							fill="currentColor"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<div
		class="absolute bottom-0 flex w-full justify-center bg-gradient-to-r from-anakiwa to-melrose py-4
			2xl:py-5 2xl:text-xl"
	>
		<p class="tracking-wider">THE STELO FINANCE PLATFORM</p>
	</div>
</div>
