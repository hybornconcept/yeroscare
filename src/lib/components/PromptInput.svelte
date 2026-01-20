<script lang="ts">
	import { Plus, Globe, ChevronDown, ArrowUp } from "lucide-svelte";

	let textarea: HTMLTextAreaElement;

	function handleInput() {
		if (!textarea) return;
		textarea.style.height = "auto";
		textarea.style.height = textarea.scrollHeight + "px";
	}
</script>

<div class="relative w-full">
	<!-- The Input Container -->
	<div
		class="prompt-gradient rounded-2xl p-px shadow-2xl transition-all hover:shadow-green-500/5 border border-[#10b981]/40"
	>
		<div
			class="bg-card/40 backdrop-blur-xl rounded-[calc(1rem-1px)] p-3 md:p-5 flex flex-col gap-2 md:gap-4"
		>
			<!-- Text Area -->
			<textarea
				bind:this={textarea}
				placeholder="How are you feeling today?..."
				class="bg-transparent border-none outline-none resize-none text-foreground text-[15px] md:text-[16px] font-medium placeholder:text-foreground/25 min-h-[38px] md:min-h-[40px] overflow-hidden leading-relaxed"
				oninput={handleInput}
			></textarea>

			<!-- Bottom Toolbar -->
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-1.5">
					<button
						class="p-2 hover:bg-white/5 rounded-full text-foreground/40 transition-colors group"
						aria-label="Attach file"
					>
						<Plus class="h-4.5 w-4.5 group-hover:text-foreground/80" />
					</button>
					<button
						class="flex items-center gap-2 px-2 md:px-3 py-1.5 hover:bg-white/5 rounded-full text-foreground/40 transition-colors text-[13px] font-semibold group"
					>
						<Globe class="h-4 w-4 group-hover:text-foreground/80" />
						<span class="group-hover:text-foreground/80 hidden md:block"
							>Web search</span
						>
					</button>
				</div>

				<div class="flex items-center gap-2">
					<button
						class="flex items-center gap-1 px-2 md:px-3 py-1.5 hover:bg-white/5 rounded-full text-foreground/35 transition-colors text-[11px] md:text-[12px] font-bold group"
					>
						<span class="group-hover:text-foreground/70 text-nowrap"
							>Yeroscare Core</span
						>
						<ChevronDown class="h-3.5 w-3.5 group-hover:text-foreground/70" />
					</button>
					<button
						class="p-2 bg-[#10b981] hover:bg-[#12d392] rounded-xl text-white transition-all shadow-lg shadow-[#10b981]/30 active:scale-95 ml-1"
						aria-label="Send message"
					>
						<ArrowUp class="h-4.5 w-4.5 stroke-[3]" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
