<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/blog/all.json')
      const data = await res.json()
      return {
        props: data
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  import { Badge } from 'sveltestrap';
  import PostsGrid from '$lib/PostsGrid.svelte'

  export let posts
</script>

<svelte:head>
  <title>Azmi's Blog</title>
</svelte:head>

<div class="container py-5 my-0">
  <div class="d-flex justify-content-center">
<h1>Recent posts   </h1><h2><Badge pill>New</Badge></h2>
</div>
<PostsGrid {posts} />
</div>
