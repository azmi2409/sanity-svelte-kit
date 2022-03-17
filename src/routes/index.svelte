<script>
  import {Motion} from 'svelte-motion'
  import Svg from '$lib/Svg.svelte'

  let y

  const heading = `Hi I'm Azmi Web Developer`.split('')
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
  <title>Azmi's Personal Website</title>
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
    background: linear-gradient(160deg, #ff7e00, #ffffff, #5cff00);
    background-size: 200% 120%;
    font-size: 4em;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: gradient 5s ease infinite;
    animation: gradient 5s ease infinite;
    animation-direction: reverse;
  }
  h1:hover {
    -webkit-text-fill-color: #eee;
  }

  @-webkit-keyframes gradient {
    0% {
      background-position: 10% 0%;
    }
    50% {
      background-position: 91% 100%;
    }
    100% {
      background-position: 10% 0%;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 10% 0%;
    }
    50% {
      background-position: 91% 100%;
    }
    100% {
      background-position: 10% 0%;
    }
  }
</style>
