<script>
  let { children } = $props();
</script>

<div class="article-text">
  <p>
    {@render children()}
  </p>
</div>

<style>
  .article-text {
    margin: 50vh auto;
    width: 50%;
    height: 70%;
    background-image: url("paper.jpg");
    color: black;
    padding: 20px;
  }
</style>
