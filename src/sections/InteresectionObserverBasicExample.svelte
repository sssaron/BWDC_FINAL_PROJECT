<script>
  import { onMount } from "svelte";
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Highcharts from "highcharts";
  import paper from "../public/paper.jpg";

  let chart1Div;

  onMount(() => {
    if (chart1Div) {
      Highcharts.chart(chart1Div, {
        title: {
          text: 'Homeownershup Percentages by Race 1970-2022',
          align: 'left'
        },
        subtitle: {
          text: 'Data from <a href="https://depts.washington.edu/covenants/homeownership_king.shtml" target="_blank">Udub</a>.',
          align: 'left'
        },
        yAxis: {
          title: { text: 'Percent' }
        },
        xAxis: {
          accessibility: { rangeDescription: 'Year from 1970' }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          series: { label: { connectorAllowed: false }, pointStart: 1970 }
        },
        series: [
          { name: 'White', data: [64, 64, 62, 65, 64, 62] },
          { name: 'Black', data: [50, 41, 37, 37, 31, 28] }
        ],
        responsive: {
          rules: [
            { 
              condition: { maxWidth: 500 },
              chartOptions: { legend: { layout: 'horizontal', align: 'center', verticalAlign: 'bottom' } }
            }
          ]
        }
      });
    }
  });
</script>

<div>
  <Scroller layout="left">
    {#snippet sticky()}
      <!-- First chart -->
      <div class="chart" bind:this={chart1Div} style="width:720px; height:480px;"></div>
    {/snippet}

    {#snippet scrolly()}
      <ArticleText>
       <p> Only <b>28% </b> of black people own a home. Considering how many other indicators of 
      wealth there are for this community largely
      made up by black immigrants, we can clearly see- there must be some <b>systemic issues</b> at hand</p>
      </ArticleText>

      <ArticleText>
       <p>So, what are they? For one, many immigrants from East Africa, with nearly </p>
      </ArticleText>

      <ArticleText>
        <p> Looking at the data, we can clearly see that this wasn't always the case, with 50% of black people
          owning a home in 1970. This means that there was redlining- a practice done to keep Black Americans from
          owning homes in the past that continues to affect us today.
        </p>
      </ArticleText>

      <ArticleText>So, how can we end this?</ArticleText>
    {/snippet}
  </Scroller>
</div>

<style>
  .chart {
    width: 90%;
    max-width: 720px;
    margin: 0 auto 2rem;
    background-image: url({paper});
    text-shadow: none;
  }

  .highcharts-root {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
