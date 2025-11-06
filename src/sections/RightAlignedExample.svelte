<script>
  import { fly, fade } from "svelte/transition";
  import ObservedArticleText from "../lib/ObservedArticleText.svelte";
  import ArticleText from "../lib/ArticleText.svelte";

  let duckVisible = [false, false, false];

  const options = { threshold: [0.5] };

  const makeCallback = (index) => (entries) => {
    entries.forEach((entry) => {
      duckVisible[index] = entry.isIntersecting;
    });
  };
</script>

<div class="layout">
  <!-- Left sticky background with ducks -->
  <div class="wrapper-left">
    {#if duckVisible[0]}
      <img
        src="duck.png"
        alt="Duck 1"
        class="duck-img"
        style="top: 20%; left: 30%;"
        in:fly={{ y: 200, duration: 800 }}
        out:fade
      />
    {/if}

    {#if duckVisible[1]}
      <img
        src="duck.png"
        alt="Duck 2"
        class="duck-img"
        style="top: 40%; left: 60%;"
        in:fly={{ y: 200, duration: 800 }}
        out:fade
      />
    {/if}

    {#if duckVisible[2]}
      <img
        src="duck.png"
        alt="Duck 3"
        class="duck-img"
        style="top: 70%; left: 50%;"
        in:fly={{ y: 200, duration: 800 }}
        out:fade
      />
    {/if}
  </div>

  <!-- Right scrollable text -->
  <div class="text-side">
    <ArticleText>
      <p><strong>Space Needle</strong> – the iconic tower in Seattle.</p>
    </ArticleText>
    <ObservedArticleText {options} callback={makeCallback(0)}>
      <p><strong>Space Needle</strong> – the iconic tower in Seattle.</p>
    </ObservedArticleText>

    <ObservedArticleText {options} callback={makeCallback(1)}>
      <p><strong>Gum Wall</strong> – gross, but cool.</p>
    </ObservedArticleText>

    <ObservedArticleText {options} callback={makeCallback(2)}>
      <p>
        <strong>Sara and Mebrahtu</strong> – a family stroll through Seattle.
      </p>
    </ObservedArticleText>
  </div>
</div>

<style>
  .layout {
    display: flex;
    height: 200vh; /* allow scrolling */
    background-color: black; /* black background */
    padding-bottom: 100%; /* extra space at bottom */
  }

  .wrapper-left {
    position: sticky;
    top: 0;
    width: 100%;
    height: 300vh;
    background-image: url("/paper.jpg");
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  .text-side {
    width: 100%;
    padding: 4rem;
    padding-bottom: 50%; /* more bottom padding for extra space */
    color: white; /* text color white for contrast */
  }

  .duck-img {
    position: absolute;
    width: 100px;
    z-index: 2;
    pointer-events: none;
  }
</style>
