<script lang="ts">
	import { mode, toggleMode } from "mode-watcher";
	import { Sun, Moon } from "lucide-svelte";
</script>

<button
	onclick={toggleMode}
	class="group relative flex h-8 w-14 items-center rounded-full p-1 transition-all duration-300 border border-white/10
    {mode.current === 'light' ? 'bg-[#10b981]' : 'bg-black dark:bg-[#111]'}"
	aria-label="Toggle theme"
>
	<!-- Slider Circle -->
	<div
		class="absolute z-0 h-6 w-6 rounded-full bg-white transition-all duration-300 ease-in-out
        {mode.current === 'dark' ? 'translate-x-6' : 'translate-x-0'}"
	></div>

	<!-- Icons Row -->
	<div class="relative z-10 flex w-full items-center justify-between px-1">
		<div class="flex h-6 w-6 items-center justify-center">
			<Sun
				class="h-3.5 w-3.5 transition-colors duration-300
                {mode.current === 'light' ? 'text-black' : 'text-white/40'}"
				strokeWidth={2}
			/>
		</div>
		<div class="flex h-6 w-6 items-center justify-center">
			<Moon
				class="h-3.5 w-3.5 transition-colors duration-300
                {mode.current === 'dark' ? 'text-black' : 'text-white/40'}"
				strokeWidth={2}
			/>
		</div>
	</div>
</button>
