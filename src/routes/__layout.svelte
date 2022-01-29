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
    color: #040320;
    text-decoration: none;
  }
  :global(a:hover) {
    color: #05c46b;
    border-bottom: none;
    text-decoration: underline;
  }
  :global(.container) {
    background-color: #f5f5f5 !important;
  }
</style>
