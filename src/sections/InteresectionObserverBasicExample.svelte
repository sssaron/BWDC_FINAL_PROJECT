<script>
  import Scroller from "../lib/Scroller.svelte";
  import ObservedArticleText from "../lib/ObservedArticleText.svelte";

  // this `options` object below is passed into the <ObservedArticleText>
  // component, and from there it gets passed to the IntersectionObserver object w
  // when it's created.
  // the thresholds to fire the callback are 85% and 95%. in the callback function,
  // we check whether the visible area is >= 90%. so, triggering the callback at
  // 85% and 95% ensures we trigger the correct change in background color
  // whether the element is being scrolled into the viewport or out of the viewport.
  const options = {
    threshold: [0.85, 0.95],
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const elem = entry.target;

      elem.style.transition = "background-color 0.3s ease, width 0.3s ease";

      if (entry.intersectionRatio >= 0.9) {
        // Fully visible
        elem.style.backgroundColor = "#e3ff00";
        elem.style.width = "50%";
      } else if (entry.intersectionRatio >= 0.5) {
        // Partially visible
        elem.style.backgroundColor = "orange";
        elem.style.width = "30%";
      }
    });
  };
</script>

<div>
  <Scroller layout="left">
    {#snippet sticky()}{/snippet}

    {#snippet scrolly()}
      <ObservedArticleText {callback} {options}>
        <p>
          Clearly, the numbers aren't adding up. In King County, only <a
            href="https://depts.washington.edu/covenants/homeownership_king.shtml"
            >28% of black people</a
          >
          own their home, a <strong>significant</strong>
          drop from 1970, when 50% of black people reported owning their home.
        </p>
      </ObservedArticleText>
      <ObservedArticleText {callback} {options}>
        <p>
          White people make nearly 2 times more than black people in King
          County, despite the generally low unemployment rate. <strong
            >Theres an obvious disconnect that needs to be fixed</strong
          >
        </p>
      </ObservedArticleText>

      <ObservedArticleText {callback} {options}>
        <code>{"<ObservedArticleText>"}</code> example #3
      </ObservedArticleText>
    {/snippet}
  </Scroller>
</div>
