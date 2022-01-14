<script>
  import SanityImage from './SanityImage.svelte'

  export let portableText
  $: ({block} = portableText)
</script>

{#if block.asset}
<div class="row justify-content-center">
  <div class="col-lg-8 col-md-10">
  <figure>
    <SanityImage image={block} />
    {#if block.caption}
      <figcaption>{block.caption}</figcaption>
    {/if}
  </figure>
</div>
</div>
{/if}
