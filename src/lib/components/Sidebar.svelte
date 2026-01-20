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
		Asterisk,
	} from "lucide-svelte";
	import { toggleMode } from "mode-watcher";
	import { sidebarState } from "$lib/state.svelte";

	let isCollapsed = $state(false);

	$effect(() => {
		if (sidebarState.isOpen && window.innerWidth < 768) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	});

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

<!-- Mobile Overlay -->
{#if sidebarState.isOpen}
	<div
		class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
		onclick={() => sidebarState.close()}
		onkeydown={(e) => e.key === "Escape" && sidebarState.close()}
		role="button"
		tabindex="0"
		aria-label="Close sidebar overlay"
	></div>
{/if}

<aside
	class="fixed inset-y-0 left-0 z-50 w-full md:relative md:flex h-screen {isCollapsed
		? 'md:w-20'
		: 'md:w-62'} flex-col bg-sidebar border-r border-border/40 px-3 py-6 text-foreground/70 overflow-y-auto transition-all duration-300 ease-in-out
		{sidebarState.isOpen
		? 'translate-x-0'
		: '-translate-x-full md:translate-x-0'} md:translate-x-0"
>
	<!-- Header -->
	<div
		class="flex items-center {isCollapsed
			? 'md:justify-center'
			: 'justify-between'} mb-10 px-2 transition-all"
	>
		<div class="flex items-center gap-3">
			<!-- Astra-like Asterisk Logo -->
			<div
				class="h-8 w-8 bg-[#10b981] rounded-[8px] flex items-center justify-center text-white shadow-lg shadow-[#10b981]/20 shrink-0"
			>
				<Asterisk class="w-5 h-5" strokeWidth={3} />
			</div>
			<span
				class="font-bold text-[18px] tracking-[-0.02em] text-foreground/90 {isCollapsed
					? 'md:hidden'
					: ''}">Yeroscare</span
			>
		</div>

		<!-- Mobile Close Button / Desktop Collapse Button -->
		<div class="flex items-center">
			<!-- Mobile Close Button -->
			<button
				onclick={() => sidebarState.close()}
				class="md:hidden p-2 hover:bg-foreground/5 rounded-lg text-foreground/40"
				aria-label="Close sidebar"
			>
				<Plus class="w-6 h-6 rotate-45" />
			</button>

			<!-- Desktop Collapse Button -->
			<button
				onclick={() => (isCollapsed = !isCollapsed)}
				class="hidden md:block p-1.5 hover:bg-foreground/5 rounded-lg border border-transparent hover:border-border/50 text-foreground/40 transition-all {isCollapsed
					? 'hidden'
					: ''}"
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
	</div>

	{#if isCollapsed}
		<div class="flex justify-center mb-6">
			<button
				onclick={() => (isCollapsed = !isCollapsed)}
				class="p-1.5 hover:bg-foreground/5 rounded-lg border border-transparent hover:border-border/50 text-foreground/40 transition-all"
				aria-label="Expand sidebar"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					class="w-5 h-5 rotate-180"
				>
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
					<line x1="9" y1="3" x2="9" y2="21"></line>
				</svg>
			</button>
		</div>
	{/if}

	<!-- Main Actions -->
	<div class="space-y-1.5 mb-8">
		<button
			class="flex items-center {isCollapsed
				? 'justify-center'
				: 'justify-between'} w-full px-3 py-2.5 text-[14px] font-medium rounded-xl hover:bg-foreground/5 transition-all group"
		>
			<div class="flex items-center gap-3.5">
				<div class="bg-[#10b981] rounded-full p-0.5">
					<Plus class="h-3.5 w-3.5 text-white" />
				</div>
				<span class={isCollapsed ? "hidden" : ""}>New chat</span>
			</div>
			<span
				class="text-[10px] text-foreground/30 font-semibold tracking-wider {isCollapsed
					? 'hidden'
					: ''}">Ctrl + N</span
			>
		</button>
		<button
			class="flex items-center {isCollapsed
				? 'justify-center'
				: 'justify-between'} w-full px-3 py-2.5 text-[14px] font-medium rounded-xl hover:bg-foreground/5 transition-all group"
		>
			<div class="flex items-center gap-3.5 text-foreground/50">
				<Search class="h-5 w-5" />
				<span class="text-foreground/70 {isCollapsed ? 'hidden' : ''}"
					>Search chats</span
				>
			</div>
			<span
				class="text-[10px] text-foreground/30 font-semibold tracking-wider {isCollapsed
					? 'hidden'
					: ''}">Ctrl + O</span
			>
		</button>
		<button
			class="flex items-center {isCollapsed
				? 'justify-center'
				: 'gap-3.5'} w-full px-3 py-2.5 text-[14px] font-medium rounded-xl hover:bg-foreground/5 transition-all text-foreground/50"
		>
			<Library class="h-5 w-5" />
			<span class="text-foreground/70 {isCollapsed ? 'hidden' : ''}"
				>Library</span
			>
		</button>
	</div>

	<!-- Sections -->
	<div class="flex-1 space-y-8 overflow-y-auto no-scrollbar pb-6 px-1">
		<!-- Favorites -->
		<div>
			<div
				class="flex items-center {isCollapsed
					? 'justify-center'
					: 'justify-between'} px-2 mb-3 text-[11px] font-bold text-foreground/40 uppercase tracking-widest cursor-pointer group"
			>
				{#if !isCollapsed}
					<span>Favorites</span>
					<ChevronDown class="h-3.5 w-3.5" />
				{:else}
					<Star class="h-4 w-4" />
				{/if}
			</div>
			<div class="space-y-0.5">
				{#each favorites as chat}
					<button
						class="w-full text-left {isCollapsed
							? 'text-center'
							: 'px-2'} py-2 text-[13px] font-medium truncate rounded-lg hover:bg-foreground/5 transition-all text-foreground/45 hover:text-foreground"
					>
						{isCollapsed ? "•" : chat}
					</button>
				{/each}
			</div>
		</div>

		<!-- Recent Chats -->
		<div class="mt-8">
			<div
				class="flex items-center {isCollapsed
					? 'justify-center'
					: 'justify-between'} px-2 mb-3 text-[11px] font-bold text-foreground/40 uppercase tracking-widest cursor-pointer group"
			>
				{#if !isCollapsed}
					<span>Recent chats</span>
					<ChevronDown class="h-3.5 w-3.5" />
				{:else}
					<MessageSquare class="h-4 w-4" />
				{/if}
			</div>
			<div class="space-y-0.5">
				{#each recentChats as chat}
					<button
						class="w-full text-left {isCollapsed
							? 'text-center'
							: 'px-2'} py-2 text-[13px] font-medium truncate rounded-lg hover:bg-foreground/5 transition-all text-foreground/45 hover:text-foreground"
					>
						{isCollapsed ? "•" : chat}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="mt-auto pt-6 border-t border-border/10 space-y-1">
		<button
			class="flex items-center {isCollapsed
				? 'justify-center'
				: 'gap-3.5'} w-full px-3 py-3 text-[14px] font-medium rounded-xl hover:bg-foreground/5 transition-all text-foreground/60 hover:text-foreground"
		>
			<Settings class="h-5 w-5" />
			<span class={isCollapsed ? "hidden" : ""}>Settings & help center</span>
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
