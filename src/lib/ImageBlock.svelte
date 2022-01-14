<script>
  import SanityImage from './SanityImage.svelte'

  export let portableText
  $: ({block} = portableText)
</script>

{#if block.asset}
<div class="d-flex justify-content-center">
  <figure>
    <SanityImage image={block} />
    {#if block.caption}
      <figcaption>{block.caption}</figcaption>
    {/if}
  </figure>
</div>
{/if}
