<script lang="ts">
	import { onDestroy, onMount, type Component } from "svelte"
	import { OverlayController, type OverlayId, type OverlaySettings } from "./OverlayControl.svelte"
	import { fade, scale } from "svelte/transition"

	interface Props<P extends Record<string, any>> {
		Comp: Component
		id: OverlayId
		settings: OverlaySettings<P>
		animationDuration: number
	}

	let { Comp, id, settings, animationDuration }: Props<any> = $props()
	let lastInstanceId = $derived(Object.keys(OverlayController.instances).at(-1))

	let isOpen = $state(false)

	function close() {
		isOpen = false
		setTimeout(() => {
			OverlayController.close(id)
		}, animationDuration)
	}

	function handleKeydown(e: KeyboardEvent) {
		console.log(id, lastInstanceId)
		if (e.key === "Escape" && id === lastInstanceId) {
			e.stopPropagation()
			close()
		}
	}

	onMount(() => (isOpen = true))
	onDestroy(() => (isOpen = false))
</script>

{#if isOpen}
	<div
		class="overlay-bg"
		onclick={close}
		in:fade={{ duration: animationDuration }}
		out:fade={{ duration: animationDuration }}
	></div>
	<div
		class="overlay-instance {settings.className ? settings.className : ''}"
		in:scale={{ duration: animationDuration }}
		out:scale={{ duration: animationDuration }}
	>
		<button class="close-button" onclick={close}>×</button>

		<Comp {...settings.props} />
	</div>
{/if}
<svelte:window onkeydown={handleKeydown} />

<style>
	.overlay-instance {
		position: absolute;

		padding: var(--overlay-padding);
		background-color: var(--overlay-background);
		border: var(--overlay-border);
		border-radius: var(--overlay-border-radius);
	}

	.overlay-bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		background-color: aqua;
	}

	.close-button {
		position: absolute;
		top: 0rem;
		right: 0rem;
		background-color: transparent;
		border: none;
		outline: none;
	}
</style>
