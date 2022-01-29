<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch(
        'https://azmi.web.id/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link'
      );
      const data = await res.json();
      console.log('200', data);
      return {
        props: {
          datas: data
        }
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  export let datas = []
</script>

{#if datas}
<div class="container py-5">
  {#each datas as data}
    <div class="row mb-5">
        <div class="col-auto">
      <h1>{data.title.rendered}</h1>
      <p>{@html data.excerpt.rendered}</p>
    </div>
</div>
  {/each}
  </div>
{/if}
