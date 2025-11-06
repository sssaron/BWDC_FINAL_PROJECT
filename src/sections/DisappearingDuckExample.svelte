<script>
  import { fade, fly } from "svelte/transition";
  import Scroller from "../lib/Scroller.svelte";
  import ObservedArticleText from "../lib/ObservedArticleText.svelte";

  let duckIsVisible = $state(false);

  const options = {
    threshold: [0.65, 0.75],
  };

  const simpleCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const elem = entry.target;

      if (entry.intersectionRatio >= 0.9) {
        // "active" state
        elem.style.backgroundColor = "#e3ff00";
      } else if (entry.intersectionRatio < 0.9) {
        // "inactive" state
        elem.style.backgroundColor = "#888888";
      }
    });
  };

  const showDuckCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const elem = entry.target;

      if (entry.intersectionRatio >= 0.9) {
        elem.style.backgroundColor = "#e3ff00";
        duckIsVisible = true;
      } else if (entry.intersectionRatio < 0.9) {
        elem.style.backgroundColor = "#888888";
      }
    });
  };

  const removeDuckCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const elem = entry.target;

      if (entry.intersectionRatio >= 0.9) {
        elem.style.backgroundColor = "#e3ff00";
        duckIsVisible = false;
      } else if (entry.intersectionRatio < 0.9) {
        elem.style.backgroundColor = "#888888";
      }
    });
  };
</script>

<div>
  <Scroller layout="left">
    {#snippet sticky()}
      <div>
        {#if duckIsVisible}
          <img
            class="duck-img"
            src="sara_grad.png"
            alt="KWK rubber duck!"
            in:fly={{ x: 0, y: 300, duration: 200 }}
            out:fade
          />
        {/if}
        <br />
      </div>
    {/snippet}

    {#snippet scrolly()}
      <ObservedArticleText callback={showDuckCallback} {options}>
        Sara recently graduted high school! She's planning to go university and
        get her bachelors degree. About <strong>30.7% </strong>black people get
        their bachelors degree in King County - thats in the top 25% of all
        counties in the nation.
      </ObservedArticleText>

      <ObservedArticleText callback={showDuckCallback} {options}>
        While its difficult to find exact numbers on degree attainment, we know
        that nationally, <a
          href="https://www.pewresearch.org/internet/2018/04/24/sub-saharan-african-immigrants-in-the-u-s-are-often-more-educated-than-those-in-top-european-destinations/#:~:
        text=As%20the%20annual%20number%20of,outside%20of%20sub%2DSaharan%20Africa."
          >69%</a
        > of sub-saharan african immigrants report having some college experience.
        Additionally, sub-saharan african immigrants have a 92.9% employment rate
        nationwide.
      </ObservedArticleText>

      <ObservedArticleText callback={showDuckCallback} {options}>
        So, when examining, homeownership and income levels in King County,
        you'd expect them to be high and on par with their white counterparts,
        right?
      </ObservedArticleText>

      <ObservedArticleText callback={removeDuckCallback} {options}>
        <strong> ....right???</strong>
      </ObservedArticleText>
    {/snippet}
  </Scroller>
</div>

<style>
  .duck-img {
    display: block;
    margin-right: 100px;
    width: 90%; /* adjust as needed */
    transform: rotate(15deg);
  }
</style>
