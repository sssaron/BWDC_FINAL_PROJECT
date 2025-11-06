<script>
  import TitleCard from "../lib/TitleCard.svelte";

  const title = "notice anything?";
  const subtitle = "...";

  let scrollY = 0;

  const showStart = 5200;
  const showEnd = 6000;

  function handleScroll() {
    scrollY = window.scrollY;
  }

  // Opacity: 0 before showStart, 1 between, 0 after showEnd (smooth fade)
  $: visibleOpacity =
    scrollY < showStart
      ? 0
      : scrollY > showEnd
        ? 0
        : (scrollY - showStart) / (showEnd - showStart);
</script>

<svelte:window on:scroll={handleScroll} />

<div
  class="text-overlay"
  style="opacity: {visibleOpacity}; transition: opacity 200ms ease;"
>
  <h1>{title}</h1>
</div>
<img src="sara_dad_walk.gif" alt="sara_walk"
  class="walking-gif"
  style="opacity: {visibleOpacity}; transition: opacity 300ms ease;"
/>

<!-- TitleCard always visible -->
<TitleCard />

<style>
  .walking-gif {
    position: fixed;
    top: 60%;
    left: 50%;
    width: 150%;
    max-width: 1000px;
    transform: translate(-50%, -50%);
    z-index: 9999;
    pointer-events: none;
  }

  .text-overlay {
    position: fixed;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "aAnotherTag", Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 3.5rem;
    z-index: 10000; /* above gif */
    pointer-events: none;
    text-align: center;
    max-width: 90vw;
  }
</style>
