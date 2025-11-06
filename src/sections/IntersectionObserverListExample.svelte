<script>
  import { blur, slide } from "svelte/transition";
  import Scroller from "../lib/Scroller.svelte";
  import ObservedArticleText from "../lib/ObservedArticleText.svelte";
  import ArticleText from "../lib/ArticleText.svelte";

  const options = {
    threshold: [0.95],
  };

  let popCount = 0;
  const MAX_POP = 8;
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const elem = entry.target;
      // TODO: only do this if we're scrolling upward
      if (
        entry.isIntersecting &&
        !elem.dataset.activated &&
        popCount < MAX_POP
      ) {
        elem.dataset.activated = "true";
        elem.style.backgroundColor = "#e3ff00";
        const listItem = firstList.pop();
        secondList.push(listItem);
      }
    });
  };

  let firstList = $state([
    "Ethiopian Community in Seattle",
    "East African Community Services",
    "African Community Housing and Development",
  ]);

  let secondList = $state([]);
</script>

<div>
  <Scroller layout="right">
    {#snippet sticky()}
      <div id="lists-container">
        <div class="list2">
          <h3>organizations</h3>
          {#each firstList as item}
            <div
              class="list-item2"
              in:slide={{ duration: 750 }}
              out:blur={{ duration: 1000 }}
            >
              {item}
            </div>
          {/each}
        </div>

        <div class="list">
          <h3>organizations</h3>
          {#each secondList as item}
            <div
              class="list-item"
              in:slide={{ duration: 750 }}
              out:blur={{ duration: 1000 }}
            >
              {item}
            </div>
          {/each}
        </div>
      </div>
    {/snippet}

    {#snippet scrolly()}
      <ArticleText>
        There are multiple organizations in Seattle working to close the wealth gap for
        African immigrants in Seattle. Here are three really great ones:
      </ArticleText>

      <ObservedArticleText {callback} {options}>
       <b><a href="https://www.achdo.org/realestatedevelopment">ACHDO.ORG</a></b>: an organization dedicated to helping
       African communities through economic development, resource navigation, and other means of support. You can help them by:
       <ul>
        <li><a href="https://www.achdo.org/fund-our-market">Emailing the city council</a> to fund the Deldridge farmers market</li>
       <li>If you're in Seattle, visiting the market and supporting African owned businesses!</li>
    </ul>
      </ObservedArticleText>

      <ObservedArticleText {callback} {options}>
      <b><a href="https://www.eastafricancs.org/">EASTAFRICANS.ORG</a>:</b> A non-profit specifically for helping East African refugees in the Seattle area. 
        they provide a wide range of services like after school programs, daycares, and youth menotrship. You can support them by:
        <ul>
            <li><a href="https://www.eastafricancs.org/?form=FUNWUCNHZFS">Donating</a> to them. They're currently working on building a family empowerment 
            cetner, with affordable housing, daycares, a coffee shop, and more!</li>

        </ul>
      </ObservedArticleText>

      <ObservedArticleText {callback} {options}>
       <b><a href="https://ecseattle.org/">ECSEATTLE.ORG</a></b>: The Ethiopian Community in Seattle is another 
       non-profit, This time is dedicated to supporting Ethiopian immigrants who face linguistic and cultural
        barriers after moving to the United States. They recently recieved nearly a million dollars to build an affordable
        housing unit named Addis village. You can support them by:
        <ul>
            <li><a href="https://ecseattle.org/donate/">Donating</a> to them to keep funding their future endeavors!</li>
        </ul>
      </ObservedArticleText>

    {/snippet}
  </Scroller>
</div>

<style>
  #lists-container {
    display: flex;
    position: fixed;
    flex: 1 1; /* Allows growing, shrinking */
    width: 100%;
  }

  .list {
    margin: 0px 20px;
    background-image: url("/paper.jpg");
    color: #8427c9;
    border: solid #8427c9 3px;
    border-radius: 20px;
    box-shadow: 16px 16px #8427c9;
    width: 100%;
  }

    .list2 {
    margin: 0px 20px;
    background-image: url("/paper.jpg");
    color: #4b4b4b;
    border: solid #434244 3px;
    border-radius: 20px;
    box-shadow: 16px 16px #898989;
    width: 100%;
  }

  .list-item {
    background-color: #ba81f3;
    color: #10001d;
    border: solid #000000 3px;
    border-radius: 20px;
    padding: 10px;
    width: 50%;
    margin: 5px auto;
    text-align: center;
    font-weight: bold;
  }


  .list-item2 {
    background-color: rgb(86, 86, 86);
    color:  rgb(86, 86, 86);
    border: solid #000000 3px;
    border-radius: 20px;
    padding: 10px;
    width: 50%;
    margin: 5px auto;
    text-align: center;
    
  }

  h3 {
    text-align: center;
  }
</style>
