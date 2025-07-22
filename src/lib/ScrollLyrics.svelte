<script>
  import { onMount, onDestroy } from "svelte";

  // Lyrics lines
  const lines = [
    "28% OF BLACK PEOPLE OWN A HOME",
    "28% OF BLACK PEOPLE OWN A HOME",
    "28% OF BLACK PEOPLE OWN A HOME",
    "28% OF BLACK PEOPLE OWN A HOME",
    "WHITE PEOPLE MAKE 1.9 MORE",
    "WHITE PEOPLE MAKE 1.9 MORE",
    "WHITE PEOPLE MAKE 1.9 MORE",
    "WHITE PEOPLE MAKE 1.9 MORE",
    "WHITE PEOPLE MAKE 1.9 MORE",
    "WHITE PEOPLE MAKE 1.9 MORE",
    "WHITE PEOPLE MAKE 1.9 MORE",
    "WHITE PEOPLE MAKE 1.9 MORE",
  ];
</script>

<ul class="list">
  {#each lines as line, i}
    <li class="line line-{i + 1}">
      {@html line.includes("burning")
        ? line.replace("burning", '<span class="gas">burning</span>')
        : line}
    </li>
  {/each}
</ul>

<style>
  :root {
    scrollbar-color: rgb(255 255 255 / 0.2) #000;
  }

  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #000;
    font-family: "DM Sans", serif;
    font-optical-sizing: auto;
  }

  .list {
    height: 600vh; /* very tall to enable scrolling */
  }

  .list li {
    position: fixed;
    font-size: 8vw;
    min-width: 140px;
    width: 55%;
    font-variation-settings: "wght" 1000;
    text-wrap: balance;
    letter-spacing: -0.4vw;
    line-height: 1;
    text-align: center;
    padding: 0.25rem;
    color: #fff;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    mask-image: linear-gradient(
      90deg,
      rgb(0 0 0 / 0) calc(33.33% - 1px),
      rgb(0 0 0 / 1) 33.33%,
      rgb(0 0 0 / 1) calc(66.66% - 1px),
      rgb(0 0 0 / 0) 66.66%
    );
    mask-size: 300% 100%;
    mask-position: 0% 0;
    text-shadow: 0px 0px 1vw rgb(255 255 255 / 0.8);
    will-change: mask-position, rotate, opacity, font-variation-settings;
  }

  /* Animate each line with the scroll timeline */
  .line-1 {
    animation: line-1 linear;
    animation-timeline: scroll();
  }
  .line-2 {
    animation: line-2 linear;
    animation-timeline: scroll();
  }
  .line-3 {
    animation: line-3 linear;
    animation-timeline: scroll();
  }
  .line-4 {
    animation: line-4 linear;
    animation-timeline: scroll();
  }
  .line-5 {
    animation: line-5 linear;
    animation-timeline: scroll();
  }
  .line-6 {
    animation: line-6 linear;
    animation-timeline: scroll();
  }
  .line-7 {
    animation: line-7 linear;
    animation-timeline: scroll();
  }
  .line-8 {
    animation: line-8 linear;
    animation-timeline: scroll();
  }

  .gas {
    animation: burn linear;
    animation-timeline: scroll();
  }

  .line-1,
  .line-2,
  .line-3,
  .line-4,
  .line-5,
  .line-6,
  .line-7,
  .line-8,
  .gas {
    animation-range: 14000px 15000px;
  }

  /* Original keyframes */
  @keyframes line-1 {
    0% {
      mask-position: 50% 0%;
      rotate: 0deg;
    }
    12.5% {
      mask-position: 100% 0;
      rotate: 1deg;
      opacity: 1;
      font-variation-settings: "wght" 700;
    }
    12.6% {
      mask-position: 100% 0;
      rotate: 1deg;
      opacity: 0;
      font-variation-settings: "wght" 700;
    }
    87.4% {
      mask-position: 0% 0;
      rotate: -1deg;
      opacity: 0;
      font-variation-settings: "wght" 1000;
    }
    87.5% {
      mask-position: 0% 0;
      rotate: -1deg;
      opacity: 1;
    }
    100% {
      mask-position: 50% 0%;
      rotate: 0deg;
    }
  }
  @keyframes line-2 {
    0% {
      mask-position: 0% 0%;
      rotate: -1deg;
    }
    12.5% {
      mask-position: 50% 0;
      rotate: 0deg;
      font-variation-settings: "wght" 1000;
    }
    25%,
    100% {
      mask-position: 100% 0;
      rotate: 1deg;
      font-variation-settings: "wght" 700;
    }
  }
  @keyframes line-3 {
    12.5% {
      mask-position: 0% 0%;
      rotate: -1deg;
    }
    25% {
      mask-position: 50% 0;
      font-variation-settings: "wght" 1000;
      rotate: 0deg;
    }
    37.5%,
    100% {
      mask-position: 100% 0;
      font-variation-settings: "wght" 700;
      rotate: 1deg;
    }
  }
  @keyframes line-4 {
    25% {
      mask-position: 0% 0%;
      rotate: -2deg;
    }
    37.5% {
      mask-position: 50% 0;
      font-variation-settings: "wght" 1000;
      rotate: 0deg;
    }
    50%,
    100% {
      mask-position: 100% 0;
      font-variation-settings: "wght" 700;
      rotate: 2deg;
    }
  }
  @keyframes line-5 {
    37.5% {
      mask-position: 0% 0%;
      rotate: -1deg;
    }
    50% {
      mask-position: 50% 0;
      font-variation-settings: "wght" 1000;
      rotate: 0deg;
    }
    62.5%,
    100% {
      mask-position: 100% 0;
      font-variation-settings: "wght" 700;
      rotate: 1deg;
    }
  }
  @keyframes line-6 {
    50% {
      mask-position: 0% 0%;
      rotate: -2deg;
    }
    62.5% {
      mask-position: 50% 0;
      font-variation-settings: "wght" 1000;
      rotate: 0deg;
    }
    75%,
    100% {
      mask-position: 100% 0;
      font-variation-settings: "wght" 700;
      rotate: 2deg;
    }
  }
  @keyframes line-7 {
    62.5% {
      mask-position: 0% 0%;
      rotate: -2deg;
    }
    75% {
      mask-position: 50% 0;
      font-variation-settings: "wght" 1000;
      rotate: 0deg;
    }
    87.5%,
    100% {
      mask-position: 100% 0;
      font-variation-settings: "wght" 700;
      rotate: 2deg;
    }
  }
  @keyframes line-8 {
    75% {
      mask-position: 0% 0%;
      rotate: -1deg;
    }
    87.5% {
      mask-position: 50% 0;
      font-variation-settings: "wght" 1000;
      rotate: 0deg;
    }
    100% {
      mask-position: 100% 0;
      font-variation-settings: "wght" 700;
      rotate: 1deg;
    }
  }
  @keyframes burn {
    0%,
    50%,
    75% {
      color: rgb(255 255 255);
      text-shadow: 0px 0px 1vw rgb(255 255 255 / 0.8);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    62.5%,
    100% {
      color: red;
      text-shadow: 0 0 1vw red;
    }
  }
</style>
