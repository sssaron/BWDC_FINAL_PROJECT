<script>
  export let title;
  export let subtitle;

  let scrollY = 0;

  function onScroll() {
    scrollY = window.scrollY;
  }
</script>

<svelte:window on:scroll={onScroll} />

<div style="height: 200vh; background: #f0f0f0;">
  <div class="title-card">
    <div
      class="title-content"
      style="height: {scrollY < 500 ? 150 - scrollY * 0 : 0}px;
       font-size: {scrollY < 500 ? 6 - scrollY * 0.0 : 0.0}rem;"
    >
      <p>{title} <br /> {subtitle}</p>
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: "aAnotherTag";
    src: url("C:\Users\hatse\OneDrive\Desktop\KWK_BWDC_Proj\BWDC_FINAL_PROJECT\public\a_another_tag\aAnotherTag.otf")
      format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }

  .title-content {
    font-weight: bold;
    font-family: "aAnotherTag", Arial, Helvetica, sans-serif;
    font-size: 3.5rem;
    transition:
      height 0.5s ease,
      font-size 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
  }

  .title-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("background-title.gif");
    background-size: cover;
    background-position: center;
    opacity: 0.3; /* fixed opacity */
    z-index: -1; /* behind content */
  }
  .title-card {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100%;
    color: white;
    background: black;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0rem;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
</style>
