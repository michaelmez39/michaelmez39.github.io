<script>
    import {slide,fade,fly} from "svelte/transition";
    import { backIn, backOut } from 'svelte/easing';
    export let visibleNext = true;
    export let visiblePrevious = true;
    export let next = "/";
    export let previous = "/";
</script>

{#if (visiblePrevious)}
<a class="nav-button" href={previous} transition:fade>
        Previous
</a>
{:else}
    <a class="nav-button" transition:fade>
    </a>
{/if}
<article out:slide="{{delay:100, duration: 300, easing: backIn}}" in:slide="{{delay:550, duration: 200, easing: backOut}}">
    <slot />
</article>

{#if (visibleNext)}
<a class="nav-button next" href={next} transition:fade>
    Next
</a>
{:else}
    <a class="nav-button next" transition:fade>
    </a>
{/if}
<div class="background" transition:fade>
</div>
<style>
    .background {
        background-image: var(--background-image);
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 0;
		background-size: cover;
        background-position: bottom;
    }
    article {
        grid-column: span 4;
        background-color: rgba(156, 209, 230, 0.63);
        backdrop-filter: blur(8px);
        padding: 30px;
        color: rgb(16, 28, 43);
        border-radius: 10px;
        margin-top: 5px;
        margin-bottom: auto;
        z-index: 1;
    }
</style>