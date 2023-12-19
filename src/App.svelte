<script lang="ts">
  import Overlay from "./lib/overlay/Overlay.svelte";

  let isOpen: boolean = true;
  let doOpen: (bool?: boolean) => void;
</script>

<Overlay bind:isOpen={isOpen} bind:doOpen={doOpen}>
  <h1>Dookies?</h1>
  <p>Fuck yea, Dookies?</p>
  <button on:click={() => doOpen(false)}>Poopies</button>
</Overlay>

<section>
  <h1>Josiah Eakle Development</h1>
  <p>mr dookie butts</p>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
    possimus aliquam hic earum harum illo modi iste? Aperiam obcaecati odit
    ullam consequatur quia reiciendis! Laudantium nemo architecto quidem dolor
    dolores.
  </p>
  <h2>asdfmlaksdh</h2>
  <p>mr dookie sluts</p>
  <h3>dlkaf laksdf lkjd</h3>
  <p>mr poopie cuntz</p>
  <h4>2lkj;lkasdf</h4>
  <p>dr cunt cunt mcghee</p>
  <h5>kldilk</h5>
  <p>fuck you</p>
  <h6>dklldkkdl</h6>
  <p>no, seriously - fuck you</p>
</section>

<section>
  <button on:click={() => doOpen()}>poopies?</button>
</section>

<style>
</style>
