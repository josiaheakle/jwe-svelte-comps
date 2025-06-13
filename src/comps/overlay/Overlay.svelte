<script lang="ts">
	import { OverlayController } from "./OverlayControl.svelte"
	import OverlayInstance from "./OverlayInstance.svelte"
	interface Props {
		animationDuration?: number
	}
	let { animationDuration = 250 }: Props = $props()

	let instances = $derived(OverlayController.instances)
	let isOpen = $derived(Object.values(instances).length > 0)
</script>

{#if isOpen}
	<div class="overlay-container">
		{#each Object.entries(instances) as [id, instance] (id)}
			<OverlayInstance
				{id}
				Comp={instance.component}
				settings={instance.settings}
				{animationDuration}
			/>
		{/each}
	</div>
{/if}

<style>
	:global(:root) {
		--overlay-padding: 1rem;
		--overlay-background: white;
		--overlay-border: 1px solid black;
		--overlay-border-radius: 0.25rem;
	}

	.overlay-container {
		position: fixed;

		margin: auto;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		display: flex;

		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
