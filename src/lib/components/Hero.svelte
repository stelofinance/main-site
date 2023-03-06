<script lang="ts">
	import LogoColored from "$lib/icons/LogoColored.svelte";
</script>

<div class="relative flex h-screen-available flex-col items-center justify-center">
	<div class="mb-40 flex flex-col items-center gap-4 text-white">
		<LogoColored classList="h-32 w-32" />
		<div class="flex flex-col">
			<h1 class="text-center text-2xl font-medium">
				<a
					class="underline"
					rel="noopener noreferrer"
					target="_blank"
					href="https://bitcraftonline.com/">BitCraft</a
				>'s leading<br />finance platform
			</h1>
			<h2 class="mt-2 text-center text-sm">
				Innovative. <span class="hidden">Player focused. </span>Player driven.
			</h2>
			<div class="mt-2 flex gap-5">
				<p
					aria-label="Will be a link in the future"
					class="flex items-center gap-2 rounded-full bg-melrose py-1 px-4 text-sm text-boulder-800"
				>
					Coming Soon
				</p>
				<a
					href="https://discord.gg/t6gM7v7V7T"
					rel="noopener noreferrer"
					target="_blank"
					class="flex items-center gap-2 rounded-full border border-white py-1 px-4 text-sm text-white"
				>
					Discord
					<svg
						aria-label="right arrow"
						class="h-3 w-3"
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
		class="absolute bottom-0 flex w-full justify-center bg-gradient-to-r from-anakiwa to-melrose py-4"
	>
		<p class="tracking-wider">THE STELO FINANCE PLATFORM</p>
	</div>
</div>
