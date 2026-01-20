<script lang="ts">
	import {
		Plus,
		Search,
		Library,
		Settings,
		ChevronDown,
		MessageSquare,
		Star,
		Sun,
		Moon,
	} from "lucide-svelte";
	import { toggleMode } from "mode-watcher";

	let favorites = [
		"Flu symptoms vs Allergies",
		"Managing Hypertension naturally",
		"How to improve sleep quality",
	];
	let recentChats = [
		"Quick relief for Acid Reflux",
		"Safe exercise with Knee Pain",
		"Mental health check-in",
		"Understanding Blood Pressure",
	];
</script>

<aside
	class="flex h-screen w-66 flex-col bg-sidebar border-r border-border/40 px-3 py-6 text-foreground/70 overflow-y-auto"
>
	<!-- Header -->
	<div class="flex items-center justify-between mb-10 px-2">
		<div class="flex items-center gap-3">
			<!-- Astra-like Asterisk Logo -->
			<div
				class="h-8 w-8 bg-[#10b981] rounded-[8px] flex items-center justify-center text-white shadow-lg shadow-[#10b981]/20"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5"
				>
					<line x1="12" y1="5" x2="12" y2="19"></line>
					<line x1="5" y1="12" x2="19" y2="12"></line>
					<line x1="7.05" y1="7.05" x2="16.95" y2="16.95"></line>
					<line x1="7.05" y1="16.95" x2="16.95" y2="7.05"></line>
				</svg>
			</div>
			<span class="font-bold text-[18px] tracking-[-0.02em] text-foreground/90"
				>Yeroscare</span
			>
		</div>
		<button
			class="p-1.5 hover:bg-foreground/5 rounded-lg border border-transparent hover:border-border/50 text-foreground/40 transition-all"
			aria-label="Collapse sidebar"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				class="w-5 h-5"
			>
				<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
				<line x1="9" y1="3" x2="9" y2="21"></line>
			</svg>
		</button>
	</div>

	<!-- Main Actions -->
	<div class="space-y-1.5 mb-8">
		<button
			class="flex items-center justify-between w-full px-3 py-2.5 text-[14px] font-medium rounded-xl hover:bg-foreground/5 transition-all group"
		>
			<div class="flex items-center gap-3.5">
				<div class="bg-[#10b981] rounded-full p-0.5">
					<Plus class="h-3.5 w-3.5 text-white" />
				</div>
				<span>New chat</span>
			</div>
			<span class="text-[10px] text-foreground/30 font-semibold tracking-wider"
				>Ctrl + N</span
			>
		</button>
		<button
			class="flex items-center justify-between w-full px-3 py-2.5 text-[14px] font-medium rounded-xl hover:bg-foreground/5 transition-all group"
		>
			<div class="flex items-center gap-3.5 text-foreground/50">
				<Search class="h-5 w-5" />
				<span class="text-foreground/70">Search chats</span>
			</div>
			<span class="text-[10px] text-foreground/30 font-semibold tracking-wider"
				>Ctrl + O</span
			>
		</button>
		<button
			class="flex items-center gap-3.5 w-full px-3 py-2.5 text-[14px] font-medium rounded-xl hover:bg-foreground/5 transition-all text-foreground/50"
		>
			<Library class="h-5 w-5" />
			<span class="text-foreground/70">Library</span>
		</button>
	</div>

	<!-- Sections -->
	<div class="flex-1 space-y-8 overflow-y-auto no-scrollbar pb-6 px-1">
		<!-- Favorites -->
		<div>
			<div
				class="flex items-center justify-between px-2 mb-3 text-[11px] font-bold text-foreground/40 uppercase tracking-widest cursor-pointer group"
			>
				<span>Favorites</span>
				<ChevronDown class="h-3.5 w-3.5" />
			</div>
			<div class="space-y-0.5">
				{#each favorites as chat}
					<button
						class="w-full text-left px-2 py-2 text-[13px] font-medium truncate rounded-lg hover:bg-foreground/5 transition-all text-foreground/45 hover:text-foreground"
					>
						{chat}
					</button>
				{/each}
			</div>
		</div>

		<!-- Recent Chats -->
		<div class="mt-8">
			<div
				class="flex items-center justify-between px-2 mb-3 text-[11px] font-bold text-foreground/40 uppercase tracking-widest cursor-pointer group"
			>
				<span>Recent chats</span>
				<ChevronDown class="h-3.5 w-3.5" />
			</div>
			<div class="space-y-0.5">
				{#each recentChats as chat}
					<button
						class="w-full text-left px-2 py-2 text-[13px] font-medium truncate rounded-lg hover:bg-foreground/5 transition-all text-foreground/45 hover:text-foreground"
					>
						{chat}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="mt-auto pt-6 border-t border-border/10 space-y-1">
		<button
			class="flex items-center gap-3.5 w-full px-3 py-3 text-[14px] font-medium rounded-xl hover:bg-foreground/5 transition-all text-foreground/60 hover:text-foreground"
		>
			<Settings class="h-5 w-5" />
			<span>Settings & help center</span>
		</button>
	</div>
</aside>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
