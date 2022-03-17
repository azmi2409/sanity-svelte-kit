<script>
  import {Motion} from 'svelte-motion'
  import Svg from '$lib/Svg.svelte'

  let y

  const heading = `Hi I'm Azmi Web Developer`.split('')
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
  <title>Azmi Muwahid Web Dev</title>
</svelte:head>

<div class="container">
  <div class="row">
    <div class="col-12" style="position: relative; max-height: 70vh;">
      <Svg />
      <div
        class="d-flex mx-2 p-5 flex-wrap justify-content-center align-content-center align-self-center align-items-center"
        style="min-height: 100%; position:absolute; top:0; left:0; right:0;"
      >
        {#each heading as head}
          {#each head.split('') as letter}
            <Motion
              whileHover={{
                rotate: 5,
                y: -5,
                transition: {ease: 'easeOut', duration: 0.3}
              }}
              let:motion
            >
              <h1 style="cursor: pointer;" use:motion>{letter}</h1>
            </Motion>
          {/each}
          {#if head == ' '}
            <div class="d-flex" style="flex-basis: 100%;" />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    color: whitesmoke;
    min-height: 80vh;
  }
  h1 {
    font-size: 64px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1:hover {
    -webkit-text-fill-color: #eee;
  }
</style>
