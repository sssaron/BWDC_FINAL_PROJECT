<script>
  import TitleCard from "../lib/TitleCard2.svelte";

  const title1 = "WHITE PEOPLE MAKE 1.9x MORE IN INCOME";
  const title2 = "ONLY 28% OF BLACK PEOPLE OWN A HOME";
  const subtitle = "...";

  let scrollY = 0;

  const showStart = 15000;
  const showEnd = 17000;

  function handleScroll() {
    scrollY = window.scrollY;
  }

  $: visibleOpacity =
    scrollY < showStart
      ? 0
      : scrollY > showEnd
        ? 0
        : (scrollY - showStart) / (showEnd - showStart);

  // Second text fade-in (starts a bit later)
  const delay = 900; // pixels to delay the fade
  $: visibleOpacity2 =
    scrollY < showStart + delay + delay
      ? 0
      : scrollY > showEnd + delay
        ? 0
        : (scrollY - (showStart + delay)) / (showEnd - showStart);
</script>

<svelte:window on:scroll={handleScroll} />

<div
  class="text-overlay"
  style="opacity: {visibleOpacity}; transition: opacity 50ms ease; "
>
  <h1>{title1}</h1>
</div>

<div
  class="text-overlay2"
  style="opacity: {visibleOpacity2}; transition: opacity 50ms ease; "
>
  <h1>{title2}</h1>
</div>

<TitleCard />

<style>
  .walking-gif {
    position: fixed;
    top: 90%;
    left: 50%;
    width: 150%;
    max-width: 1000px;
    transform: translate(-50%, -50%);
    z-index: 9999;
    pointer-events: none;
  }

  .text-overlay {
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "aAnotherTag", Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 4rem;
    z-index: 10000;
    pointer-events: none;
    text-align: center;
    max-width: 90vw;
  }

  .text-overlay2 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "aAnotherTag", Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 4rem;
    z-index: 10000;
    pointer-events: none;
    text-align: center;
    max-width: 90vw;
  }
</style>
