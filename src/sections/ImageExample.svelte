<script>
  import Scroller from "../lib/Scroller.svelte";
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

<div>
  <Scroller layout="right">
    {#snippet sticky()}
      <div class="wrapper-left">
        <img class="bg-img" src="first_section_bg.jpg" alt="Background" />
        <!--my_art_bytes on reddit-->

        {#if duckVisible[0]}
          <img
            src="space_needle.png"
            alt="Duck 2"
            class="duck-img"
            style="top: 0%; left: 0%; width: 150%;"
            in:fly={{ y: 200, duration: 800 }}
            out:fade
          />
        {/if}

        {#if duckVisible[1]}
          <img
            src="gumwall.png"
            alt="Duck 1"
            class="duck-img"
            style="top: 30%; left: 8%; transform: rotate(80deg); width: 70%;"
            in:fly={{ y: 150, duration: 800 }}
            out:fade
          />
        {/if}

        {#if duckVisible[2]}
          <img
            src="sara_dad.png"
            alt="sara and her dad"
            class="duck-img"
            style="top: 40%; left: 0%; width: 150%;"
            in:fly={{ y: 200, duration: 800 }}
            out:fade
          />
        {/if}
      </div>
    {/snippet}
    {#snippet scrolly()}
      <ArticleText>
        <p>
          Welcome to <strong>King County, Washington.</strong> Home to the bustling
          city of Seattle and its many attractions!
        </p>
      </ArticleText>
      <ObservedArticleText {options} callback={makeCallback(0)}>
        <p>like the <strong>space needle</strong></p>
      </ObservedArticleText>

      <ObservedArticleText {options} callback={makeCallback(1)}>
        <p>or that <strong>gum wall…</strong></p>
      </ObservedArticleText>

      <ObservedArticleText {options} callback={makeCallback(2)}>
        <p>
          Meet <strong>Sara</strong>. She immigrated to seattle at age 10 and
          has been living here since then.
          <br />Lets watch her and her dad walk through the city!
        </p>
      </ObservedArticleText>
    {/snippet}
  </Scroller>
</div>

<style>
  .Scroller {
    padding: 0;
    margin: 0;
  }
  .wrapper-left {
    margin-top: 0px;
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: black; /* optional background color to check */
  }

  .bg-img {
    width: 100%;
    margin-left: 0;
    height: 100%;
    object-fit: cover;
  }

  .duck-img {
    position: absolute;
    z-index: 2;
    pointer-events: none;
  }
</style>
