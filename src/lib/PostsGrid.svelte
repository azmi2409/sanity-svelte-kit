<script>
  import PostCard from '$lib/PostCard.svelte'

  export let posts = []
</script>


  <div class="row mt-4">
  {#each posts as post (post.slug.current)}
  <div class="col-lg-3 col-md-6">
    <PostCard {post} />
  </div>
  {/each}
</div>


<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem 2rem;
    margin-top: 3rem;
  }
</style>
