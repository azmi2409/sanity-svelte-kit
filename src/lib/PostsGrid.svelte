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


