<script>
  import { onMount } from "svelte";
  import Scroller from "../lib/Scroller.svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Highcharts from "highcharts";

  let chart1Div;

  onMount(() => {
    if (chart1Div) {
      Highcharts.chart(chart1Div, {
        title: {
          text: "Homeownership Percentages by Race 1970-2022",
          align: "left",
        },
        subtitle: {
          text: 'Data from <a href="https://depts.washington.edu/covenants/homeownership_king.shtml" target="_blank">Udub</a>.',
          align: "left",
        },
        yAxis: {
          title: { text: "Percent" },
        },
        xAxis: {
          accessibility: { rangeDescription: "Year from 1970" },
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        },
        plotOptions: {
          series: { label: { connectorAllowed: false }, pointStart: 1970 },
        },
        series: [
          { name: "White", data: [64, 64, 62, 65, 64, 62] },
          { name: "Black", data: [50, 41, 37, 37, 31, 28] },
        ],
        responsive: {
          rules: [
            {
              condition: { maxWidth: 500 },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      });
    }
  });
</script>

<div>
  <Scroller layout="left">
    {#snippet sticky()}
      <!-- First chart -->
      <div
        class="chart"
        bind:this={chart1Div}
        style="width:720px; height:480px;"
      ></div>
    {/snippet}

    {#snippet scrolly()}
      <ArticleText>
        <p>
          Only <b>28% </b> of black people in King County own a home.
          Considering how many other indicators of wealth there are for this
          community largely made up by black immigrants, we can clearly see-
          there must be some
          <b>systemic issues</b> at hand
        </p>
      </ArticleText>

      <ArticleText>
        
          They can be broken down into a few key challenges:
          <ul><li><b>Cultural barriers:</b> Despite being fluent in English, the terminology
          and practices used within the housing market is often foregin. Many immigrants are unfamiliar with how American credit
          scores, lending practices, and mortgage systems work.</li>
          <li><b>Gentrification:</b> Many neighbourhoods that East African immigrants settled in in King County 
          have faced gentrification, pushing out the original populations</li>
          <li><b>Lower Average salaries:</b> around 60% of East Africans make between 24k-65k yearly.
          In an expensive city like Seattle, that's not enough to support a family and live comfortably. 
          Many living paycheck to paycheck dont have time to invest, learn to navigate the financial system
          , or engage politically by voting for or against housing-related legislation.</li>
        </ul>
      </ArticleText>

      <ArticleText>
        <p>
          Additionally, looking at the data, we can see that this wasn’t always
          the case-<b>50% of Black people</b> owned homes in 1970. This decline
          reflects the legacy of <b>redlining</b>, a practice historically used to
          prevent Black Americans from purchasing property, which continues to
          impact homeownership rates today. In Seattle, this systemic exclusion
          is especially prevalent: both <b>Black immigrants</b> and
          <b>Black Americans</b> face structural barriers to buying
          homes, contributing to the racial disparities we see in the city’s
          housing market.
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
    background-image: url("/paper.jpg");
    text-shadow: none;
  }

  .highcharts-root {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
   
  }
</style>
