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
  <div class="title-content"
    style="height: {scrollY < 500 ? 150 - (scrollY * 0) : 0}px;
       font-size: {scrollY < 500 ? 3 - (scrollY * 0.0) : 0.0}rem;">
   <p> {title} <br> {subtitle}</p>

</div>
</div>

</div>

<style>
.title-content{
    font-weight: bold;
    transition: height 0.2s ease, font-size 0.2s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background: #034c36;
    color: #e3ff00;

}
.title-card {
    background-color: #ffffff;
    position: sticky;
    top: 0;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }


</style>