<script>
  import SanityImage from './SanityImage.svelte'

  export let author
</script>

{#if author?.name}
<div class="container bg-light py-3 px-3">
  <div class="d-flex justify-content-start ms-auto mb-3">
  <a href="/authors/{author.slug.current}">
    <span>
      <SanityImage image={author.image} maxWidth={80} />
    </span>
    {author.name}
  </a>
</div>
</div>
{/if}

<style>
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    vertical-align: middle;
  }
  span :global(img) {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 0;
  }
</style>
