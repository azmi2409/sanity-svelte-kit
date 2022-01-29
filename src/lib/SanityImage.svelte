<script>
  import {urlFor} from './sanityClient';

  import { spring } from 'svelte/motion';
	
	let isBooped = false;
	export let rotation = 10;
	export let timing = 200;
	
	let springyRotation = spring(0, {
		stiffness: 0.1,
		damping: 0.15
	});
	
	$: springyRotation.set(isBooped ? rotation : 0);
	
	$: style = `
		display: inline-block;
		transform: rotate(${$springyRotation}deg);
	`;	

	$: if (isBooped) {		
		window.setTimeout(() => {isBooped = false}, timing);
	}
	
	function triggerBoop() {
		isBooped = true;
	}


  export let image
  export let maxWidth = 800
  export let alt = undefined

  // Example image document ID: image-cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900-png
  // Structure: image-${storedImgId}-${dimensions}-${format}

  // If we split it by "-", the 3rd element are the dimensions (1350x900)
  $: dimensions = image?.asset?._ref?.split('-')[2]
  // If we split dimensions by "x", we get the width (1350) and height (900)
  $: [width, height] = dimensions.split('x').map(Number)

  $: aspectRatio = width / height

  // Once loaded, the image will transition to full opacity
  $: loaded = false
</script>

{#if image}
  <img
  on:mouseenter={triggerBoop}
    class="mb-3 py-3 img-fluid"
    loading="lazy"
    src={urlFor(image).width(maxWidth).fit('fillmax')}
    alt={alt || image.alt || ''}
    style="{style}aspect-ratio: {aspectRatio};filter: opacity({loaded?1:0}) transition: .2s opacity;"
    on:loading={console.log('Loading')} on:load={() => (loaded = true)}
  />
{/if}
