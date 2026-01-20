export const sidebarState = $state({
	isOpen: false,
	toggle() {
		this.isOpen = !this.isOpen;
	},
	close() {
		this.isOpen = false;
	}
});
