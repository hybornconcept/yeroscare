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
	} from "lucide-svelte";

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
		<!-- Top Right Header -->
		<div class="absolute top-4 right-10 flex items-center gap-4 z-10">
			<ThemeSwitch />

			<button
				class="px-5 py-2 border border-accent/40 rounded-xl text-[13px] font-bold text-accent hover:bg-accent/10 transition-all shadow-sm"
			>
				+ Upgrade
			</button>
			<div
				class="flex h-9 w-9 items-center capitalize justify-center rounded-full border-2 border-accent bg-accent/5 text-[13px] font-light text-white shadow-sm cursor-pointer hover:bg-accent/10 transition-colors"
			>
				RU
			</div>
		</div>

		<div class="flex-1 flex flex-col items-center justify-center px-6 -mt-20">
			<div class="w-full max-w-2xl flex flex-col items-start gap-3">
				<!-- Main Greeting -->
				<div class="space-y-2 text-left w-full pl-2">
					<h1
						class="text-[32px] md:text-[36px] font-bold tracking-[-0.03em] text-foreground leading-tight"
					>
						{greeting}
					</h1>
					<p
						class="text-md md:text-[26px] font-normal italic text-foreground/35 leading-tight tracking-tight"
					>
						How are you feeling today?
					</p>
				</div>

				<PromptInput />

				<!-- Suggestions Row - Grid for Symmetry -->
				<div class="grid grid-cols-4 gap-3 w-full pr-1">
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
</style>
