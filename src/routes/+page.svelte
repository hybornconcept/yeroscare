<script lang="ts">
	import Sidebar from "$lib/components/Sidebar.svelte";
	import PromptInput from "$lib/components/PromptInput.svelte";
	import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
	import {
		Search,
		FileText,
		Microscope,
		Stethoscope,
		Pill,
		Hospital,
		Asterisk,
		Menu,
	} from "lucide-svelte";
	import { sidebarState } from "$lib/state.svelte";

	const suggestions = [
		{ icon: Microscope, label: "Analyze lab results" },
		{ icon: Stethoscope, label: "Check my symptoms" },
		{ icon: FileText, label: "Summarize history" },
		{ icon: Pill, label: "Identify medication" },
	];

	// Dynamic Greeting Logic
	const hour = new Date().getHours();
	let timeOfDay = "evening";
	if (hour < 12) timeOfDay = "morning";
	else if (hour < 18) timeOfDay = "afternoon";

	const greeting = `Good ${timeOfDay}, Richard`;
</script>

<div
	class="flex h-screen bg-background overflow-hidden selection:bg-accent/30 selection:text-foreground"
>
	<Sidebar />

	<!-- Main Content Area -->
	<main class="flex-1 flex flex-col bg-background relative overflow-hidden">
		<!-- Mobile & Top Left Header -->
		<div class="absolute top-6 left-6 md:left-10 z-10">
			<!-- Mobile Menu Button -->
			<button
				onclick={() => sidebarState.toggle()}
				class="md:hidden p-2 -ml-2 hover:bg-foreground/5 rounded-lg text-foreground/60 transition-colors"
				aria-label="Toggle menu"
			>
				<Menu class="w-6 h-6" />
			</button>

			<h1
				class="text-lg font-normal italic tracking-tight text-foreground/80 hidden md:block"
			>
				{greeting}
			</h1>
		</div>

		<!-- Top Right Header -->
		<div
			class="absolute top-4 right-6 md:right-10 flex items-center gap-2 md:gap-4 z-10"
		>
			<div class="hidden md:block">
				<ThemeSwitch />
			</div>

			<button
				class="px-5 py-2 border border-[#10b981]/40 rounded-xl text-[13px] font-bold text-[#10b981] hover:bg-[#10b981]/10 transition-all shadow-sm hidden md:block"
			>
				+ Upgrade
			</button>
			<div
				class="flex h-9 w-9 items-center capitalize justify-center rounded-full border-2 border-[#10b981]/60 bg-transparent text-[13px] font-bold text-foreground shadow-sm cursor-pointer hover:bg-[#10b981]/5 transition-colors"
			>
				RU
			</div>
		</div>

		<div class="flex-1 flex flex-col items-center justify-center px-6 -mt-10">
			<div class="w-full max-w-2xl flex flex-col items-center gap-4">
				<!-- Brand Header (Centered) -->
				<div class="flex items-center gap-2 md:gap-3">
					<div
						class="h-8 w-8 md:h-10 md:w-10 bg-[#10b981] rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-2xl shadow-[#10b981]/20"
					>
						<Asterisk class="w-7 h-7 md:w-9 md:h-9" strokeWidth={3} />
					</div>
					<h2
						class="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-foreground leading-tight"
					>
						Yeroscare
					</h2>
				</div>

				<!-- Desktop Prompt Input -->
				<div class="w-full hidden md:block">
					<PromptInput />
				</div>

				<!-- Desktop Suggestions Row -->
				<div class="hidden md:grid grid-cols-4 gap-3 w-full pr-1">
					{#each suggestions as { icon: Icon, label }}
						<button
							class="flex items-center justify-center gap-2.5 px-2 py-2 bg-foreground/3 border border-border/80 rounded-xl text-[13px] font-semibold hover:bg-foreground/5 transition-all text-foreground/50 hover:text-foreground group whitespace-nowrap overflow-hidden"
						>
							<Icon
								class="h-4 w-4.5 text-foreground/30 group-hover:text-foreground/60 transition-colors shrink-0"
							/>
							<span class="truncate">{label}</span>
						</button>
					{/each}
				</div>
			</div>

			<!-- Mobile Footer Area (Suggestions + Input) -->
			<div
				class="absolute bottom-6 left-0 right-0 px-4 md:hidden flex flex-col gap-3"
			>
				<!-- Mobile Suggestions (Sliding above input) -->
				<div class="w-full overflow-x-auto no-scrollbar py-1">
					<div class="flex gap-2 px-2">
						{#each suggestions as { icon: Icon, label }}
							<button
								class="flex items-center gap-2 px-3 py-2 bg-foreground/5 border border-border/60 rounded-full text-[12px] font-medium text-foreground/60 whitespace-nowrap active:bg-foreground/10 transition-colors"
							>
								<Icon class="h-3.5 w-3.5 shrink-0" />
								<span>{label}</span>
							</button>
						{/each}
					</div>
				</div>
				<PromptInput />
			</div>
		</div>
	</main>
</div>

<style>
	:global(:root) {
		font-family:
			"Inter",
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
			Roboto,
			sans-serif;
	}

	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
