<script>
  import SanityImage from './SanityImage.svelte';
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from 'sveltestrap';

  export let post
</script>

<Card body color="light" class="mb-3 border-0">
<article>
  <CardHeader class="bg-light border-0">
    <CardTitle class="py-3 bg-light">
    <a rel="prefetch" href="/blog/{post.slug.current}">{post.title}</a>
</CardTitle>
</CardHeader>
  {#if post.image}
  <CardBody>
    <div class="image border-0 rounded-3">
      <SanityImage image={post.image} maxWidth={300} />
    </div>
  </CardBody>
  {/if}
</article>
</Card>

<style>
  article {
    display: flex;
    /* Show images first */
    flex-direction: column-reverse;
  }

  h2 {
    margin: 1rem 0 0;
  }

  h2 a {
    text-decoration: none;
  }

  .image {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
</style>
