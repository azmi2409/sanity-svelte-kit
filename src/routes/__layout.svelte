<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header/>

<main>
  <slot />
</main>

<Footer />

<style>
  :global(a) {
    color: black;
  }
  :global(a:hover) {
    color: #1e61cd;
    border-bottom: none;
  }
</style>
