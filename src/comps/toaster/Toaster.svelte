<script lang="ts">
	import { Toaster, type ToastId, type ToastProps } from "./ToasterControl.svelte"
	import { fly } from "svelte/transition"

	interface Props {
		animationDuration?: number
	}
	let { animationDuration = 250 }: Props = $props()

	let { instances } = $derived(Toaster)
</script>

{#snippet toast(props: ToastProps, id: ToastId)}
	<div
		class="toast"
		in:fly={{ x: 500, duration: animationDuration }}
		out:fly={{ x: 500, duration: animationDuration }}
	>
		<span class="toast-content">
			{@html props.content}
		</span>
		<button class="close-button" onclick={() => Toaster.close(id)}>×</button>
	</div>
{/snippet}

<div class="toaster">
	{#each Object.entries(instances).reverse() as [id, props] (id)}
		{@render toast(props, id)}
	{/each}
</div>

<style>
	:global(:root) {
		--toast-border-radius: 0.25rem;
		--toast-border: 1px solid red;
		--toast-padding: 1rem;
		--toast-width: 12rem;
	}

	.toaster {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5rem;

		position: fixed;
		max-height: 100dvh;
		box-sizing: border-box;
		overflow-y: auto;
		overflow-x: hidden;

		top: 0;
		right: 0;

		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-right: 0.5rem;
	}

	.toast {
		position: relative;
		height: 100%;
		padding: var(--toast-padding);
		width: var(--toast-width);
		border: var(--toast-border);
		border-radius: var(--toast-border-radius);
	}

	.toast-content {
		display: inline-block;
		width: var(--toast-width);
		height: fit-content;
	}

	.close-button {
		position: absolute;
		top: 0.25rem;
		right: 0.25rem;
		background-color: transparent;
		border: none;
		outline: none;
	}
</style>
