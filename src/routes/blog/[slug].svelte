<script context="module">
  export async function load({params, fetch}) {
    try {
      const url = `/blog/${params.slug}.json`
      const res = await fetch(url)
      const data = await res.json()

      if (data?.post) {
        return {
          props: data
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import AuthorCard from '$lib/AuthorCard.svelte'
  import SanityImage from '$lib/SanityImage.svelte'

  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>
<div class="container bg-light py-5">
  <div class="d-flex justify-content-center">
    <h1>{post.title}</h1>
  </div>
  <p class="d-flex justify-content-center mb-3 blog-post-meta">
    Published {new Date(post.publishedAt).toLocaleDateString('en', {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    })}
  </p>

  {#if post.image}
    <div class="d-flex justify-content-center">
      <SanityImage image={post.image} />
    </div>
  {/if}
  <div class="row justify-content-center">
    <article class="blog-post col-10 px-3 py-2">
      <PortableText
        blocks={post.body}
        serializers={{
          types: {
            code: Code,
            image: ImageBlock,
            authorReference: AuthorBlock
          },
          marks: {
            link: Link
          }
        }}
      />
      {#each post.authors || [] as author}
        <AuthorCard {author} />
      {/each}
    </article>
  </div>
</div>
