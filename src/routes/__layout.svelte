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
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  :global(body) {
    background-color: black !important;
    font-family: Space Grotesk, sans-serif;
  }
  :global(a) {
    color: whitesmoke !important
  }
</style>
