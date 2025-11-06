<script>
  import { onMount } from "svelte";
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Highcharts from "highcharts";

  let chart;

  onMount(() => {
    chart = Highcharts.chart("container", {
      chart: {
        type: "bar",
        backgroundColor: {
          pattern: {
            width: 720,
            height: 480,
          },
        },
      },
      title: {
        text: "King County Population by Race (Approximate)",
      },
      xAxis: {
        categories: [
          "Non-Hispanic White",
          "Black and African American",
          "Asian",
          "Native Hawaiian and Pacific Islander",
          "Native American and races not listed",
          "Hispanic and Latinx",
          "Multiracial",
        ],
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Population",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
      },
      tooltip: {
        valueSuffix: " people",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Population",
          data: [1230600, 147800, 449700, 19400, 25300, 243000, 153800],
        },
      ],
    });
  });
</script>

<div>
  <Scroller layout="left">
    {#snippet sticky()}
      <div
        class="chart"
        id="container"
        style="width: 720px; height: 480px;"
      ></div>
    {/snippet}

    {#snippet scrolly()}
      <ArticleText>
        Despite becoming more racially diverse in the past few years, <a
          href="https://kingcounty.gov/en/dept/executive/governance-leadership/performance-strategy-budget/regional-planning/demographics"
        >
          King County</a
        > has a relatively low black population, hovering around 6%.
      </ArticleText>

      <ArticleText>
        Out of that 6%, nearly <strong>40,000</strong> black people in King
        County are <strong>east african immigrants</strong>, coming from
        countries like Eritrea, Somalia, and Kenya. Thats nearly
        <strong>one in three</strong> black people immigrating from east africa alone!
      </ArticleText>

      <ArticleText>
        A relatively new immigrant group, east african communities have grown
        rapidly since the 90's and 2000's. Other counties with large east
        african communities include <strong
          >Montgomery County, Maryland, Hennepin County, Minnesota, and Los
          Angeles County, California!</strong
        >
      </ArticleText>

      <ArticleText>For now, lets focus on King County.</ArticleText>
    {/snippet}
  </Scroller>
</div>

<style>
  .highcharts-root {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .chart {
    width: 90%;
    background-image: url("paper.jpg");
    margin: 0 auto;
    text-shadow: none;
  }

  #container {
    width: 720px;
    height: 480px;
    position: relative;
    z-index: 0;
  }
</style>

