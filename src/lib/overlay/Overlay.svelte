<script lang="ts">
  export let animationDuration: number = 300;
  export let isOpen: boolean = false;
  export const doOpen = (open: boolean = true) => {
    isOpen = open;
    if (open === true) {
      isDialogOpen = true;
      setTimeout(() => {
        isOverlayVisible = true;
      }, 0);
    } else {
      isOverlayVisible = false;
      setTimeout(() => {
        isDialogOpen = false;
      }, animationDuration);
    }
  };

  let isDialogOpen: boolean = isOpen;
  let isOverlayVisible: boolean = isOpen;
</script>

<dialog open={isDialogOpen}>
  <div
    class="overlay-bg {isOverlayVisible ? 'open' : ''}"
    on:click={() => doOpen(false)}
  />
  <div class="overlay {isOverlayVisible ? 'open' : ''}">
    <slot />
  </div>
</dialog>

<style>
  dialog {
    /* display: none; */
    background-color: transparent;
    position: fixed;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    padding: 0;

    opacity: 0;
    transition: opacity 5000ms var(--tf);
  }

  dialog[open] {
    display: flex;
    opacity: 100%;
  }

  dialog .overlay-bg {
    z-index: -1;

    background-color: transparent;
    position: absolute;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    transition: all var(--td) var(--tf);
    backdrop-filter: blur(0);
  }

  .overlay-bg.open {
    background-color: var(--color-bg-transparent);
    backdrop-filter: blur(0.25rem);
  }

  dialog .overlay {
    color: var(--color-text);
    width: fit-content;
    height: fit-content;
    padding: 2rem 3rem;
    border-radius: var(--br);
    background-color: var(--color-bg);
    box-shadow: var(--shadow-large);
    display: flex;
    flex-direction: column;
    transform: scale(0);
    transition: transform var(--td) var(--tf);
  }

  .overlay.open {
    transform: scale(100%);
  }
</style>
